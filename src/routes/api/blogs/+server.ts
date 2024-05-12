import type { RequestHandler } from "@sveltejs/kit";
import { addDoc, collection, getDocs } from "firebase/firestore/lite";
import db from "$lib/firebase";
let firePost = collection(db, "posts")


function slugify(text: any) {
    return text
        .replace(/\s/g, '-')
        .replace(/[^a-zA-Z0-9-]/g, '')
        .toLowerCase()
}










// GET posts
export const GET: RequestHandler = async (event) => {
    const data = await getDocs(firePost);
    event.setHeaders({
        'Cache-Control': 'max-age=60'
    })
    const post = {

    }
    return new Response(JSON.stringify(data.docs.map((doc) => { return { id: doc.id, ...doc.data() } })))
    // return new Response(JSON.stringify(data.docs.map((doc) => { return { id: doc.id, ...doc.data() } })))
    // return new Response(JSON.stringify(data.docs.map(doc => doc.id)))
}




// POST posts


export const POST: RequestHandler = async (event) => {

    const data = await event.request.formData();
    const title = data.get('title');
    const content = data.get('content');
    const post = {
        // id: crypto.randomUUID(),
        title: title,
        content: content.replaceAll("\n","\n\n"),
        slug: slugify(title),
        createdAt: Date.now(),
    }
    await addDoc(firePost, post)
    return new Response();

};
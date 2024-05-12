import db from "$lib/firebase";
import type { RequestHandler } from "@sveltejs/kit";
import { collection, getDocs, limit, query } from "firebase/firestore/lite";
export const GET: RequestHandler = async () => {
    const post = collection(db,'posts');
    const q= query(post,limit(4));
    const data = await getDocs(q);
    
    return new Response(JSON.stringify(data.docs.map((doc) =>{return {id:doc.id,...doc.data()}} )));
};
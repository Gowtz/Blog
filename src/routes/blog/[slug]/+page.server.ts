import { doc,getDoc } from "firebase/firestore/lite";
import type { PageServerLoad } from "../$types";
import db from "$lib/firebase";
import type { Post } from "$lib/type";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({params}) => {
    const snap = await getDoc(doc(db,'posts',params.slug)).catch(err => console.log(err))
    // const post = snap.data()
    const post = snap.data()

    if(!post){
        throw error(404,'Post not found')
    }
    

    return post as Post
};
import type { Post } from "$lib/type";
import type { LayoutServerLoad} from "../$types";
export const load: LayoutServerLoad = async ({fetch}) => {
    const post = await fetch('/api/five').then(res => res.json()).catch(err => console.log(err))

    return {post} 
    
};



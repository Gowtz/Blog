import type { Post } from '$lib/type';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({fetch}) => {
    const post:Post[] = await fetch("/api/blogs").then(res=>res.json()).catch(err=>console.log(err))
    return {post}
    
};
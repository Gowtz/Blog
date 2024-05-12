export type Post = {
    id: string,
    title: string,
    content:string,
    slug:string,
    createdAt:number,
    // updatedAt:number,
}

// const data = await event.request.formData();
// const title = data.get('title');
// const content = data.get('content');

// const post:Post = {
//     title:title,
//     content:content,
//     slug:slugify(title),
//     createdAt:Date.now(),
// }
import vk from './vkInit.js'
import dotenv from "dotenv";
dotenv.config()

const getPostsFromVK = async () => {
    let attachments;
    let text;
    let post_id;
    let photo_url;


    let response = await vk.api.wall.get({
        owner_id: process.env.TARGET,
        filter: "owner",
        count: 1
    })

    response.items.forEach(post => {
        attachments = post.attachments
        text = post.text;
        post_id = post.id;
    })

    if(attachments[0].type === 'video') {
        return console.log("пост с видео, скип.")
    }
    attachments.forEach(item => {
        photo_url = item.photo.sizes[item.photo.sizes.length-1].url
    })

    return {text, post_id, photo_url};
}


export default getPostsFromVK
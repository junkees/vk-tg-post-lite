import getPostsFromVk from "./tools/getPostsFromVk.js";
import savePhotoFromVk from "./tools/savePhotoFromVk.js";
import postToTelegramChannel from "./tools/postToTelegramChannel.js";
import assert from "assert";

let old_post = Number();
function isEqual(num1, num2) {
    return num1===num2;
}
const start = async () => {
    try {
        let {text, post_id, photo_url} = await getPostsFromVk()
        if(isEqual(post_id, old_post)) return console.log("Пост уже найден!")
        old_post = post_id;

        let img = await savePhotoFromVk(photo_url, post_id)
        await postToTelegramChannel(text, img)
    }
    catch (e) {
        return e
    }
}

setInterval(start, 10000)
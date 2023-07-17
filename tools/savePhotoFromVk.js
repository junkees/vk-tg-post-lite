import axios from "axios";
import fs from 'fs';

const savePhotoFromVk = async (photo_link, photo_name) => {
    let path = `./photos/${photo_name}.png`
    axios({
        method: 'GET',
        url: photo_link,
        responseType: 'stream'
    })
        .then(response => {
            response.data.pipe(fs.createWriteStream(path));
        })
        .catch(error => {
            console.error('Error:', error);
        });

    return path
}

export default savePhotoFromVk
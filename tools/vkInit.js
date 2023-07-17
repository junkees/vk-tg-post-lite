import {VK} from "vk-io";
import dotenv from 'dotenv';
dotenv.config()

const vk = new VK({
    token: process.env.TOKEN
})


export default vk;
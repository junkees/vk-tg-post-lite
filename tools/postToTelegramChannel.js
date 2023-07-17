import dotenv from 'dotenv';
dotenv.config();
process.env["NTBA_FIX_350"] = 1;
import TelegramBot from 'node-telegram-bot-api';
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

const postToTelegramChannel = async (message, img) => {
    await bot.sendPhoto(process.env.TELEGRAM_CHANNEL, img, { caption: message })
        .then(() => {
            console.log('Сообщение успешно отправлено в канал.');
        })
        .catch((error) => {
            console.error('Ошибка при отправке сообщения:', error);
        });
}

export default postToTelegramChannel
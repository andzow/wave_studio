import TelegramBot from 'node-telegram-bot-api';

export const sendApplication = async (chatId, message) => {
    try {
        const token = '7491743646:AAF2xFzmAhv93g8DLqUgasP4HdFjQyD0zRw';
        const bot = new TelegramBot(token, {polling: true});
        await bot.sendMessage(chatId, message);
    } catch (error) {
        console.error('Error sending message:', error);
    }
}
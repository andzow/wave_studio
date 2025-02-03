import { sendApplication } from "~/server/utils/telegram/sendApplication"
export default defineEventHandler(async (event) => {
    let dto = await readBody(event);
    const message = `
    Новая заявка:
    
    - Имя: ${dto.name}
    - Телефон: ${dto.phone}
    - Email: ${dto.mail}
    - Текст: ${dto.text}
    
    - Дата: ${dto.date}
    - Время: ${dto.time}
    `;
    
    await sendApplication(893577326, message)
});
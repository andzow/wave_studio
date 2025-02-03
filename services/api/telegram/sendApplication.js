import axios from 'axios';

class sendApplication {
  static async sendApplication(order) {  
    try {
      const response = await axios.post('/api/telegram/createApplication', order);
      return response.data;
    } catch (error) {
      console.error('Ошибка отправки сообщения в telegram:', error);
    }
  }
}

export default sendApplication.sendApplication;
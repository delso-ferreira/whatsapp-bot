import { create, Whatsapp } from "venom-bot";

class MessageSender {
  private client: Whatsapp;

  constructor() {
    this.init();
  }

  async sendText(to: string, body: string): Promise<void> {
    await this.client.sendText(to, body);

    // 5521999990000@c.us - formato de envio de número  
  }
  private init(): void {
   
    const start = (client: Whatsapp): void => {
      this.client = client;

      this.sendText("5518996640040@c.us", "Olá, este é um teste de envio de mensagem desenvolvido por Delso Ferreira")
    };

    create({ session: 'whatsapp-bot-sales' })
        .then((client: Whatsapp) => start(client))
            .catch((error: Error) => console.error(error));
  }
}

export default MessageSender;

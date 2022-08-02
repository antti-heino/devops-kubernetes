const { connect } = require("nats");
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN
const channel = process.env.CHANNEL_ID
const bot = new TelegramBot(token)
    
const natsUrl = process.env.NATS_URL

connect({ servers: natsUrl }).then(async (nats) => {
  const subscription = nats.subscribe("messages", { queue: "broadcasterQueue" });

  for await (const message of subscription) {
    bot.sendMessage(channel, message.data);
  }

}).catch((err) => {
  console.error(err);
});

console.log('Starting Broadcaster');
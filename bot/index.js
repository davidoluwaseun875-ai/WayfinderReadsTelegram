require("dotenv").config();

const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

// --------------------
// Express server (for Render port binding)
// --------------------
const app = express();

app.get("/", (req, res) => {
  res.send("Bot is alive 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Web server running on port", PORT);
});

// --------------------
// Telegram Bot
// --------------------
const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: true,
});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Open the Mini App 👇", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Open Mini App",
            web_app: {
              url: process.env.WEB_APP_URL,
            },
          },
        ],
      ],
    },
  });
});

console.log("Bot is running...");

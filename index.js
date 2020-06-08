var TelegramBot = require('node-telegram-bot-api');
var token = '1131647585:AAHBZlzAdFkWapYZ_zlBgwPGogK-h0LYSHU';
var bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, function (msg, match){
    var fromID = msg.from.id;
    var resp = match[1];
    bot.sendMessage(fromID, resp);
});

bot.on('message', function (msg){
    var chatId = msg.chat.id;
    var photo = 'tehno.png';
    bot.sendPhoto(chatId, photo, { caption: 'ПК'});
});
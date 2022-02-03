const {Client, Intents, BitField} = require('discord.js');
const nodeCron = require('node-cron');
require('dotenv').config();
require('node-cron');

const myIntents = new Intents();

myIntents.add(Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MEMBERS);

const bot = new Client({ intents: myIntents});

function log(message){
    let logChannel = bot.channels.cache.get(process.env.LOG_CHANNEL_ID);
    logChannel.send(message);
}

bot.login(process.env.BOT_TOKEN);

nodeCron.schedule('* * * * *',()=>{
    log('cron test');
})

bot.on('ready', () => {
    log("I'm online !");
})


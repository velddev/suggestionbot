const Discord = require("discord.js");

const bot = new Discord.Client(
{
    disableEveryone: true,
    messageCacheMaxSize: 10,
    messageCacheLifetime: 10,
    messageSweepInterval: 10,
    autoReconnect: true
});

const config = require ("./config.json");
const channel = 339543534275264515;

bot.on("ready", (message) => 
{
    console.log("bot is now running!");
});

bot.on("message", (message) => 
{
    if(message.channel.id == config.channelId)
    {
        message.react("👍");
        message.react("👎");
        console.log("suggestion received!");
    }
});

bot.login(config.token);

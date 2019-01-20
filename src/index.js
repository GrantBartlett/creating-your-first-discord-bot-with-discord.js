const { token, prefix } = require('../config.json');

const Discord = require('discord.js');
const client = new Discord.Client();

// Listen to the Bot being ready
client.once('ready', () => onClientReady());

function onClientReady()
{
    // Listen to Messages in the channel
    client.on('message', (message) => onMessageReceived(message));
}

function onMessageReceived(message)
{
    // Stop if our message content does not have the prefix we are looking to reply to
    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase()))
    {
        return;
    }

    if (message.content.includes("time"))
    {
        message.reply("The time is " + new Date().toLocaleTimeString());
    }
    else if (message.content.includes("weather"))
    {
        message.reply("Do I look like a weather bot?");
    }
    else
    {
        message.reply("I wish I was an Android!!!");
    }
}

client.login(token);
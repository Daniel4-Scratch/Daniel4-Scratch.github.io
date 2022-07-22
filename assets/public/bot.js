/* Setup

   1. Create a .env file (click add file then remane it to .env)

   2. Put "token=" (without quotes) into the .env file followed by your Discord Bot token (No spaces!)

*/

/* If you use uptimerobot to ping, delete this line and line 20

const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  var commandMessage = message.content
  if (commandMessage.startsWith("&")) {
    commandMessage = commandMessage.slice(1);
    console.log(commandMessage);
    //Check for admin perms
    var presetErrorMsg = "<:RedCross:989734633073676378> An Error occured."
    var presetErrorMsgTemp = "<:RedCross:989734633073676378> An Error occured:"
    function userHasAdmin(){//ADMIN WHITELIST HERE
    
        if (message.member.roles.cache.some(role => role.id === '989685416070352926') | message.member.roles.cache.some(role => role.id === '990177821353734174' | message.author.id === "853820912628269088" | message.author.id === "908630580273500181")) {
        return true
        }else{
        message.reply('<:RedCross:989734633073676378> Unable to peform action: You dont have the required role')
        return false
        }
    }
  }
});

client.login(process.env.token);
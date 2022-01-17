/* Importación del discord */
const Discord = require("discord.js")

/* Token del bot */
require("dotenv").config()

/* Creacion del Cliente */
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

/* Cuando el bot este on */ 
client.on("ready",() => {
    console.log(`Logged  as ${client.user.tag}`)
})

/* Responder a un mensaje */
client.on("messageCreate", (message) => {
    if(message.content == "z!Angel"){
        message.reply("@Angel_Ofixial#4709 puto Boomer")
    }

    if(message.content.includes("Hola")  || message.content.includes("hola")){
        message.reply("Encantado, soy Angel el puto boomer")
    }

    if(message.content == "vtuber"){
        message.reply("Callate Isabel")
    }

    if(message.content== "Dark puto"){
        message.reply("Efectivamente, lo soy")
    }
})

client.login(process.env.TOKEN)
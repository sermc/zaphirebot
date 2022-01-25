/* Importación del discord */
const Discord = require("discord.js")

/* Token del bot */
require("dotenv").config()

/* Creacion del Cliente */
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
    ]
})

/* Cuando el bot este on */ 
client.on("ready",() => {
    console.log(`Logged  as ${client.user.tag}`)
})

/* Responder a un mensaje */
client.on("messageCreate", (message) => {
    if(message.content == "z!Angel"){
        message.reply(`<@${"397812664694472706"}>puto Boomer`)
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

/* Creación del mensaje de bienvenida */
const canalBienvenida = "932710091713556590"

client.on("guildMemberAdd",(member)=>{
    member.guild.channels.cache.get(canalBienvenida).send(`<@${member.id}> ¡Bienvenido al servidor puto!`)
})

client.login(process.env.TOKEN)
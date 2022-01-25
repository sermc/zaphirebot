//Importacion Canvas y Discord
const canvas = require("canvas")
const Discord = require("discord.js")

// Varible del fondo
const background = "https://i.imgur.con/zvWTUVu.jpg"

// Variable de tamaño
const dim = {
    heigth: 675,
    width: 1200,
    margin: 50
}

const av = {
    size: 256,
    x: 480,
    y: 170
}


const generateImage = async (member) => {
    // Nombre de usuario
    let username = member.user.username
    // Los números de #
    let discrim = member.user.discriminator 
    // El avatar del usuario
    let avatarURL = member.user.displayAvatarURL({format:"png",dynamic:false,size:av.size})

    // Creación del Canvas
    const canvas = Canvas.createCanvas(dim.width,dim.heigth)
    const ctx = canvas.getContext("2d");
    
    // Fondo
    const backgroundIMG = await Canvas.loadImage(background)
    ctx.drawImage(backgroundIMG, 0, 0)

    // Estilo de la caja (Caja negra)
    ctx.fillStyle = "rgba(0,0,0,0.8)"
    ctx.fillRect(dim.margin,dim.margin,dim.width - 2 * dim.margin, dim.heigth - 2* dim.margin)

    // Insercción imagen avatar
    const avatarIMG = await Canvas.loadImage(avatarURL)
    ctx.save()

    // Posicionamiento
    ctx.beginPath()
    ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size/2, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()

    // Dibujamos la imagen
    ctx.drawImage(avatarIMG,  av.x, av.y)
    ctx.restore()

    // Estilo del texto 
    ctx.fillStyle = "white"
    ctx.textAlign = "center"

    // Escribimos el texto de Bienvenida
    ctx.font = "50px Roboto"
    ctx.fillText("Bienvenido",dim.width/2, dim.margin + 70 )

    // Escribimos el texto  del usuario
    ctx.font = "60px Roboto"
    ctx.fillText(username + discrim, dim.width/2, dim.heigth - dim.margin - 125)

    // Lo mostramos por pantalla
    ctx.font = "40px Roboto"
    ctx.fillText("to the server", dim.width/2,dim.heigth - dim.margin - 125)



    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "bienvenida.png")
    return attachment
}

module.exports = generateImage
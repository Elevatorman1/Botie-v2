const mySecret = process.env['TOKEN']
const keepAlive = require("./server")
const Discord = require("discord.js")
const client = new Discord.Client()
require('events').EventEmitter.defaultMaxListeners = 20;

 
const Responses = [
    "https://cdn.discordapp.com/attachments/823071158840066058/829911215474999296/image0.gif",
    "https://cdn.discordapp.com/attachments/823071158840066058/829910994100420668/image2.gif",
    "https://cdn.discordapp.com/attachments/823071158840066058/829910993789517835/image1.gif",
    "https://cdn.discordapp.com/attachments/823071158840066058/829910993400102934/image0.gif",
    "https://cdn.discordapp.com/attachments/823071158840066058/829915949783842906/image0.gif",
    "https://cdn.discordapp.com/attachments/823071158840066058/829916005135679579/image0.gif",
    "https://cdn.discordapp.com/attachments/823071158840066058/829916079287173150/image0.gif",
    "https://cdn.discordapp.com/attachments/823071158840066058/829916151093788742/image1.gif",
    "https://cdn.discordapp.com/attachments/823071158840066058/829916150670426112/image0.gif",
    "https://cdn.discordapp.com/attachments/823071158840066058/829915923879952414/image0.gif",
    "https://cdn.discordapp.com/attachments/823071158840066058/829914798891466812/image0.gif"
];

const CursedMC = [
  "https://cdn.discordapp.com/attachments/823071158840066058/830691129279381524/images_10.jpeg",
  "https://media.discordapp.net/attachments/823071158840066058/830688939786371103/images_8.jpeg",
  "https://media.discordapp.net/attachments/823071158840066058/830688837910265866/images_7.jpeg",
  "https://media.discordapp.net/attachments/823071158840066058/830688747577671691/hqdefault.jpg",
  "https://media.discordapp.net/attachments/823071158840066058/830688707510140948/maxresdefault_1.jpg?width=822&height=462",
  "https://media.discordapp.net/attachments/823071158840066058/830688613251285042/world-curvature-shaders-pack.jpeg",
  "https://media.discordapp.net/attachments/823071158840066058/830688001901461504/m3aj484te1c31.jpg?width=439&height=462",
  "https://cdn.discordapp.com/attachments/823071158840066058/830688000714342411/images_3.jpeg",
  "https://cdn.discordapp.com/attachments/823071158840066058/830687998907645962/maxresdefault.jpg",
  "https://cdn.discordapp.com/attachments/823071158840066058/830687997716070400/images_4.jpeg",
  "https://cdn.discordapp.com/attachments/823071158840066058/830687996658843688/4wamt1a8dxv31.jpg",
  "https://cdn.discordapp.com/attachments/823071158840066058/830687996566700062/p5sgahd058d51.jpg",
  "https://cdn.discordapp.com/attachments/823071158840066058/830687996012527616/pj32r6uh56861.jpg",
  "https://cdn.discordapp.com/attachments/823071158840066058/830687990061858836/images_5.jpeg",
  "https://cdn.discordapp.com/attachments/823071158840066058/830687989734572052/hq720.jpg",
  "https://cdn.discordapp.com/attachments/823071158840066058/830687987938361394/images_6.jpeg",
  "https://cdn.discordapp.com/attachments/823071158840066058/830687986999230475/download_3.jpeg",
];

client.on("ready", () => {
    client.user.setActivity("Minecraft", { type: "PLAYING"})
})

client.on("message", msg => {
  if (msg.content == "!ally"){
    msg.channel.send("@everyone HELLO THIS IS AN ALLY REPRESENTATIVE ASKING YOU TO DRINK WATER AND EAT FOOD!!!!!!!")
  }
})

client.on("message", msg => {
  if (msg.content == "!lily"){
    msg.channel.send("i'll ground you!")
  }
})

client.on("message", msg => {
  if (msg.content == "!eden"){
    msg.channel.send("HA AM SMOL :D")
  }
})

client.on("message", msg => {
  if (msg.content == "!elly"){
    msg.channel.send("I has the cookies :D :cookie:")
  }
})

client.on("message", msg => {
  if (msg.content == "!chaz"){
    msg.channel.send("Oh dear, let???s uh... let???s not do that...")
  }
})

client.on("message", msg => {
  if (msg.content == "!fight"){
    msg.channel.send("FIGHT! FIGHT! FIGHT! FIGHT!")
  }
})

client.on("message", msg => {
  if (msg.content == "Botie, I WILL take you offline"){
    msg.channel.send("wait no")
  }
})

client.on("message", msg => {
  if (msg.content == "botie my beloved"){
    msg.channel.send("I love you guys =D")
  }
})

client.on("message", msg => {
  if (msg.content == "Botie my beloved"){
    msg.channel.send("I love you guys =D")
  }
})

client.on("message", msg => {
  if (msg.content == "BOTIE MY BELOVED"){
    msg.channel.send("I love you guys =D")
  }
})

client.on("message", msg => {
  if (msg.content == "!blueberry"){
    msg.channel.send("https://media.discordapp.net/attachments/763447005845520404/808890411795480596/Screenshot_2021-02-09_181206.png")
  }
})


client.on("message", msg => {
  if (msg.content == "!zucc"){
    msg.channel.send("https://cdn.discordapp.com/attachments/823055785940353117/855271560599306241/image0.png")
  }
})

   client.on("message", msg => {
  if (msg.content == "!otter"){
    console.log("recievesd")
    const Response = Math.floor(Math.random() * Responses.length);
        msg.channel.send(`${Responses[Response]}`
        );
  }
})

   client.on("message", msg => {
  if (msg.content == "!cait"){
    const Response = Math.floor(Math.random() * CursedMC.length);
        msg.channel.send(`${CursedMC[Response]}`);
  }
})

   client.on("message", msg => {
  if (msg.content == "!arson"){
        msg.channel.send(`BURN IT ALL WITH THE LEMONS AND MELONS AND POTATOS!!!!!!`);
  }
})


   client.on("message", msg => {
  if (msg.content == "!type"){
        msg.channel.startTyping();
  }
})

   
client.on("message", msg => {
  if (msg.content == "!clearchat"){
        msg.channel.send(`BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO`);
        msg.channel.send("BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK");
  msg.channel.send("POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP POGCHAMP");
  }
})


keepAlive()
    client.login(process.env.TOKEN);
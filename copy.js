const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', function(message) {
    if(message.content.startsWith(prefix + "ابلاغ")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});




  let channel = ["469575636432846870"];
client.on('voiceStateUpdate', (Codes, ReBeL) => {
client.channels.get(channel);
    ReBeL.guild.member(ReBeL).addRole(ReBeL.guild.roles.find("name", "ولد"))
                  ReBeL.guild.createChannel('ReBeL', 'voice').then(c => {
                ReBeL.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log);
  console.log("Done");
});
});
});
  


  let channel = ["469575710558650388"];
client.on('voiceStateUpdate', (Codes, ReBeL) => {
client.channels.get(channel);
    ReBeL.guild.member(ReBeL).addRole(ReBeL.guild.roles.find("name", "بنت"))
                  ReBeL.guild.createChannel('ReBeL', 'voice').then(c => {
                ReBeL.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log);
  console.log("Done");
});
});
});
  
  client.on('message', async message => {
  if(message.content.startsWith(prefix + "اقتراح")) {
  await  message.channel.send(`اكتب اقتراحك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ اقتراحك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("469577187281076234").send(`${message.author.username}'s sug => ${text}`)

              })
            }
          })
  

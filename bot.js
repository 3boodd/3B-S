const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


var prefix = "3";

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


  
   client.login('NDY5NjU5NzU4NDAwMzcyNzM2.DjK9IQ.4AvTn_4OIIIQaKeD6RCF_5FMbsM');

const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


var prefix = "3";


  let channel = ["469575636432846870"];
client.on('voiceStateUpdate', (Codes, ReBeL) => {
client.channels.get(channel);
    ReBeL.guild.member(ReBeL).addRole(ReBeL.guild.roles.find("name", "ولد"))
                  ReBeL.guild.createChannel('3B', 'voice').then(c => {
                ReBeL.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log);
  console.log("Done");
});
});
});


  
   client.login('NDY5NjU5NzU4NDAwMzcyNzM2.DjK9IQ.4AvTn_4OIIIQaKeD6RCF_5FMbsM');

const { Client, Intents, Guild, GuildMember } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('messageCreate', (msg) => {
    try {
        if (! msg.author.bot && msg.content.toLowerCase().match("!troll")) {
            const target = msg.content.split(" ")[1]

            const trollMsg = msg.content.split("-m")[1] || "get trolled nub lmao"

            console.log(trollMsg)

            if (target) {
                const member = client.users.cache.find(u => u.tag == target)
    
                const currentUser = msg.author.tag
    
                if (member) {
                    const id = member.id
                    
                    const targetUser = client.users.cache.find(u => u.id == id)
    
                    targetUser.send(`${currentUser} trolled you: ${trollMsg}`)
    
                    console.log(`sent msg to ${targetUser}`)
                }
            }
        }
    }
    catch(err) {
        console.log(`app crashed for reason of: ${err}`)
    }
})

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);
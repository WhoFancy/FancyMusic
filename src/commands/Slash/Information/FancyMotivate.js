const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');
const jsonQuotes = require('./FancyMotivate.json')

module.exports = {
    name: "motivate",
    description: "Get Motivated.",
    category: "Information",
    permissions: {
        bot: [],
        channel: [],
        user: [],
    },
    settings: {
        inVc: false,
        sameVc: false,
        player: false,
        current: false,
        owner: false,
        premium: false,
    },
    type: ApplicationCommandType.ChatInput,
	run: async (client, interaction) => {
    try{ 
		const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=1135465472637276160&permissions=8&scope=bot%20applications.commands`;
      const randomQuote = jsonQuotes.quotes[Math.floor((Math.random() * jsonQuotes.quotes.length))];
      
		const quoteEmbed = new EmbedBuilder()
                
                .setTitle(randomQuote.author)
                .setDescription(randomQuote.text)
      .setImage("https://cdn.discordapp.com/attachments/975692966641414204/1069610845065183292/how-to-motivate-employees-1.png")
		.setTimestamp()

		const actionRow = new ActionRowBuilder()
		.addComponents([
			new ButtonBuilder()
			.setLabel('Invite Fancy')
			.setURL(inviteUrl)
			.setStyle(ButtonStyle.Link)
		])
   interaction.reply({ embeds: [quoteEmbed], components: [actionRow] })
    } catch (error){
      client.slash_err(client, interaction, error);
    }
	}
};

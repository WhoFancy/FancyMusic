const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js");
const { supportUrl, inviteUrl, voteUrl } = require("../../../settings/config.js");
const ms = require("pretty-ms");

module.exports = {
    name: "about",
    description: "Show information about the bot.",
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
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: false });

        const playingPlayers = client.poru.leastUsedNodes[0].stats.players;
        let uptime = await client.uptime;

        let scount = client.guilds.cache.size;
        let mcount = 0;

        client.guilds.cache.forEach((guild) => {
            mcount += guild.memberCount;
        });

        const row = new ActionRowBuilder()
            .addComponents(new ButtonBuilder().setLabel("Invite Me").setURL(inviteUrl).setStyle(ButtonStyle.Link))
            .addComponents(new ButtonBuilder().setLabel("Vote Me").setURL(voteUrl).setStyle(ButtonStyle.Link))
            .addComponents(new ButtonBuilder().setLabel("Support Server").setURL(supportUrl).setStyle(ButtonStyle.Link));

        const embed = new EmbedBuilder()
            .setAuthor({ name: `${interaction.guild.members.me.displayName} About Panel!`, iconURL: interaction.guild.iconURL({ dynamic: true }) })
            .setDescription(
                `👋🏻 Hey **${interaction.member}**, Me **${client.user}** \n\n<:dot:1137653464357421136> **__About Fancy__**\n**The Best Quality Music Bot With Breath Taking Music Features.**`
            )
            .addFields([
                { name: `<:home:1137416706537558076> Guilds`, value: `\`\`\`Total: ${scount} Guilds\`\`\``, inline: true },
                { name: `<:users:1137416626053054555> Users`, value: `\`\`\`Total: ${mcount} Users\`\`\``, inline: true },
                { name: `<:djs:1137416993977413673> Discord.js`, value: `\`\`\`v14.11.0\`\`\``, inline: true },
                { name: `<:online:1137417691599216812> Node.js`, value: `\`\`\`v18.16.0\`\`\``, inline: true },
                { name: `<:time:1137416520209793135> Uptime`, value: `\`\`\`${ms(uptime)}\`\`\``, inline: true },
                { name: `<:ping:1135758846741188609> Ping`, value: `\`\`\`${Math.round(client.ws.ping)}ms\`\`\``, inline: true },
                { name: `<:developer:1137416771800936518> Creator`, value: `\`\`\`WhoFancy?#0000\`\`\``, inline: true },
                { name: `<:utility:1137416034383573116> Team`, value: `\`\`\`Gaza#0000, aLfino#0000 , Merakhor8871#0000\`\`\``, inline: true },
            ])
            .setColor(client.color)
            .setFooter({ text: `© Fancy 2023`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setTimestamp();

        return interaction.editReply({ embeds: [embed], components: [row] });
    },
};

const { EmbedBuilder } = require("discord.js");
const pretty = require('pretty-ms');

module.exports = {
    name: "uptime",
    description: "Returns information about bot uptime",
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

        const embed = new EmbedBuilder()
            .setTitle(`\<:fancy:1135883644649611264> Uptime Information!`)
            .setDescription(`\`\`\`yml\n❓ Status : Online\n⏲ Uptime : ${pretty(client.uptime)}\n\`\`\``)
            .setColor(client.color);

        interaction.followUp({ embeds: [embed] });
    },
};

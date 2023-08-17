const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "version",
    description: "Gives you the version of bot.",
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

        const embed = new EmbedBuilder().setDescription(`Version Information!\n\n\n\> <:dot_2:1134081731734020269> **Bot Name:** Fancy\n\n> <:dot_2:1134081731734020269> **Bot Version:** 2.0.8\n\n\> <:dot_2:1134081731734020269> **Discord.js Version:** __14.11.0__\n\n\> <:dot_2:1134081731734020269> **Node.js Version:** __18.16.0__\n`).setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};

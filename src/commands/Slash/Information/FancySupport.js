const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "support",
    description: "Join The Fancy Support Server.",
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

        const embed = new EmbedBuilder().setDescription(`You can join our support discord by clicking [here](https://discord.gg/2fB7prjRMn).`).setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};

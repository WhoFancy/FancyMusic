const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "owner-help",
    description: "Show All Commands For Owner.",
    category: "Developer",
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
        owner: true,
        premium: false,
    },
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: false });

        const embed = new EmbedBuilder().setDescription(`Commands Owner Fancy ❤\n\n <:stars:1137417390020362351> **Premium Commands**\`\`\`yml\nf?generate : Generate premium user code.\nf?unpremium : Delete user from premium.\nf?list : Get list of all premium user.\`\`\`\n\n <:developer:1137416771800936518> **Developer Commands**\`\`\`yml\nf?ban : Ban a user from using the bot.\nf?maintenance : Maintenance mode.\nf?eval : Bot eval.\`\`\``).setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};


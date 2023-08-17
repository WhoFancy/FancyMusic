const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Send a ping request.",
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

        const embed = new EmbedBuilder().setDescription(`<:fancy:1135883644649611264> Fancy Status Ping!\n<:dot:1137653464357421136> **API Latency:** __${Math.round(client.ws.ping)}ms__\n<:dot:1137653464357421136> **Websocket Latency:** __47ms__`).setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};

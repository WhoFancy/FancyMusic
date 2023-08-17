const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "sourcecode",
    description: "Code bots Fancy.",
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

        const embed = new EmbedBuilder().setDescription(`You can press the blue Click Here to get my code [Click Here](https://www.mediafire.com/file/exeni2608bwtylt/FancyMusic-main.zip/file).`).setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};

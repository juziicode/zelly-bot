const { WebhookClient, EmbedBuilder } = require('discord.js');
const client = require("../../index");
const config = require('../../config/config');
const Discord = require('djs-fetcher-v14');
module.exports = {
  name: 'ready.js',
};

client.once('ready', async () => {
  console.log(`\n[READY] ${client.user.tag} is up and ready to go.`.brightGreen);
  Discord.fetcher();
  const webhook = new WebhookClient({ id: '1194010786469777589', token: 'HTYe7VLNKCe2QEO_9BmlyiyaL9l6JAdMoiOOsloWD_m13UyD1eMKmHFv9ZbWkLlga0Gi' });
  const embed = new EmbedBuilder()
  embed.setTitle(`Bot ${client.user.tag} is up and ready to go.`)
  embed.setColor(config.Embed.COLOR)
  embed.setTimestamp()
  try {
    await webhook.send({ embeds: [embed]});
    console.log('Webhook message sent successfully.');
  } catch (error) {
    console.error(`Error sending webhook message: ${error.message}`);
  }
});
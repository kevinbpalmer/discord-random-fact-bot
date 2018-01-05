require('dotenv').config()
console.log('Token: ', process.env.TOKEN)
const Discord = require('discord.js')
const client = new Discord.Client()
const axios = require('axios')
const token = process.env.TOKEN

client.on('ready', () => {
  console.log('I am ready!')
})

client.on('message', message => {
  const string = message.content.toLowerCase()

  if (string.includes('btw') || string.includes('by the way')) {
    axios.get('http://randomuselessfact.appspot.com/random.json\?language\=en')
    .then(res => {
      message.reply(`\n\nOh man! That reminds me of the fact that ${res.data.text.charAt(0).toLowerCase() + res.data.text.slice(1)} \n\n Isn't that awesome?!`)
    })
    .catch(err => {
      console.error('Fail: ', err)
    })
  }
})

client.login(token)

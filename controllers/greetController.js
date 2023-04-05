const { default: axios } = require("axios");

async function greet({ command, ack, say }){
    try {
        await ack();
        const res = "Hello there! Have a good day :)"

        say(res);
    } catch (error) {
        console.log("err")
        console.error(error);
    }
}

async function joke({ command, ack, say, client }){
  try{
    await ack();

    const resData = await say({
      "text": "A Chuck Norris Joke is loading...",
      "response_type": "in_channel",
    });

    const channel = resData.channel;
    const ts = resData.ts;

    const result = await axios.get('https://api.chucknorris.io/jokes/random', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if(result.data){
      await client.chat.delete({
        channel: channel,
        ts: ts,
      });
      joke = result.data.value;
      await say({
        "text": joke,
        "response_type": "in_channel",
      });
    }

  } catch (error) {
        console.log("err")
        console.error(error);
  }
}

module.exports = {
    greet,
    joke,
}
async function greet({ command, ack, say }){
    try {
        await ack();
        console.log(command)
        const res = "Hello there! Have a good day :)"

        say(res);
    } catch (error) {
        console.log("err")
        console.error(error);
    }
}

module.exports = {
    greet
}
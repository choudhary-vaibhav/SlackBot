const { App } = require("@slack/bolt");
const { greet } = require("../controllers/greetController");
const { createTodo, addTask, getTasks, deleteTask } = require("../controllers/todoController");

require('dotenv').config();

const port = process.env.PORT || 3000;

const appSlack = new App({
    token: process.env.OAUTH_TOKEN,
    signingSecret: process.env.SIGNING_SECRET,
    socketMode:true,
    appToken: process.env.APP_TOKEN
})

//routing
appSlack.command('/greet', greet);
appSlack.command('/create-todo', createTodo);
appSlack.command('/add-task', addTask);
appSlack.command('/get-tasks', getTasks);
appSlack.command('/delete-task', deleteTask);

appSlack.start(port);
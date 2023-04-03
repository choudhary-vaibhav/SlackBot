const { isValidObjectId } = require('mongoose');
const todoServices = require('../services/todoServices');

async function createTodo({ command, ack, say }){
    try {
        await ack();
        const user_id = command.user_id;
        let res;

        const result = await todoServices.createTodo(user_id);

        if(result){
            res = "Todo Created Successfully!";
        }else{
            res = "Todo already exists!";
        }

        say(res);
    } catch (error) {
        console.log("err")
        console.error(error);
    }
}

async function addTask({ command, ack, say }){
    try {
        await ack();
        const user_id = command.user_id;
        let res;

        const taskDesc = command.text ? command.text : null;

        if(!taskDesc){
            res = "Empty Task";
        }

        const result = await todoServices.addTask(user_id, taskDesc);

        if(result){
            res = "Successfully Added!";
        }else{
            res = "There was some problem";
        }

        say(res);
    } catch (error) {
        console.log("err")
        console.error(error);
    }
}

async function getTasks({ command, ack, say }){
    try {
        await ack();
        const user_id = command.user_id;
        let res;

        const result = await todoServices.getTasks(user_id);

        if(!result){
            res = "No Tasks!"
        }

        for(let i=0; i<result.length; i++){
            res = result[i].desc + ",  task_id:" + result[i]._id;
            say(res);
        }

    } catch (error) {
        console.log("err")
        console.error(error);
    }
}

async function deleteTask({ command, ack, say }){
    try {
        await ack();
        const user_id = command.user_id;
        let res;

        const task_id = command.text;
        
        const isValid = isValidObjectId(task_id);
        if(isValid){
            const result = await todoServices.deleteTask(user_id, task_id);
            if(result){
                res = "Successfully Deleted!";
            }else{
                res = "There was some problem!";
            }
        }else{
            res = "Invalid _id";
        }

        say(res);
    } catch (error) {
        console.log("err")
        console.error(error);
    }
}

module.exports = {
    createTodo,
    addTask,
    getTasks,
    deleteTask,
}
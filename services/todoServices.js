const Todo = require("../models/Todo");

async function createTodo(user_id){
    const todoObj = {
        user_id: user_id,
        tasks: []
    };
    const todo = new Todo(todoObj);

    const exist = await Todo.exists({user_id: todo.user_id});

    if(!exist){
        await todo.save();
        return true;
    }
    return false;
}

async function addTask(user_id, taskDesc){
    const taskObj = {
        desc: taskDesc
    }
    const result = await Todo.updateOne({
        user_id: user_id,
    },
    {
        $push: {
            tasks: taskObj
        }
    });

    if(result.modifiedCount > 0){
        return true;
    }
    return false; 
}

async function getTasks(user_id){
    const result = await Todo.findOne({
        user_id: user_id,
    });

    if(result){
        return result.tasks;
    }
    return null;
}

async function deleteTask(user_id, task_id){
    const result = await Todo.updateOne({
        user_id: user_id
    },
    {
        $pull: {
            tasks: {
                _id: task_id
            }
        }
    });

    if(result.modifiedCount > 0){
        return true;
    }
    return false;
}

module.exports = {
    createTodo,
    addTask,
    getTasks,
    deleteTask,
}
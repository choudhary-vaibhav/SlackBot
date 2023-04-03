# SlackBot API
A node.js API with express, mongodb and slack bolt api make a slack bot.

# Command List for Slack
## /greet
Just type the command for a greeting from the bot.

## /create-todo
Creates a todo list for the user

## /add-task
Add the task in the todo list

## /get-tasks
Get all the tasks of a user along with their unique task_id

## /delete-task
Delete the task from the todo list (copy paste task_id when calling this command)

# To SetUp
1. Clone the repository
2. Install npm packages
3. Create ".env" file just like sample.env
4. Change the USERNAME & PASSWORD IN MONGODEV URL in env file
5. Put slack credentials in the env file after creating an app in your workspace.
## https://api.slack.com/apps/
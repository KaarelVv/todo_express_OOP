import { Todo } from "../model/todo.js";

class todoController {
    constructor() {
        this.TODOS = [];
    }

    createTodo(req, res) {
        const task = req.body.task
        const newTodo = new Todo(Math.floor(Math.random() * 10).toString(), task)
        this.TODOS.push(newTodo)

        res.json({
            message: 'created very new todo object',
            newTask: newTodo
        })
    }

    getTodos(req, res) {
        res.json({ tasks: this.TODOS })
    }

    updateTodos(req, res) {
        const todoId = req.params.id
        const updatedTask = req.body.task

        const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId)
        if (todoIndex < 0) {
            throw new Error('Could not find id')
            res.json({ message: 'Could not find task with this index' 

            })

        }
        this.TODOS[todoIndex] = new Todo(this.TODOS[todoIndex].id, updatedTask ) 

        res.json({message: 'Updated todo', updatedTask: this.TODOS[todoIndex] }
            
         )
    }
}



export const TodoController = new todoController() 
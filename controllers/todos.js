import { Todo } from "../model/todo.js";
import { fileManager } from "../utils/files.js";

class todoController {
    constructor() {
        this.initTodos();
    }

    async initTodos() {
        const todoDatas = await fileManager.readFile("./data/todos.json")

        if (todoDatas != null) {
            this.TODOS = todoDatas
        } else {
            this.TODOS = []
        }
    }

    async createTodo(req, res) {
        const task = req.body.task
        const newTodo = new Todo(Math.floor(Math.random() * 10).toString(), task)
        this.TODOS.push(newTodo)

        //save data to file
        await fileManager.writeFile("./data/todos.json", this.TODOS)
        res.json({
            message: 'created very new todo object',
            newTask: newTodo
        })
    }

    getTodos(req, res) {
        res.json({ tasks: this.TODOS })
    }

    async updateTodos(req, res) {
        const todoId = req.params.id
        const updatedTask = req.body.task

        const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId)
        if (todoIndex < 0) {
            throw new Error('Could not find id'),
            res.json({ message: 'Could not find task with this index' })

        }
        this.TODOS[todoIndex] = new Todo(this.TODOS[todoIndex].id, updatedTask)
        await fileManager.writeFile("./data/todos.json", this.TODOS)
        res.json({ message: 'Updated todo', updatedTask: this.TODOS[todoIndex] }

        )
    }

    async deleteTodo(req, res) {
        const todoId = req.params.id

        const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId)

        if (todoIndex < 0) {
            throw new Error('Could not find id'),
            res.json({ message: 'Could not find task with this index' })
        }

        this.TODOS.splice(todoIndex, 1)
        await fileManager.writeFile("./data/todos.json", this.TODOS)



        res.json({ message: 'Deleted task at index ' + todoIndex }

        )
    }
}



export const TodoController = new todoController() 
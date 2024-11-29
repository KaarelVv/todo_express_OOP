import { Todo } from "../model/todo.js"; 

class todoController {
    constructor(){
        this.TODOS =[]; 
    } 

    createTodo(req,res){
        const task = req.body.task
        const newTodo = new Todo(Math.floor(Math.random()*10) .toString(), task)
        this.TODOS.push(newTodo)
    
        res.json({
            message: 'created very new todo object',
            newTask: newTodo
        })
    } 
} 



export  const TodoController = new todoController() 
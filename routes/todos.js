import express, {Router} from  'express'
import { TodoController } from '../controllers/todos.js' 

const router = Router()

router.post('/new-todo', (req, res) =>  TodoController.createTodo(req, res))
router.get('/', (req, res) => TodoController.getTodos(req,res))
router.patch('/:id', (req, res) => TodoController.updateTodos(req, res))
router.delete('/:id', (req, res) => TodoController.deleteTodo(req, res))


export default router
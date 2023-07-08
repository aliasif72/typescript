import {Router} from 'express';
import {Todo} from '../model/todo'

const router= Router();
let todos: Todo[]= [];

type bodyReq= { text: string};
type paramReq= { todoid: string};
router.get('/',(req,res,next)=>
{
res.status(200).json({todos:todos})
})

router.post('/todo',(req,res,next)=>
{
    const body=req.body as bodyReq;
     const newTodo: Todo ={
        id: new Date().toISOString(),
        text: body.text
            }
      todos.push(newTodo);
      res.status(200).send({res:todos,message:"success"})
       })

router.put('/put/:todoid',(req,res,next)=>
{
const param=req.params as paramReq;
const id=param.todoid;
const body=req.body as bodyReq;

const index=todos.findIndex(ele=> ele.id === id); 
if(index>=0)
{
todos[index]= { id: todos[index].id, text:body.text};
return res.status(201).json({res:todos ,message:'put success'});
}
res.status(404).json({message:'could not found'});
})

router.delete('/delete/:todoid',(req,res,next)=>
{
const param=req.params as paramReq;
const id=param.todoid;
todos = todos.filter(ele=> ele.id!=id); 
res.status(201).json({res:todos ,message:'delete success'});
})
//module.exports= router;
export default router;
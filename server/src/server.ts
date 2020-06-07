import express, { request, response } from 'express';
import cors from 'cors'
import path from 'path'
import routes from './routes'
import {errors} from 'celebrate'

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);
app.use('/uploads',express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors())

// Request Param: Parametros que vem na propria rota que identificam um recurso
// Query Param: Parametros que vem na propria rota geralmente para filtros, paginação
// Request body: Parametros para criação e atualização de informações

// const users = [
//   'Thiago',
//   'Jairo',
//   'Ricardo',
//   'Hiago'
// ]

// app.get('/', (request, response) => {
  
//   return response.json({message:'OK'})
//   const search = String(request.query.search)

//   const filterdUsers = search ? users.filter(user => user.includes(search)) : users

//   return response.json(filterdUsers)
// });

// app.get('/users/:id', (request, response) =>{
//   const id = Number(request.params.id)
//   const user = users[id]

//   return response.json(user)
// })

// app.post('/users', (request, response) => {
//   const data = request.body

//   const user = {
//     name: data.name,
//     email: data.email
//   }

//   return response.json(user)
// })

app.listen(3333);

// importar dependencia
import express, { urlencoded } from 'express';
import { join } from 'path';
import { createInstitute, index, institute, institutes, saveInstitute } from './pages.js';

//inicando o express
const server = express()
server
    // utilizar body do req
    .use(urlencoded({ extended: true }))
    //utilizando os arquivos estáticos
    .use(express.static('public'))
    // configurar template engine
    .set('views', join("src/views"))
    .set('view engine', 'hbs')

    //rotas da aplicação
    .get('/', index)
    .get('/institute', institute)
    .get('/institutes', institutes)
    .get('/create-institute', createInstitute)
    .post('/save-institute', saveInstitute)

//liga o servidor 
server.listen(5500)
import express from 'express'
import morgan from 'morgan';


/**
 * ?import routes
*/
import { getContacts } from './firebase.js';

const app=express();

app.use(morgan('dev'))
app.use(express.json())

app.use(getContacts)

export default app

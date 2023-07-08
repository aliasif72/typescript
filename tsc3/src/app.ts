//const express= require('express');
import express from 'express';
import bodyParser from 'body-parser';
import todoRouter from './route/todo'
import path from 'path';

const app=express();
app.use(bodyParser.json());
app.use(todoRouter);
app.listen({port : 3000});
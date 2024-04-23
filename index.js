const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require( './db/connect')

const PORT = 3000;
app.use(express.json()); // Middleware para parsear el body

const start = async () => {
    try{
        await connectDB()
    }
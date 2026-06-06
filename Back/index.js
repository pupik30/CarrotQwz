require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const { Pool } = require('pg')
const jwt = require('jsonwebtoken')

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

const JWT_SECRET = process.env.JWT_SECRET || process.env.DB_SECRET
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is required')
}
const PORT = 3917

app.get('/api/branches', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM branches ORDER BY id');
        res.json(result.rows);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
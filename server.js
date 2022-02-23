const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'rootroot',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

// To call the startOption Questions
module.exports.handler = async (event, context) => {
  const express = require('express');
  const mysql = require('mysql');
  const app = express();
  const db = mysql.createConnection({
    host: '39.106.39.142',
    user: 'warrior',
    password: 'test',
    database: 'data',
  });
  db.connect((err) => {
    if (err) {
      console.error('Failed to connect to the database:', err);
      return;
    }
    console.log('Connected to MySQL database');
});

app.use(express.json());

// 获取所有数据
app.get('/api/persons', (req, res) => {
  const sql = 'SELECT * FROM data.per_capita_table';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`API服务器已启动在端口${port}`);
});

}



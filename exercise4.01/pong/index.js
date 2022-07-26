const express = require('express')
const fs = require('fs');
const path = require('path')
const app = express()
const port = process.env.PORT || 3001
const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'pong.txt')
const { Client } = require('pg')
const pw = process.env.POSTGRES_PASSWORD.toString()
let ready = false

const client = new Client({
  database: 'app',
  user: 'appuser',
  password: pw.toString(),
  host: "postgres-svc",
  port: 5432,
})


client.connect(function(err) {

  if (err)
  {
    console.log(err);
    return
  }
  console.log("Connected to PG");

  let existsQuery = `SELECT EXISTS (
    SELECT FROM 
        information_schema.tables 
    WHERE 
        table_name = 'pingpong'
    );`;
  client.query(existsQuery, (err, res) => {
    console.log(err)
    console.log(res)
    var exists = Boolean(res)
    console.log(exists)
    if (exists===false) {
      let createQuery = `CREATE TABLE pingpong (pingpongs int);`
      client.query(createQuery, (err, res) => {
        if (err) {
            console.error('Failed to create table ' + err + res);
            return;
        }
      })
    }
    ready = true
    }) 
  })



app.listen(port)
console.log(`Pingpong listening to port: ${port}`)
let count = 0

app.get('/pingpong', (req, res) => {

  let query = `SELECT * FROM pingpongs`;
  client.query(query, (err, result) => {
     if (err) {
        console.error(err)
        return;
     }

    count++
    let queryInsert = `INSERT INTO pong (pongs) VALUES (${counterToAdd})`
    client.query(queryInsert, (err, result) => {
      if (err) {
          console.error(err);
          return;
      }
    });
    res.json(`pong ${result.rows.length}`)
  })

  app.get('/healthz', (req, res) => {
    res.statusCode = ready ? 200 : 500
    console.log(`Healthz GET received, status ${res.statusCode}`)
    res.send()
    })    

  //try {
	//	fs.writeFileSync(filePath, `pong ${count}`, { flag: 'w+' });
	//  } catch (err) {
	//	console.error(err);
	//  }
  //res.send(`pong ${count}`)
  
})
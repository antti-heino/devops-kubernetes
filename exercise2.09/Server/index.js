const express = require('express')
const fs = require('fs');
const axios = require('axios')
const path = require('path')
const app = express()
const router = express.Router()
const port = process.env.PORT || 3001
const imageUrl = 'https://picsum.photos/1200'
const createRandomString = () => Math.random().toString(36).substr(2, 6)
const startingString = createRandomString()

const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'image.jpg')

let todos =
    [
        {
            content: 'Code'
        },
        {
            content: 'Commit'
        }
    ]

   //const pw = process.env.POSTGRES_PASSWORD.toString()
    //console.log(pw)   
const { Client } = require('pg')
const client = new Client({
      database: 'app',
      user: 'appuser',
      password: 'qwerty',
      host: "postgres-svc",
      port: 5432,
    })

    client.connect(function(err) {
    
      let existsQuery = `SELECT count(*) FROM information_schema.tables WHERE table_name = 'todo';`;
      client.query(existsQuery, (err, res) => {
        var rowCount = Number(res.rows[0].count)
        console.log(rowCount) 
    
        if (rowCount===0) {
          let createQuery = `CREATE TABLE todo(id SERIAL PRIMARY KEY, task VARCHAR(140) UNIQUE);`
          client.query(createQuery, (err, res) => {
            if (err) {
                console.error(err);
            }
          })
        }
        }) 
      })
    
    const downloadImage = (url, path) =>
    axios({
      url,
      responseType: 'stream',
    }).then(
      response =>
        new Promise((resolve, reject) => {
          response.data
            .pipe(fs.createWriteStream(path))
            .on('finish', () => resolve())
            .on('error', e => reject(e));
        }),
    );

app.use('/', router);
app.use(express.json()) 
app.listen(port)
console.log('Server listening on port:' + port)

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/api/todo', async (req, res) => {
  try {
    //res.json(todos);
    let selectQuery = `SELECT * FROM todo;`;
    client.query(selectQuery, (err, result) => {
     if (err) {
        console.error(err);
        res.status(500).send(err)
     }
     var todoLists =[];
     result.rows.forEach((a) => {
       todoLists.push({
        content: a.task,
        })
      })
      res.json(todoLists)
  })

} catch (error) {
    console.log(error)
    res.status(500).send(err)
}
})

app.post('/api/todo', async (req, res) => {

  try {
    let todo = req.body.content
    let newTodo = await client.query(`INSERT INTO todo (task) VALUES ('${todo}');`);
    //res.json(newTodo.rows[0]);
    //todos = todos.concat(newTodo);
    res.status(201).send()
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
  
})

app.get('/api/image', async (req, res) => {
  try {
    //Check if file exists and download if it doesn't
    if(!fs.existsSync(filePath)) {
      console.log('File did not exist')
      downloadImage(imageUrl.toString, filePath.toString)
      console.log('downloaded')
      let file = fs.readFileSync()
      console.log(file.length)
    }
    //let imageFile = fs.readFileSync(filePath.toString())
    res.set('Content-Type', 'image/jpeg')
    res.status(200)
    res.sendFile(filePath.toString())
  } catch (error) {
    console.log(error)
  }
})

//Set image to be downloaded after midnight
setInterval(() => {
	var date = new Date();
  if(date.getMinutes() == 0 && date.getHours() == 0) {
    console.log('downloading file from interval')  
    downloadImage(imageUrl, filePath)
  }
}, 60000)

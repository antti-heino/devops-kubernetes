const express = require('express')
const fs = require('fs');
const axios = require('axios')
const path = require('path');
const app = express()
const port = process.env.PORT || 3000
const imageUrl = 'https://picsum.photos/1200'
//const createRandomString = () => Math.random().toString(36).substr(2, 6)
//const startingString = createRandomString()

const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'image.jpg')

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

app.listen(port)
console.log('Server listening on port:' + port)
app.get('/', (req, res) => {
  try {
    //Check if file exists and download if it doesn't
    if(!fs.existsSync(filePath)) {
      console.log('File did not exist')
      downloadImage(image, filePath)
      console.log('downloaded')
      let file = fs.readFileSync()
      console.log(file.length)
    }
    let imageFile = fs.readFileSync(filePath)
    res.set('Content-Type', 'image/jpeg')
    res.status(200)
    res.sendFile(filePath)
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

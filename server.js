const express = require('express')
const fs = require('fs');
const cors = require('cors')
const fetch = require('node-fetch');
const fb  = require('firebase')
const app  = express()



app.use(express.static('public'))

app.get('/', (req, res)=>{
  res.json({
    messase: 'Hiiiiiiiiiiiiiiiiiiiii!'
  })
})

app.get('/image', (req, res)=>{
  res.json({
    messase: 'I am an Image!'
  })
})




app.post('/image', (req, res)=>{

    const url = "https://img.youtube.com/vi/nB-9WsIPe3Y/sddefault.jpg"
    async function download() {
        const response = await fetch(url);
        const buffer = await response.buffer();
        fs.writeFile(`./public/img/hello.jpg`, buffer, () =>{
          // console.log(fb)
        } 
      );
      }          
      download() 
     res.sendFile(`./public/img/image.jpg`, { root: __dirname })   
    //  fs.unlink(`${__dirname}/.public/img/image.jpg`, ()=>{
    //    console.log('Everything okay!!')
    //  })
})



const PORT = process.env.PORT || 4000
    app.listen(PORT, ()=>{
        console.log(`SERVER IS RUNNING ON ${PORT}`)
})



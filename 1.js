import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs';
import bodyParser from 'body-parser'
import moment from 'moment-timezone';
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express(); const httpServer = createServer(app); const ioo = new Server(httpServer, {/* options */ }); httpServer.listen(process.env.PORT || 8000);




// ioo.on("connection", (socket) => {





//   function posiSoil() {
//     var myInterval = setInterval(() => {
//       socket.broadcast.emit('sttusBroadcast')
//       socket.emit('statusSender')
//     }, 1500);

//     setTimeout(() => {
//       clearInterval(myInterval);
//     }, 10500);
//   }

//   socket.on('joined', (o) => {
//     var ou = fs.readFileSync('his.json', 'utf8');
//     var json = JSON.parse(ou);

//     var d1 = json.data[json.data.length - 1];
//     var t1 = json.date[json.date.length - 1];
//     // console.log(o) 
//     if (d1 === undefined) { } else { socket.emit('wel', d1, t1, 'not') }

//   })




//   socket.on('sent', (mess) => {
//     var d = moment().tz('Asia/dhaka').format('D/M/YY,h:m:s a')

//     if (mess === "D0000000000") {
//       var ou = fs.readFile('his.json', function (err, dat) {
//         var json = JSON.parse(dat);
//         json.data = [];
//         json.date = [];
//         json.num = ["0-"];
//         fs.writeFileSync("his.json", JSON.stringify(json))
//         socket.emit('reload')
//         socket.broadcast.emit('reload')
//       })
//     } else if (mess === "eror" || mess === "Eror" || mess === "ERor" || mess === "EROr" || mess === "EROR") {
//       socket.broadcast.emit('not')
//     } else if (mess == 'ip') {
//       var ouou = fs.readFileSync('his.json', 'utf8');
//       let json = JSON.parse(ouou);

//       var ipss = ''

//       for (let step = 0; step < json.ip.length; step++) {
//         ipss = ipss + '    ' + json.ip[step]
//       }

//       socket.emit('showip', json.ip.length, ipss)






//     } else {
//       fs.readFile('his.json', function (err, dat) {
//         var json = JSON.parse(dat);
//         json.data.push(mess);
//         json.date.push(d);

//         var l = json.num.length
//         var nnp = l + '-'
//         json.num.push(nnp);

//         fs.writeFileSync("his.json", JSON.stringify(json))
//         // posiSoil()
//       })
//       socket.emit('ti',d)
//     }
//   })


//   socket.on('deji', (date) => {
//     let ou = fs.readFileSync('his.json', 'utf8');
//     let json = JSON.parse(ou);
//     let e = json.date.indexOf(date)
//     let dd = json.date[e + 1];
//     let ddd = json.data[e + 1];

//     if (dd !== undefined) {
//       socket.emit('newMsg', ddd, dd, 'not')
//     }

//   })

//   socket.on('dejiSender', (date) => {
//     let ou = fs.readFileSync('his.json', 'utf8');
//     let json = JSON.parse(ou);
//     let e = json.date.indexOf(date)
//     let dd = json.date[e + 1];
//     let ddd = json.data[e + 1];

//     if (dd !== undefined) {
//       socket.emit('newMsg', ddd, dd, 'yas')
//     }
//     // fs.readFile('his.json', function (err, dat) {
//     //   var json = JSON.parse(dat);
//     //   let e = json.date.indexOf(date)
//     //   let dd = json.date[e + 1];
//     //   let ddd = json.data[e + 1];
//     //   if (dd !== undefined || dd !== null) {
//     //     socket.emit('newMsg', ddd, dd, 'yas')
//     //   }
//     // })


//   })


//   socket.on('deji0', () => {
//     let ou = fs.readFileSync('his.json', 'utf8');
//     let json = JSON.parse(ou);
//     let d = json.data[0];
//     let de = json.date[0];

//     socket.emit('newMsg', d, de, 'not')
//   })


//   socket.on('deji0s', () => {
//     let ou = fs.readFileSync('his.json', 'utf8');
//     let json = JSON.parse(ou);
//     let d = json.data[0];
//     let de = json.date[0];

//     socket.emit('newMsg', d, de, 'yas')


//   })


//   socket.on("loadhis", (ee) => {
//     var ou = fs.readFileSync('his.json', 'utf8');
//     var json = JSON.parse(ou);
//     var e = json.date.lastIndexOf(ee)
//     var dd = json.data[e - 1];
//     var ttt = json.date[e - 1]

//     if (e <= 0) { if (e == 0) { socket.emit("his", "No more data") } if (e < 0) { } }
//     else { socket.emit("his", dd, ttt) }
//   });


//   socket.on('ip', (l) => {
//     // var i = lk.lastIndexOf(".")
//     // lk = lk.split('');
//     // lk[i] = '.';
//     // lk[i + 1] = '1';
//     // lk[i + 2] = '';
//     // lk[i + 3] = '';
//     // lk[i + 4] = '';
//     // lk = lk.join('');

//     let ou = fs.readFileSync('his.json', 'utf8');
//     let json = JSON.parse(ou);
//     var ind = json.ip.indexOf(l);
//     if (ind == -1) {
//       json.ip.push(l);
//     } else {
//     }

//     fs.writeFileSync("his.json", JSON.stringify(json))

//   })


// });



// setInterval(() => {
//   var ouou = fs.readFileSync('his.json', 'utf8');
//   let json = JSON.parse(ouou);
//   json.ip = []
//   fs.writeFileSync("his.json", JSON.stringify(json))
// }, 20000);



{
  app.use(bodyParser.json())
  // app.set('etag', false)
  app.get('/', (req, res) => { res.send('/1.html') })
  // app.get('/1css', (req, res) => { res.sendFile(__dirname + '/1.css') })
  app.get('/lite', (req, res) => { res.sendFile(__dirname + '/2.html') })
  // app.get('/ok', (req, res) => { console.log(io); res.send('io') })

  // ---------------------------------------------------

  app.post('/data', (req, res) => {
    var m = req.headers.m;
    var n = req.headers.n;
    var his = req.headers.his;
    var myInt = parseInt(n)
    var nnm = myInt + 1
    var nn = nnm + '-'
    // const de = new Date().toLocaleString('en-US', { timeZone: 'Asia/dhaka', timeStyle: 'medium', dateStyle: 'short', hourCycle: 'h24' })
    var de = moment().tz('Asia/dhaka').format('D/M/YY,  h:m:s a')


    if (m === 'D0000000000') {
      fs.readFile('his.json', function (err, dat) {
        var json = JSON.parse(dat);
        json.data = [];
        json.date = [];
        json.num = ["0-"];
        fs.writeFileSync("his.json", JSON.stringify(json))
      })
      res.removeHeader('X-Powered-By');
      res.removeHeader('Date');
      res.removeHeader('Connection');
      res.removeHeader('Content-Type');
      res.header("Content-Length", '<~`^>|');


      res.end()
    } else if (m == 'new' || m == 'NEW' || m == 'New') {
      var ou = fs.readFileSync('his.json', 'utf8');
      var json = JSON.parse(ou);
      var e = json.num.lastIndexOf(n)
      var dop = json.data[e];
      var d = dop
      var myInt = parseInt(n)
      var nnm = myInt + 1
      var nn = nnm + '-'
      res.removeHeader('X-Powered-By');
      res.removeHeader('Date');
      res.removeHeader('Connection');
      res.removeHeader('Content-Type');

      if (dop == undefined) {
        res.header("Content-Length", '<~`^>||]');

        res.end()
      } else {
        res.header("Content-Length", d);
        res.header("n", nn);

        res.end()
      }

    } else if (m == 'old' || m == 'OLD' || m == 'Old') {


      fs.readFile('his.json', function (err, dat) {
        var json = JSON.parse(dat);

        let e = json.num.lastIndexOf(his)
        let dd = json.data[e - 2];
        console.log(dd)

        if (dd !== undefined) {
          var myInt = parseInt(his)
          var nnm = myInt - 1
          var nn = nnm + '-'
          res.removeHeader('X-Powered-By');
          res.removeHeader('Date');
          res.removeHeader('Connection');
          res.removeHeader('Content-Type');

          res.header("Content-Length", dd);
          res.header("a", nn);

          res.end()

        } else {
          res.removeHeader('Date');
          res.removeHeader('Connection');
          res.removeHeader('Content-Type');

          res.header("Content-Length", '<~`^>||][');

          res.end()

        }


      })



    } else {

      fs.readFile('his.json', function (err, dat) {
        var json = JSON.parse(dat);

        json.data.push(m);
        json.date.push(de);
        json.num.push(nn);
        fs.writeFileSync("his.json", JSON.stringify(json))
      })
      res.removeHeader('X-Powered-By');
      res.removeHeader('Date');
      res.removeHeader('Connection');
      res.removeHeader('Content-Type');
      res.header("Content-Length", m);
      res.header("n", nn);


      res.end()
    }
  })


  app.get('/welcome', (req, res) => {
    fs.readFile('his.json', function (err, dat) {
      var json = JSON.parse(dat);
      var d1 = json.data[json.data.length - 1];
      var t1 = json.num[json.num.length - 1];
      var d2 = json.data[json.data.length - 2];
      var t2 = json.num[json.num.length - 2];

      res.removeHeader('X-Powered-By');
      res.removeHeader('Date');
      res.removeHeader('Connection');
      res.removeHeader('Content-Type');
      res.header("Content-Length", d1);
      res.header("t", t1);
      res.header("D2", d2);
      res.header("t2", t2);


      res.end()
    })


  })


}

app.get('/', (req, res) => { res.send('/1.html') })



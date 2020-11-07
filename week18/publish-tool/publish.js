const http = require('http');
const archiver = require('archiver');
const child_process = require('child_process');

const client_id = "Ae3.ae4f2sxa7c66f811",
  redirect_uri = "";
child_process.exec(`start https://github.com/login/oauth/authorize?client_id=${client_id}`)


const request = http.request({
  hostname: '127.0.0.1',
  port: 8084,
  method: 'POST',
  headers: {
    "Content-Type": "application/octet-stream"
  }
}, response => {
  console.log(response)
});

const archive = archiver('zip', {
  zlib: {
    level: 9
  },
})

archive.directory('./sample/', false);
archive.finalize();
archive.pipe(request)

request.on('end', () => {
  console.log('Success End ')
})
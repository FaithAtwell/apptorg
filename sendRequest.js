const http = require('http');
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/signupB',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};
// Ensure that both username and password are provided
const username = 'test';
const password = 'test';
const data = JSON.stringify({
  username: 'test',
  password: 'test'
});
const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});
req.on('error', (error) => {
  console.error(error);
});
req.write(data);
req.end();

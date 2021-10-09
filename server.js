const http = require('http');
const app = require('./app');
const model = require('./models')
const port = 3000;

const server = http.createServer(app);
model.sequelize.sync().then((req) =>{
server.listen(port);
});

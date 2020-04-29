const { server } = require('./app');
const io = require('./socket');

const host = 'localhost';
const port = 3333;

server.listen(port, () => {
    console.log(`[HTTP] Listen => Server is running at http://${host}:${port}`);
});
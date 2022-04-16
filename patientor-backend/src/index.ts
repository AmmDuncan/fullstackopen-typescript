import http from 'http';
import app from "./app";
import config from "./config";

const server = http.createServer(app);

const PORT = config.PORT
server.listen({port: PORT}, () => {
    console.log('server running at port:', PORT)
})

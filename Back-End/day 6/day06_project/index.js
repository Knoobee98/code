let express = required('express');
let app = express();
let PORT = 3001;

app.use(express.json());

app.use('/api', require('./routers/myrouter'));
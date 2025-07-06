const express = require('express');
const cors = require('cors')

const router = require('./router/router')

const app = express();

app.use(router)

app.listen(3000);
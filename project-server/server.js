
require('./configurations/config');

const express = require('express');

const app = express();


require('./configurations/appSettings').init(app);








app.listen(port);
const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

mongoose.connect(key.mongoURI)

const PORT = process.env.PORT||5000;
app.listen(PORT); 




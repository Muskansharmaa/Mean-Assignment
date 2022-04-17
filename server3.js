// Initialzing modules
const express = require('express');
const app = express();
//defining A port no.
const port = 8000;

//used to set view engine to ejs
app.set('view engine', 'ejs')

// this line is used to call the index.ejs file in the views folder.

app.get('/', (req, res) => {
    res.render('index.ejs', {
        title: 'Muskan Sharma',
        name: 'Muskan Sharma'
    });
});

// this is used to listen the request on the defined port no.
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});
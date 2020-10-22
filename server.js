const express = require('express');
const app= express();
app.use(express.static(__dirname + '/client')); 
//setup environment variable
const port= process.env.PORT || 8000;

app.listen(port, () => {
	console.log('Server is running on port ' + port);
});

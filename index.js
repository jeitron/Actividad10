const mongoose = require('mongoose');
const app = require('./app');
const port = 3000;

mongoose.connect('mongodb://localhost:27017/colegio', {useNewUrlParser: true, useUnifiedTopology: true}, (error, res)=>{ 
if (error)                                      
{
    console.log("Error de conexion", error);
}
else 
{
    console.log("conectado correctamente");
    app.listen(port, () => {
        console.log('si se escucha', port);
    })
}
})
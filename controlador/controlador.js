const estudiante = require('../modelo/estudiante');

function crear(req, res) {
var est = new estudiante();
var param = req.body;

est.documento = param.documento
est.nombre = param.nombre;
est.edad = param.edad;
est.grado = param.grado;
est.telefono = param.telefono;
est.correo = param.correo;

est.save( (error, creado) => {
if (error) {
    res.status(500).send({
        statusCode: 500,
        message: "error mi server"
    })
}
 else {
     if (!creado) {
         res.status(400).send({
            statusCode: 400,
            message: "error al registrar"
         })         
         }
         else {
            res.status(200).send({
                statusCode: 200,
                message: "registrado",
                dataest: creado
                                 })
             }
            }

} )

}

function listar(req, res){
   
    estudiante.find({}, (error, listado) => {
        if (error) {
            res.status(500).send( {
                statusCode: 500,
                message: "error del server"
            })
            }
            else {   
                    res.status(200).send ({
                        statusCode: 200,
                        message: "listado de la bd",
                        listado:  listado
                    }) 
                
            }   
    })
}


function update (req, res){
    var parametro = req.body;
    var idest = req.params.idest;

    estudiante.findByIdAndUpdate(idest, parametro, (error, updated) => {
  if (error) {
      res.status(500).send({
          statusCode: 500,
          message: "error e el server"
      })
  }
  else {
      if (!updated) {
          res.status(400).send ({
             statusCode: 400,
             message: "no actualizo" 
          })
             }
             else {
                 res.status(200).send ({
                     statusCode: 200,
                     message: "actualizado"
                 })
             }
  }
    })

}


function eliminar(req, res){
    var idest = req.params.idest;

    estudiante.findByIdAndDelete(idest, (error, eliminado) => {
 if (error) {
     res.status(500).send( {
         statusCode: 500,
         message: "error del server"
     })
     }
     else {
         if (!eliminado) {
             res.status(400).send ({
                 statusCode: 400,
                 message: "error al eliminar"
             })
         }
         else {
             res.status(200).send ({
                 statusCode: 200,
                 message: "eliminado"
             }) 
         }
     }

    })
}

module.exports = {
    crear,
    listar,
    update,
    eliminar   

}
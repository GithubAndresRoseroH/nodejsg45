//console.log("Prueba Node 1")

const express = require('express');
const mongoose = require('mongoose');
const TareaSchema = require("./modelos/Tarea.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb+srv://prog_web:lFolpXf5cNzIPViT@clusterprogweb045.n0cmtfv.mongodb.net/prueba1BdG45?retryWrites=true&w=majority");

//CRUD
router.get('/', (req, res) => {
    res.send("Llamado ruta raiz aplicacion");
});

//GET con tareas
router.get('/tarea', (req, res) => {
    TareaSchema.find(function(err, datos) {
if (err) {
console.log("Error leyendo tareas de BD");
        } else {
res.send(datos);
        }
    });
});

//POST
router.post('/tarea', (req, res) => {
    let nuevaTarea = new TareaSchema({
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.detalle
    });

    nuevaTarea.save(function(err,datos) {
        if (err) {
            console.log(err);
        }
        res.send("Tarea almacena exitosamente")
    });
});

app.use(router);
app.listen(3000, () => {
    console.log("Server running on port 3000....");
});
const express = require("express");
const server = express();
server.use(express.json());

const helados = [
    {
        sabor: "vainilla"
    },
    {
        sabor: "frutilla"
    },
    {
        sabor:"chocolate"
    },
];

server.get("/helados" , (req, res)=>{
    if(!req.body.sabor){
        return res.status(422).json({msg: "El sabor es requerido"})
    }

    helados.push(req.body);
    res.status(500).json(helados);
});

server.get("*" , (req , res)=>{
    res.status(404).json(
        {
            error: true,
            msg: 'No se encuentra la ruta solicitada'
        }
    )
});







server.listen(5500, () =>{
console.log('Servidor iniciado...');
});
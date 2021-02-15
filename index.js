const express = require("express");
const server = express();
server.use(express.json());



    const celulares = [
        {
            precio: "5000",
            tipo: "x",
            marca:"iphone"
        },
       
    ];
    server.post("/celulares" , (req, res)=>{
   
         celulares.push(req.body);
        res.status(200).json(celulares);
    });

    server.get("/celulares" , (req, res)=>{

        res.status(200).json(celulares);
    })
    
    server.get("*" , (req , res)=>{
        res.status(404).json(
            {
                error: true,
                msg: 'No se encuentra la ruta solicitada'
            }
        )
    });
    server.listen(5000, () =>{
        console.log('Servidor iniciado...');
        });
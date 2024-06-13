const mongoose = require("mongoose");


//Configurando o mongoose
//Para evitar erros simples, eu uso o comando da sexta linha e o "useMongoClient:true"
mongoose.Promise= global.Promise;

mongoose.connect("mongodb://localhost/TesteBanco", {useMongoClient:true})
  .then(() => {
    console.log("Connect is sucessfully");
  })
  .catch((error) => {
    console.log(`Connect falied: ${error}`);
  });

//Model - Usuários
//Usar Schema no final para identificar um Model é uma boa prática
const UsuarioSchema = mongoose.Schema ({
    nome:{
        type:String,
        require: true
    },
    sobrenome:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    idade:{
        type:Number,
        require:true
    },
    pais:{
        type:String
    }
})

mongoose.model("usuarios", UsuarioSchema)
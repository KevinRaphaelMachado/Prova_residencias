const prompt = require("prompt-sync")();

const residencias = [];

const validarIndice = (indice) => indice >= 0 && indice < residencias.length;

const modelo = () => {
    const endereco = prompt("  Qual o endereço da residencia? ");
    const valor = +prompt("  Qual o valor da residencia?")
    const morador = +prompt("Qual o numero de moradores da residencia")

    return {
    endereco,
    valor,
    morador,
    }
};

function criar()  {
    const residencia = modelo();
    if (residencias !== undefined) {
        residencias.push(residencia)
        console.log("  CADASTRO REALIZADO COM SUCESSO!  ");
        
        
    }else {
        console.log("  NENHUMA RESIDENCIA CADASTRADA ");
        
    }
};

const listar = () => {
    if (residencias.length == 0) {
        console.log("Nunhuma residencia encontrada");
        
    }else {
        residencias.forEach((residencia, indice) => {
        console.log(`
            Endereço: ${residencia.endereco}
            Valor: ${residencia.valor}
            Moradores: ${residencia.morador}

            `);
        })
    }
};
        
const atualizar = () => {
    listar();
    const indice = +prompt("  Qual indice deseja atualizar? ")

    const residencia = modelo();
    if (validarIndice(indice)) {
        residencias[indice] = residencia
        console.log("  ATUALIZAÇÃO REALIZADA COM SUCESSO");
        
    }else {
        console.log("  Falha na atualização");
        
    }
}; 

const deletar = () => {
    listar();
    const indice = +prompt("  Qual indice deseja deletar? ")

    

    if (validarIndice(indice)) {
        residencias.splice(indice, 1)
        console.log("Indice deletado com sucesso");
    }else {
        console.log("Falha na operação");
        
    }
};
        
module.exports = {
    criar,
    listar,
    atualizar,
    deletar,
};
        

        
        


    
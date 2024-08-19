const prompt = require("prompt-sync")();

const {criar, listar, atualizar, deletar} = require("./modulo.js");

while (true) {
    console.log(`
        1. CADASTRAR
        2. LISTAR
        3. ATUALIZAR
        4. DELETAR
        `);
    const opcao = +prompt("  ESCOLHA UMA DAS OPÇÕES ACIMA  ")

    switch (opcao) {
        case 1:
            criar();
            break;

            case 2:
            listar();
            break;

            case 3:
            atualizar();
            break;

            case 4:
            deletar();
            break;

            case 5:
            process.exit();
            break;
    
        default:
            break;
    }
    
};
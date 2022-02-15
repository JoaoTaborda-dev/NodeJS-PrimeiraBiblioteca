const chalk = require('chalk')
const fs = require('fs')

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'))
}

function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8'
  fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then(texto => console.log(chalk.green(texto)))
    .catch(erro => trataErro(erro))
    .finally(() =>
      console.log(chalk.blue('A Leitura do arquivo foi finalizada'))
    )
}

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8'
//   fs.readFile(caminhoDoArquivo, encoding, (error, texto) => {
//     if (error) {
//       trataErro(error)
//     } else {
//       console.log(chalk.green(texto))
//     }
//   })
// }

pegaArquivo('./arquivos/texto1.md')

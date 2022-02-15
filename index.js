const chalk = require('chalk')
const fs = require('fs')

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'))
}

//Funções assincronas
//Usando promisses com Async e Await

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8'
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(chalk.green(texto))
  } catch (error) {
    trataErro(error)
  } finally {
    console.log(chalk.yellow('operação concluída'))
  }
}

//Usando promisses com o .Then
// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8'
//   fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then(texto => console.log(chalk.green(texto)))
//     .catch(erro => trataErro(erro))
//     .finally(() =>
//       console.log(chalk.blue('A Leitura do arquivo foi finalizada'))
//     )
// }

//Função sincrona
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

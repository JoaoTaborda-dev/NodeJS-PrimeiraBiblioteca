const pegaArquivo = require('../index')

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]
describe('pegaArquivo::', () => {
  it('Deve ser uma function', () => {
    expect(typeof pegaArquivo).toBe('function')
  })
  it('Deve pegar um arquivo e retornar um array de links', async () => {
    const resultado = await pegaArquivo('./test/arquivos/texto1.md')
    expect(resultado).toEqual(arrayResult)
  })
  it('Deve pegar um arquivo e retornar informando que não possui links', async () => {
    const resultado = await pegaArquivo('./test/arquivos/texto1_semlinks.md')
    expect(resultado).toBe('Não há links')
  })
  it('Deeve lançar um erro na falta de arquivo', async () => {
    await expect(
      pegaArquivo('/home/juliana/Documents/alura/lib-markdown/test/arquivos')
    ).rejects.toThrow(/Não há arquivo no caminho/)
  })
})

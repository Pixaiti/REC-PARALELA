import Voo from './voo.js'

export default class Aeroporto {
    constructor(nomeDaBase) {
        this.nome = nomeDaBase
        this.listaDeVoos = []
    }

    adicionarVooNoRadar(novoVoo) {
        this.listaDeVoos.push(novoVoo)

        console.log(`Voo ${novoVoo.codigo} adicionado ao radar do aeroporto ${this.nome}.`)
    }

    buscarVoo(codigoProcurado) {
        try {
            const vooEncontrado = this.listaDeVoos.find(elem => elem.codigo === codigoProcurado)

            if (!vooEncontrado) {
                throw new Error(`Voo com código ${codigoProcurado} não foi encontrado.`)
            }

            return vooEncontrado
        } catch (erro) {
            return erro.message
        }
    }
}
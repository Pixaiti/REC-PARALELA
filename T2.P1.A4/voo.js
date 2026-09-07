export default class Voo {
    constructor(codigo, destino, status = "No solo", portao) {
        this.codigo = codigo
        this.destino = destino
        this.portao = portao
        this.status = status
    }
}
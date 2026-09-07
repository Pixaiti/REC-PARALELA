import Voo from './voo.js'
import Aeroporto from './aeroporto.js'

let aeroportoCWB = new Aeroporto("Afonso Pena")

let voo1 = new Voo("G3-100", "São Paulo", "Embarque", "01")
let voo2 = new Voo("LA-200", "Rio de Janeiro", "Atrasado", "04")
let voo3 = new Voo("AD-300", "Campinas", "Confirmado", "02")

aeroportoCWB.adicionarVooNoRadar(voo1)
aeroportoCWB.adicionarVooNoRadar(voo2)
aeroportoCWB.adicionarVooNoRadar(voo3)

const tela = document.getElementById("telaDoAeroporto")

export default function atualizarPainel() {
    tela.innerHTML = ""
    
    aeroportoCWB.listaDeVoos.forEach(voo => {
        const div = document.createElement("div")
        div.classList.add("card-voo")
        div.innerHTML = `
            <h3>Voo ${voo.codigo} - Destino: ${voo.destino}</h3>
            <p>Portão: ${voo.portao}</p>
        `
        tela.appendChild(div)
    })
}

atualizarPainel()


const codigoProcurado = "G3-100"
aeroportoCWB.buscarVoo(codigoProcurado)
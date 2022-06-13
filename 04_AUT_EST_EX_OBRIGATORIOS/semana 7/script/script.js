var bob = false

function inicial() {
    document.getElementById("direita").innerHTML = ""
    document.getElementById("esquerda").innerHTML = ""
    document.getElementById("btn").innerHTML = ""
    gerador_inicial(document.getElementById("alunos").value) 
}

function gerador_inicial(alunos) {
    for ( i = 0; i<alunos; i++) {
        var tag = document.createElement("input")
        tag.setAttribute("placeholder",`ensira a nota do aluno ${i} no trabalho `)
        tag.setAttribute("id",`trabalho_${i}`)
        tag.setAttribute("type","text")
        tag.setAttribute("class","form-control mt-1")
        document.getElementById("direita").appendChild(tag)
    }
    for ( i = 0; i<alunos; i++) {
        var tag = document.createElement("input")
        tag.setAttribute("placeholder",`insira a nota do aluno ${i} na prova`)
        tag.setAttribute("id",`prova_${i}`)
        tag.setAttribute("type","text")
        tag.setAttribute("class","form-control mt-1")
        document.getElementById("esquerda").appendChild(tag)
    }
    var tag_b = document.createElement("button")
    var text_b = document.createTextNode("aperte aqui após inserir todas as notas")
    tag_b.appendChild(text_b)
    tag_b.setAttribute("onclick",`calcular(${alunos})`)
    tag_b.setAttribute("id","botao_retirar")
    document.getElementById("btn").appendChild(tag_b)
}
 
function calcular(alunos) {
    const n_prova = []
    const n_trabalho = []
    for (i = 0; i<alunos;i++) {
        n_prova.push(document.getElementById(`prova_${i}`).value)
        n_trabalho.push(document.getElementById(`trabalho_${i}`).value)      
    }
    respostas(n_prova,n_trabalho,alunos)
}

function respostas(provas,trabalhos,alunos) {
    let m =0
    let m_prova = 0
    let m_trabalho = 0
    let m_alunos = []
    let maior_prova = Math.max.apply(Math,provas)
    let menor_prova = Math.min.apply(Math,provas)
    let maior_trabalho = Math.max.apply(Math,trabalhos)
    let menor_trablho = Math.min.apply(Math,trabalhos)

    for(i = 0;i<alunos;i++) {   
        m += Number(provas[`${i}`])*2
        m += Number(trabalhos[`${i}`])*3
    }
    m = m/(Number(alunos)*5)

    for (i=0;i<alunos;i++) {
        m_prova += Number(provas[`${i}`])
        m_trabalho += Number(trabalhos[`${i}`])
    }
    m_prova = m_prova/(Number(alunos))
    m_trabalho = m_trabalho/(Number(alunos))

    for (i=0;i<alunos;i++) {
        m_alunos.push(( Number(provas[`${i}`])*2 +Number(trabalhos[`${i}`])*3 )/5)
    }
    var tag =  document.createElement("p")
    var text = document.createTextNode(`a maior nota da prova foi ${maior_prova} e a menor foi ${menor_prova}. A maior nota do trabalho foi ${maior_trabalho} e o menor ${menor_trablho}. A media da turma foi ${m}, a media dos trabalhos foi ${m_trabalho} e a media das provas ${m_prova}. As medias dos alunos em ordem são ${m_alunos}`)
    tag.appendChild(text)
    escrever(text)
}

function escrever(text) {
    document.getElementById("direita").innerHTML = ""
    document.getElementById("esquerda").innerHTML = ""
    document.getElementById("respostas").appendChild(text)
}
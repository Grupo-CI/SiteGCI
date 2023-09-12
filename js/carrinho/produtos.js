const catalogoProdutos = [
    {
        id: 1,
        produtoImagem: 'elo-digtal-certificadora.png',
        nomeProduto: 'Certificado Digital',
        sobreProduto: 'A Elo Certificadora Digital Oferece segurança em certificação digital às empresas de todos os portes e setores, pessoas físicas e profisionais liberais.',
        paginaProduto: 'saiba-mais/produtos/certificado-digital.html'
    },
    {
        id: 2,
        produtoImagem: 'pc-produtos.png',
        nomeProduto: 'Computador Intel Core i5',
        sobreProduto: 'Equipado com processador IntelCore i5 e um monitor de alta resolução, o alto desempenho está garantido com o sistema operacional Windows 10.',
        paginaProduto: 'saiba-mais/produtos/pc.html'
    },
    { 
        id: 3, 
        produtoImagem: 'bobina-termica-prod.png',
        nomeProduto: 'Bobina Térmica',
        sobreProduto: 'Para impressão de recibos, cupons fiscais, controles de segurança, tickets e outras finalidades. Caixa com 30 unidades.',
        paginaProduto: 'saiba-mais/produtos/bobina-termica.html'
    }, 
    { 
        id: 4, 
        produtoImagem: 'gaveta-de-dinheiro.png',
        nomeProduto: 'Gaveta de dinheiro',
        sobreProduto: 'Possui duas fendas para introdução de tickets sem a necessidade de abri-la. Possui abertura manual através da chave ou elétrica por pulso elétrico.',
        paginaProduto: 'saiba-mais/produtos/gaveta-de-dinheiro.html'
    }, 
    { 
        id: 5, 
        produtoImagem: 'impressora.png',
        nomeProduto: 'Impressora',
        sobreProduto: 'A i9 é a solução ideal para NFC-e/SAT, além da impressão de cupons não fiscais. Ela pode funcionar como unidade geradora de senha autônoma.',
        paginaProduto: 'saiba-mais/produtos/impressora.html'
    },
    { 
        id: 6, 
        produtoImagem: 'leitor-de-codigo.png',
        nomeProduto: 'Leitor de Código',
        sobreProduto: 'Além de ser um produto prático, oferece um ótimo desempenho, fazendo esse leitor a escolha perfeita para a leitura de código de barras.',
        paginaProduto: 'saiba-mais/produtos/leitor-de-codigo.html'
    }, 
    { 
        id: 7, 
        produtoImagem: 'sat-fiscal.png',
        nomeProduto: 'SAT Fiscal',
        sobreProduto: 'Possibilita a emissão rápida e simplificada de Cupons Fiscais Eletrônicos para os estabelecimentos comerciais do Estado de São Paulo.',
        paginaProduto: 'saiba-mais/produtos/sat-fiscal.html'
    }, 
    
]

for(const produtoCatalogo of catalogoProdutos){
    const cartaoProduto = `<div id="produtos">
    <div class="card" id="prod">
    <img src="images/${produtoCatalogo.produtoImagem}" alt="">
        <h4>${produtoCatalogo.nomeProduto}</h4>
        <p>${produtoCatalogo.sobreProduto}</p>
        <button class="button"><a href="${produtoCatalogo.paginaProduto}">Saiba Mais</a></button>  
    </div>
    </div> `

    document.getElementById('produtos').innerHTML += cartaoProduto
} 




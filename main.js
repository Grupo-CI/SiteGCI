const catalago = [
    {
        id: 1,
        produtoImagem: 'elo-digtal-certificadora.png',
        nomeProduto: 'Certificado Digital',
        sobreProduto: 'A Elo Certificadora Digital Oferece segurança em certificação digital às empresas de todos os portes e setores, pessoas físicas e profisionais liberais.'
    },
    {
        id: 2,
        produtoImagem: 'pc-produtos.png',
        nomeProduto: 'Computador Intel Core i5',
        sobreProduto: 'Equipado com processador IntelCore i5 e um monitor de alta resolução, o alto desempenho está garantido com o sistema operacional Windows 10.',
    },
    { 
        id: 3, 
        produtoImagem: 'bobina-termica-prod.png',
        nomeProduto: 'Bobina Térmica',
        sobreProduto: 'Para impressão de recibos, cupons fiscais, controles de segurança, tickets e outras finalidades. Caixa com 30 unidades.'
    }, 
    { 
        id: 4, 
        produtoImagem: 'gaveta-de-dinheiro.png',
        nomeProduto: 'Gaveta de dinheiro',
        sobreProduto: 'Possui duas fendas para introdução de tickets sem a necessidade de abri-la. Possui abertura manual através da chave ou elétrica por pulso elétrico.'
    }, 
    { 
        id: 5, 
        produtoImagem: 'impressora.png',
        nomeProduto: 'Impressora',
        sobreProduto: 'A i9 é a solução ideal para NFC-e/SAT, além da impressão de cupons não fiscais. Ela pode funcionar como unidade geradora de senha autônoma.'
    },
    { 
        id: 6, 
        produtoImagem: 'leitor-de-codigo.png',
        nomeProduto: 'Leitor de Código',
        sobreProduto: 'Além de ser um produto prático, oferece um ótimo desempenho, fazendo esse leitor a escolha perfeita para a leitura de código de barras.'
    }, 
    { 
        id: 7, 
        produtoImagem: 'sat-fiscal.png',
        nomeProduto: 'SAT Fiscal',
        sobreProduto: 'Possibilita a emissão rápida e simplificada de Cupons Fiscais Eletrônicos para os estabelecimentos comerciais do Estado de São Paulo.'
    }, 
    
]

for(const produtoCatalago of catalago){
    const cartaoProduto = `<div id="produtos">
    <div class="card" id="prod">
    <img src="images/${produtoCatalago.produtoImagem}" alt="">
        <h4>${produtoCatalago.nomeProduto}</h4>
        <p>${produtoCatalago.sobreProduto}</p>
        <button><a href="/saiba-mais/produtos/certificado-digital.html">Saiba Mais</a></button>  
    </div>
    </div> `

    document.getElementById('produtos').innerHTML += cartaoProduto
} 



const catalogoServicos = [
    {
        id: 1,
        servicoImagem: 'sistema-datacaixa.png',
        nomeServico: 'Sistema Datacaixa',
        sobreServico: 'É um sistema para emissão de Cupom Fiscal Eletrônico e Nota Fiscal de Consumidor Eletrônica. O sistema tem uma interface intuitiva facilitando sua implantação e utilização.',
        saibaMaisServico: 'datacaixa.html'
    },
    {
        id: 2, 
        servicoImagem: 'sistema-consumer.png',
        nomeServico: 'Sistema Consumer',
        sobreServico: 'É um sistema para facilitar as vendas por <i>delivery</i>, deixando as entregas mais rápidas além de ter uma gestão completa e fácil.',
        saibaMaisServico: 'consumer.html'
    },
    {
        id: 3, 
        servicoImagem: 'sistema-maurilio.png',
        nomeServico: 'Sistema Loja Virtual',
        sobreServico: 'É um sistema que oferece diversas facilidades que otimizam a reposição de mercadorias através do cálculo do estoque ideal e de relatórios gerenciais.', 
        saibaMaisServico: 'maurilio.html'
    },
    {
        id: 4, 
        servicoImagem: 'sistema-saurus.png',
        nomeServico: 'Sistema Saurus', 
        sobreServico: 'É um sistema de frente de caixa com interface intuitiva e telas autodidáticas que reduzem consideravelmente o tempo de aprendizado.',
        saibaMaisServico: 'saurus.html'
    }
]

for(const servicoCatalogo of catalogoServicos){
    const cartaoServico = `<div class="wrap-content" id="servicos">
    <div class="card" id="serv">
        <img src="images/${servicoCatalogo.servicoImagem}" alt="">
        <h4>${servicoCatalogo.nomeServico}</h4>
        <p>${servicoCatalogo.sobreServico}</p>
        <div class="buttons">
            <button class="button"><a href="saiba-mais/servicos/${servicoCatalogo.saibaMaisServico}">Saiba Mais</a></button>
            <button class="adicionar-carrinho"><i class="fa-solid fa-cart-plus" style="color: #ffffff;"></i></button>
        </div>
    </div>
    </div>`

    document.getElementById('servicos').innerHTML += cartaoServico
} 

function abrirCarrinho() {
    document.getElementById("carrinho").classList.add("right: 0px");
    document.getElementById("carrinho").classList.remove("right: 360px");
  }
  
  function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove("right:0px");
    document.getElementById("carrinho").classList.add("right:360px");
  }
  
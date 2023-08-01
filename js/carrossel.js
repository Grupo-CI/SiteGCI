const controls = document.querySelectorAll('.control');

let currentItem = 0;

const produtos = document.querySelectorAll('.card');

const maxProdutos = produtos.length;

controls.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("arrow-left");

        if(isLeft){
            currentItem -= 1;
        } else{
            currentItem += 1;
        }

        if (currentItem >= maxProdutos){
            currentItem = 0;
        }

        if(currentItem < 0){
            currentItem = maxProdutos - 1
        }

        produtos.forEach(produto => produto.classList.remove('current-item'));

        produtos[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        })

        produtos[currentItem].classList.add('current-item')
    } )
});

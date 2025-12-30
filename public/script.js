const menu = document.querySelector(".header__menu-hamburguer");
const nav = document.querySelector(".nav");

menu.addEventListener('click', () =>{
    
    if(nav.style.display == "none")
    {
        menu.style.transform = "rotate(90deg)"
        nav.style.display = "block";
    }
    else
    {
        menu.style.transform = "rotate(0deg)"
        nav.style.display = "none";
    }
})

const servico1 = document.querySelector(".servico1");
const servico2 = document.querySelector(".servico2");

function mostrarServico1(){
    document.getElementById('servico2-button').classList.remove("ativo");
    servico2.classList.remove("ativo");

    document.getElementById('servico1-button').classList.add("ativo");
    servico1.classList.add("ativo");
}
function mostrarServico2(){
    document.getElementById('servico1-button').classList.remove("ativo");
    servico1.classList.remove("ativo");

    document.getElementById('servico2-button').classList.add("ativo");
    servico2.classList.add("ativo");
}

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 100)
    {
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
})

let itens = document.querySelectorAll(".header__carrossel a");
console.log(itens);
itens.forEach(item => {
    item.addEventListener("click", () =>{
        itens.forEach(i => i.classList.remove("hover-bar"));
        item.classList.add("hover-bar");
    })
    window.addEventListener("scroll", () => {
        if(!document.querySelector(".header__carrossel").classList.contains("carrossel__privacidade"))
        {
            if(window.scrollY <= 500)
            {
                itens.forEach(i => i.classList.remove("hover-bar"));
                itens[0].classList.add("hover-bar");
            }
            else if(window.scrollY <= 900){
                itens.forEach(i => i.classList.remove("hover-bar"));
                itens[1].classList.add("hover-bar");
            }
            else if(window.scrollY <= 1100){
                itens.forEach(i => i.classList.remove("hover-bar"));
                itens[2].classList.add("hover-bar");
            }
            else{
                itens.forEach(i => i.classList.remove("hover-bar"));
                itens[3].classList.add("hover-bar");
            }
        }
    })
});


//-------------------Menu & Cart Opener--------------------------//
const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu__open");
const menuClose = document.querySelector(".menu__close");

menuIcon.addEventListener('click', () => {
    menu.style.left = "0%";
})

menuClose.addEventListener('click', () => {
    menu.style.left = "-100%";
})

const cartIcon = document.querySelector(".header__cart");
const cart = document.querySelector(".cart");

cartIcon.addEventListener('click',() =>{
    cart.classList.toggle("show");
})

//---------------------Contador de badge--------------------------//
const badge = document.querySelector(".cart__badge");

const updateCount = () => {
    const cartCount = document.querySelector(".cart__items").childElementCount;
    const cartMessage = document.querySelector(".cart__message");
    const cartButton = document.querySelector(".cart__button");

    if (cartCount>0){
        badge.style.opacity = "100%";
        badge.innerText = cartCount;
    }

    else {
        badge.style.opacity = 0;
    }
}

updateCount();

//-----------------Agregar objetos al carrito-----------------//

const buttons = document.querySelectorAll(".products__button");

buttons.forEach(item =>{
    item.addEventListener('click',() =>{
        const itemParent = item.parentElement;
        const newCartItem = itemParent.cloneNode(true);
        const newChildren = newCartItem.children;
        const newClasses = ["cart__img","cart__product","cart__price","cart__icon"]

        newCartItem.classList.remove("products__item");
        newCartItem.classList.add("cart__item");
        newCartItem.removeChild(newCartItem.lastElementChild);

        Array.from(newChildren).forEach((child, index) => {
            child.classList.remove("products__img","products__title","products__price");
            if (newClasses[index]){
                child.classList.add(newClasses[index]);
            }
        })
        
        const newIcon = document.createElement("img");
        newIcon.src = "img/Delete_Icon.svg";
        newIcon.classList.add("cart__icon", "cart__icon--delete");

        newIcon.addEventListener('click', () =>{
            newCartItem.remove();
            updateCount();
        })

        newCartItem.appendChild(newIcon);

        document.querySelector(".cart__items").appendChild(newCartItem);

        updateCount();
    })
})

//------------------Quitar objetos del carrito---------------------//
const iconRemove = document.querySelectorAll(".cart__icon--delete");

iconRemove.forEach(elem =>{
    elem.addEventListener('click', () =>{
        const elemParent = elem.parentElement;
        elemParent.remove();

        updateCount();
    })
})

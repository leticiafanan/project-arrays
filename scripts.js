const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterVegan = document.querySelector('.filter-all')

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { 
        style: 'currency', 
        currency: 'BRL', 
    })

    return newValue
}

function showAll(products) {
    let myLi = ''

    products.forEach((product) => {
        myLi += `
        <li>
            <img src= ${product.src}>
            <p>${product.name}</p>
            <p  class="item-price"> ${formatCurrency(product.price)}</p>
        </li>
        `
    })

    list.innerHTML = myLi
}



function mapAllItems() {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9
    }))
    showAll(newPrice)
}


function sumAll() {
    const totalPrice = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
    <li>
        <p>O valor total dos itens é  ${formatCurrency(totalPrice)}</p>
    </li>
    `
}

function filterVegan() {
    const veganFilter = menuOptions.filter((product) => product.vegan)

    showAll(veganFilter)
}





buttonShowAll.addEventListener('click', () => showAll(menuOptions)) //só chama quando clicar no botão
buttonMapAll.addEventListener('click', mapAllItems)
buttonSumAll.addEventListener('click', sumAll)
buttonFilterVegan.addEventListener('click', filterVegan)

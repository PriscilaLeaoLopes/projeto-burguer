

const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSomar = document.querySelector('.sometudo')
const buttonFiltrar = document.querySelector('.filtrar-prod')


function formatCurrency(value) {
   const newValue = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',

   })
   
return newValue

}

function showAll(productsArray) {
    let myLi = ''

   productsArray.forEach((product) => {

        myLi = myLi + `
        
        <li>
        
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="preco">R$ ${formatCurrency(product.price)}</p>
    
        </li>
        
        
        `
    })
    list.innerHTML = myLi
}

function mapAllItems(){
   const newPrices = menuOptions.map((product) => ({
     name: product.name, 
     price: product.price * 0.9,
     vegan: product.vegan,
     src: product.src

   }))
   showAll(newPrices)
}

function SomarTudo (){
    const valorTotal = menuOptions.reduce((acc, curr)=> acc + curr.price, 0)

  list.innerHTML =  `
    <li>
    <p>O Valor Total do Pedido é : R$ ${formatCurrency(valorTotal)}</p>

    </li>
    
    `
    console.log(valorTotal)
}

function filtrarProd (){
      const filtrarVegan = menuOptions.filter((product) => product.vegan)

      showAll(filtrarVegan)
       

}






buttonShowAll.addEventListener('click' , () => showAll(menuOptions))
buttonMapAll.addEventListener('click' , mapAllItems)
buttonSomar.addEventListener('click' , SomarTudo)
buttonFiltrar.addEventListener('click' , filtrarProd)
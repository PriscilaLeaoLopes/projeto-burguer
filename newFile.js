menuOptions.forEach((product) => {
    myLi += ""

        < li >
        <img src $ {...product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price}</p>
            <li />
            '

})

            list.innerHTML = myLi
            console.log(myLi)</>;
});

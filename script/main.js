const card = [...document.querySelectorAll('.main__card')],
    main = document.querySelector('.main'),
    chech__price_products = document.querySelector('.chech__price-products'),
 totalCheck = document.querySelector('.zakaz_btn'),
check__price = document.querySelector('.check__price'),
check__price_ok = document.querySelector('.check__pirce-btn')

card.forEach((val, index) => {
    val.addEventListener('click', function chooseCard() {
        if(totalCheck.classList[1] == 'active') totalCheck.classList.remove('active')
        main.insertAdjacentHTML('beforeend', `<div class="product">
        <div class="product__controll">
            <div class="product__controll_btn">
                <button type="button" class="product__controll_btns">-</button>
                <span class="product__controll_num">0</span>
                <button disabled type="button" class="product__controll_btns">+</button>
            </div>
            <p class="product__controll_price">
                Price: <span>5000</span> sum
            </p>
        </div>
        <div class="product__controll_check">
        </div>
        <p class="product__controll_info">
            VAT(15%) price: <span>0</span> sum
        </p>
        <div class="product__controll_box">
            <a class="product__controll_link" href="#">ok</a>
            
        </div>
    </div>`)
        const productBox = document.querySelector('.product'),
            cardBox = document.querySelector('.card'),
            ok = document.querySelector('.product__controll_link'),
            title = document.querySelector('h1'),
            labelBox = document.querySelector('.product__controll_check'),
            btnNum = document.querySelector('.product__controll_num'),
            price = document.querySelector('.product__controll_price span'),
            totalPrice = document.querySelector('.product__controll_info span'),
            del =  [...document.querySelectorAll('.umumiySumma')]
           
        if (productBox) {
            let arrIndex
            btnNum.innerHTML = '0'
            price.innerHTML = '0'
            totalPrice.innerHTML = products[index].HighSumm
            /* asosiy yoq bo'lib qoshimcha oyna ochilishi va nomi chiqishi */
            cardBox.style.opacity = 0
            productBox.style.transform = `scale(1)`
            title.innerHTML = products[index].name
            /* labelda hajmini chiqarish */
            products[index].bulks.forEach((val1, index1) => {
                labelBox.insertAdjacentHTML('beforeend',
                    `<label><input type="radio" name="a"><span>${val1} L</span></label>`)
            })
            const input = [...document.querySelectorAll('label input')],
                btns = [...document.querySelectorAll('.product__controll_btns')]
            btns.forEach(btn => {
                btn.disabled = true
            })
            // inputlani ichini aylanib xar biriga sobitya berish
            input.forEach((key2, index2) => {
                key2.addEventListener('click', function () {
                    products[index].check = arrIndex = index2
                    price.innerHTML = products[index].Summ
                    totalPrice.innerHTML = products[index].HighSumm
                    btnNum.innerHTML = products[index].amounts[index2]
                    btns.forEach(btn => {
                        if (key2.checked) {
                            btn.disabled = false
                        } else {
                            btn.disabled = true
                        }
                    })
                })
            })
            btns.forEach(btn => {
                btn.addEventListener('click', function () {
                    if (btn.innerHTML === '+' && products[index].amounts[arrIndex] < 10) {
                        products[index].amounts[arrIndex]++
                    } else if (btn.innerHTML === '-' && products[index].amounts[arrIndex] > 0) {
                        products[index].amounts[arrIndex]--
                    }
                    btnNum.innerHTML = products[index].amounts[arrIndex]
                    // console.log(products[index].Summ);
                    price.innerHTML = products[index].Summ
                    totalPrice.innerHTML = products[index].HighSumm
                
                })
            })

            ok.addEventListener('click', () => {
                productBox.remove()
                cardBox.style.opacity = 1
                if(totalCheck.classList[1] != 'active') totalCheck.classList.add('active')
                title.innerHTML = 'Choice your drink'
                label = [...document.querySelectorAll('label')]
                label.forEach(key => {
                    key.remove()
                })
            })
        }
    })
})

totalCheck.addEventListener('click', function () {
    if(check__price.classList[1] != 'active')      check__price.classList.add('active') 
    products.forEach(el =>{
        el.amounts.forEach((value, index)=>{
            if(value > 0  ){
            el.check = index
                // chech__price_products.remove()
                chech__price_products.insertAdjacentHTML('beforeend',`
                <div class="chech__price-productss">
                <h3 class="check__products-title">${el.name } ${el.bulks[index]}L</h3>
                <h3 class="check__products-amouts">Soni:${value}</h3>
                <h3 class="check__products-price">Narxi:${el.Summ}</h3>
                </div>
                `)
             }
             else if( totalCheck.classList[1] == 'active') totalCheck.classList.remove('active')
        })
    }) 
    const  ddd = document.querySelector('.umumiySumma span')
    const  sss = document.querySelector('.umumiySumma')


    let totalPriceW = 0
    products.forEach(did =>{
        totalPriceW += did.HighSumm
    })


    

    sss.innerHTML =  !totalPriceW ? '' : `total price: ${totalPriceW }` 


    let  nazat = document.querySelector('.check__product-backBtn'),
    delet = document.querySelectorAll('.chech__price-productss')    
    nazat.addEventListener('click', ()=>{
        delet.forEach(d=>{  
            if(d)  d.remove()
        })
            // delet.remove()
        
    
        if(check__price.classList[1] == 'active')  check__price.classList.remove('active')
         
         if( totalCheck.classList[1] != 'active') totalCheck.classList.add('active')
    
    
    
    })
})

    check__price_ok.addEventListener('click',() => {
        window.location.reload()     
    })

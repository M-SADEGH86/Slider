let $ = document ;
let slides = $.querySelector('.container-slides')
let btn = $.querySelectorAll('.btn')

let marginRightStyle = 0 
let margin = 0
let chengsSlides = 200 ;
let btnId = null ; 

btn.forEach((button) => {
    
    button.addEventListener('click' , (item) => {
        btn.forEach((btnActive) => {
            if (btnActive.getAttribute('data-id') == item.target.dataset.id) {
                btnActive.classList.add('active-btn')
            } 
            if(btnActive.getAttribute('data-id') != item.target.dataset.id) {
                btnActive.classList.remove('active-btn') 
            }
        })
        button.classList.add('active-btn')
        btnId = item.target.dataset.id
        margin = chengsSlides * btnId

        if (marginRightStyle > margin){
            slides.style.marginRight = margin + '%'
            marginRightStyle = margin
        } else if (margin > marginRightStyle) {
            slides.style.marginRight = margin + '%'
            marginRightStyle = margin
        }
    })
})
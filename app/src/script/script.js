// Main Content

const sort = document.querySelector('.main__content-sort'),
    sortInfo = document.querySelector('.main__content-sortInfo'),
    sortPopup = document.querySelector('.main__content-sortPopup'),
    sortArrow = document.querySelector('.main__content-arrow'),
    sortDetails = document.querySelectorAll('.main__content-details'),
    contentPressure = document.querySelectorAll('.main__content-pressure')

sortInfo.addEventListener('click', (e) => {
    if (sortPopup.classList.contains('active')) {
        sortPopup.classList.remove('active')
        sortArrow.style.transform = `rotate(0deg)`
    } else {
        sortPopup.classList.add('active')
        sortArrow.style.transform = `rotate(90deg)`
        sort.style.cssText = `
            padding:4px 0;
            `
    }
    e.preventDefault()
})
sortDetails.forEach(item => {
    item.addEventListener('click', (e) => {
        item.classList.toggle('active')
    })
})
contentPressure.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')
    })
})
// Main Point
const img = document.querySelectorAll('.main__point-slides'),
    sortSpan = document.querySelector('.main__point-sortSpan'),
    sortImg = document.querySelector('.main__point-slides img')
let position = 0;
console.log(sortImg.clientWidth);
const slider = () => {
    if (position < (img.length - 2) * sortImg.clientWidth) {
        position += sortImg.clientWidth;
    } else {
        position = 0;
    }


    img.forEach(item => {
        item.style.transform = `translateX(${-position}px)`;
        item.style.transition = '1s';
    });
};
sortSpan.addEventListener('click', () => {
    slider()
})


// Main input

const planCircle = document.querySelectorAll('.main__plans-circle')

planCircle.forEach((item, i)=>{
    planCircle[0].classList.add('active')
    item.addEventListener('click', () =>{
        removeCircle(i)
    })
})
function removeCircle(index) {
    planCircle.forEach(dot => {
        dot.classList.remove('active')
    })
    planCircle[index].classList.add('active')
    
}
// // Main Create


const createSpan = document.querySelectorAll('.main__create-about span'),
    createText = document.querySelectorAll('.main__create-secretive')
    let index = 0
    createSpan.forEach((item, i) =>{
       item.addEventListener('click', () =>{
           chooseText(i)
       }) 
    })
    function chooseText(index) {
        if (createText[index].classList.contains('active')) {
            createText[index].classList.remove('active')
        } else {
            createText[index].classList.add('active')
        } 
    }

// Main Exclusive 
const exSlide = document.querySelectorAll('.main__exclusive-img'),
    exNumber = document.querySelector('.main__exclusive-number'),
    exLeft = document.querySelector('#exLeft'),
    exRight = document.querySelector('#exRight'),
    exSliderLine = document.querySelector('.main__exclusive-picture')


const nextSlide = () => {
    for(let i =0 ; i<exSlide.length; i++){
        if(true){
            exSlide[0].style.opacity= '1'
            exSlide[1].style.opacity= '0'
            exNumber.textContent = '02 / 02'
        } 
    }
}

const prevSlide = () => {
    for (let i = 0; i < exSlide.length; i++) {
        if (true) {
            exSlide[1].style.opacity = '1'
            exNumber.textContent = '01 / 02'
        }
    }
} 
exRight.addEventListener('click', nextSlide)
exLeft.addEventListener('click', prevSlide)



// Footer

const lastButton = document.querySelectorAll('.footer__content-button'),
    lastSort = document.querySelectorAll('.footer__content-sort'),
    lastText = document.querySelectorAll('.footer__content-text'),
    lastShadowText = document.querySelector('.footer__content-shadowText'),
    lastLangText = document.querySelector('.footer__content-langText'),
    lastDescribe = document.querySelectorAll('.footer__content-describe'),
    lastSpan = document.querySelectorAll('.footer__content-span')

lastButton.forEach((btn, i) =>{
    btn.addEventListener('click', () =>{
        lastAddSort(i)
    })
})

function lastAddSort(index) {
    lastSort[index].classList.toggle('active')
    lastSpan[index].classList.toggle('active')
}

lastText.forEach(elem =>{
    lastShadowText.innerHTML = '$ USD'
    elem.addEventListener('click', () =>{
        lastShadowText.innerHTML = elem.innerHTML
        lastSort[0].classList.remove('active')
    })
})

lastDescribe.forEach(elem =>{
    lastLangText.innerHTML = 'ENGLISH'
    elem.addEventListener('click', () => {
        lastLangText.innerHTML = elem.innerHTML
        lastSort[1].classList.remove('active')
    })
})



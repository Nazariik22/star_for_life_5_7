import state from './state.js'
const modal = document.getElementsByClassName('modal')[0]
const btnform = document.getElementById('modal_button')
const btnModal = document.getElementById('modal')
modal.addEventListener('click', (e) => {
    if (e.currentTarget === e.target) {
        modal.style.display = 'none';
    }
})
const open = document.getElementsByClassName('open')[0]
const aside = document.getElementsByTagName('aside')[0]
const close = document.getElementsByClassName('close')[0]
function modalNew(element, container, data) {
    element.addEventListener('click', () => container.style.display = data)
}
modalNew(open, aside, 'block')
modalNew(close, aside, 'none')
modalNew(btnModal, modal, 'block')
modalNew(btnform, modal, 'none')
let ul = document.getElementById('nav')
state.aside.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item.title;
    li.classList.add('menu')
    ul.appendChild(li)
})
const menu = Array.from(document.getElementsByClassName('menu'))
const scroll = Array.from(document.getElementsByClassName('scroll'))
menu.forEach((item, index) => {
    item.addEventListener('click', () =>
        scroll[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        }))

})
const section1 = document.getElementById('section1');
state.section1.forEach(item => {
    section1.insertAdjacentHTML('beforeend', `
        <div class="blok">
                    <h4>${item.text}</h4>
                    <button class="btn">Детальніше<img src="./img/icon/btn_arr.png" alt=""></button>
                    <img src="./img/content/section1/${item.url}" alt="" class="img">
                    <div class="cercle"></div>
                </div>
        
        `)
})

const section3 = document.getElementById('section3');
state.section3.forEach(item => {
    section3.insertAdjacentHTML('beforeend', `
       <div class="blok">
                    <img src="./img/content/section4/${item.url}" alt="">
                    <div class="column">
                        <h5>${item.title}</h5>
                        <p>${item.text}</p>
                    </div>
                </div>
        `)
})
const section4 = document.getElementById('section4');
state.section4.forEach(item => {
    section4.insertAdjacentHTML('beforeend', `
       <img src="./img/content/section_img/${item.url}" alt="">
        `)
})
const section5 = document.getElementById('section5');
state.section5.ul.forEach(item => {
    section5.insertAdjacentHTML('beforeend', `
        <li>${item}</li>
        `)
})
const footer = document.getElementById('footer');
state.footer.bud.forEach(item => {
    footer.insertAdjacentHTML('beforeend', `
        <li><a href="${item.link}">${item.text}</a></li>
        `)
})
const contact = document.getElementById('contact');
state.footer.contact.forEach(item => {
    contact.insertAdjacentHTML('afterbegin', `
        <a href="${item.url}"><img src="./img/icon/footer-icon/${item.link}" alt=""></a>
        `)
})

const sliderObject = {
    left:document.getElementsByClassName('left')[0],
    right:document.getElementsByClassName('right')[0],
    container:document.getElementsByClassName('container')[0],
    create(){
        this.container.innerHTML='';
        state.slider.forEach(item=>
            this.container.insertAdjacentHTML('beforeend',`
                 <img src="./img/content/slider-section/${item.url}" 
                 alt="" class="slids">
                
                `)
        )
    },
    render(){
        this.create();
        this.left.addEventListener('click',()=>{
            let e = state.slider.shift()
            state.slider.push(e)
            this.create()
        })
        this.right.addEventListener('click',()=>{
            let e = state.slider.pop()
            state.slider.unshift(e)
            this.create()
        })
    }
}
sliderObject.render()
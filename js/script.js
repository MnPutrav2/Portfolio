const text = document.getElementById("text-change")

setInterval(() => {
    text.innerText = "Web Programmer"

    setTimeout(() => {
        text.innerText = "Mobile Developer"
    }, 2000)

}, 4000)

let open = false
let scroll = window.scrollY

document.querySelector('body').onscroll = () => {
    if(window.scrollY < scroll){
        document.querySelector('.float-menu').style.transform = 'translateY(0rem)'
        document.querySelector('.float-menu').style.transition = 'all 0.5s ease-in'
    }else{
        document.querySelector('.float-menu').style.transform = 'translateY(10rem)'
        document.querySelector('.float-menu').style.transition = 'all 0.5s ease-in'
    }

    document.querySelectorAll('.ball').forEach((el) => {
        el.style.rotate = `${Math.round(window.scrollY)}deg`
    })
    
    document.querySelector('.jumbo-text-child').style.backgroundImage = `linear-gradient(${Math.round(window.scrollY - 100)}deg, red, cyan)`

    scroll = window.scrollY
}

const social = ['fb', 'ig', 'ln']

social.forEach((item) => {
    const x = document.getElementById(item)
    const y = document.querySelector(`.title-${item}`)
    const z = document.getElementById(`svg-${item}`)

    x.onmouseover = () => {
        y.style.transform = 'translateY(1rem)'
        y.style.opacity = '1'

        z.style.transform = 'translateY(-1rem)'
        z.style.fill = 'var(--font-color-secondary-4)'
    }

    x.onmouseout = () => {
        y.style.transform = 'translateY(0rem)'
        y.style.opacity = '0'

        z.style.transform = 'translateY(0rem)'
        z.style.fill = 'var(--font-color-secondary-3)'
    }
})

const code = ['html', 'css', 'ts', 'js', 'php', 'go']

code.forEach((item) => {
    const x = document.getElementById(item)
    const y = document.getElementById(`${item}-info`)

    x.onmouseover = () => {
        y.style.transform = 'translateY(-2rem)'
        y.style.opacity = '1'

        x.style.transform = 'translateY(1rem)'
    }

    x.onmouseout = () => {
        y.style.transform = 'translateY(0rem)'
        y.style.opacity = '0'

        x.style.transform = 'translateY(0rem)'
    }
})
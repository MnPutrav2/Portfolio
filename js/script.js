const text = document.getElementById("text-change")

// text change
function changeText(item) {
    item.forEach((c, index) => {
        setTimeout(() => {
            text.innerHTML = `<p>${c}</p>`
        }, index * 2000)
    })

    setInterval(() => {
        text.innerHTML = `<p>${item[1]}</p>`
        
        item.forEach((c, index) => {
            setTimeout(() => {
                text.innerHTML = `<p>${c}</p>`
            }, index * 2000)
        })

    }, item.length * 2000)
}

function showSkill(code) {
    code.forEach((item) => {
        const id = document.querySelector(".skill")
        const temp = `<div id="${item}" style="transition: all 0.2s linear;">
                        <div class="information" id="${item}-info">HTML</div>
                        <img id="${item}-img" src="assets/images/${item}.svg" alt="">
                    </div>`

        id.insertAdjacentHTML("beforeend", temp)

        const x = document.getElementById(item)
        const y = document.getElementById(`${item}-info`)
        const z = document.getElementById(`${item}-img`)

        x.onmouseover = () => {
            y.style.transform = 'translateY(-2rem)'
            y.style.opacity = '1'
            z.style.filter = 'drop-shadow(0px 0px 3px var(--glow))'

            x.style.transform = 'translateY(1rem)'
        }

        x.onmouseout = () => {
            y.style.transform = 'translateY(0rem)'
            y.style.opacity = '0'
            z.style.filter = 'none'

            x.style.transform = 'translateY(0rem)'
        }
    })
}

showSkill(['html', 'css', 'typescript', 'javascript', 'php', 'golang', 'python'])
changeText(["WEB Designer", "WEB Programmer", "Mobile DEV"])

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
        z.style.filter = 'drop-shadow(0px 0px 3px var(--glow))'
    }

    x.onmouseout = () => {
        y.style.transform = 'translateY(0rem)'
        y.style.opacity = '0'

        z.style.transform = 'translateY(0rem)'
        z.style.fill = 'var(--font-color-secondary-3)'
        z.style.filter = 'none'
    }
})

const projectContent = ['sdfdsfdf', 'bfgfgnnfgn', 'sdfsdfsd']
const project = document.getElementById('project-data')

projectContent.forEach((item, index) => {

    const v = index / 1
    let temp = ""

    if(v == 1){
        temp = `<div class="card-project">
                    <div class="left-box">
                        <div style="display: flex; justify-content: center; align-items: center;">
                            <div class="card">
                                <div class="img-box"></div>
                            </div>
                        </div>
                        <div class="title">${item}</div>
                    </div>
                </div>`
    }else{
        if(screen.width < 720){
            temp = `<div class="card-project">
                        <div class="right-box">
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div class="card">
                                    <div class="img-box"></div>
                                </div>
                            </div>
                            <div class="title">${item}</div>
                        </div>
                    </div>`
        }else{
            temp = `<div class="card-project">
                        <div class="right-box">
                            <div class="title">${item}</div>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div class="card">
                                    <div class="img-box"></div>
                                </div>
                            </div>
                        </div>
                    </div>`
        }
    }

    project.insertAdjacentHTML('beforeend', temp)

})

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

    document.querySelectorAll('.left-box').forEach((e) => {

        let x = 0

        if(screen.width < 720){
            x = window.scrollY / 50
        }else{
            x = window.scrollY / 20
        }

        if(x >= 300){
            e.style.transform = `translateX(-100px)`
        }else{
            e.style.transform = `translateX(-${x}px)`
        }
    })

    document.querySelectorAll('.right-box').forEach((e) => {
        
        let x = 0

        if(screen.width < 720){
            x = window.scrollY / 50
        }else{
            x = window.scrollY / 20
        }

        if(x >= 300){
            e.style.transform = `translateX(100px)`
        }else{
            e.style.transform = `translateX(${x}px)`
        }
    })
}
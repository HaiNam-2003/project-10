const inputLight = document.querySelector('#light')
const bodyLight = document.querySelector('body')
const boxLight = document.querySelectorAll('.them-change')
const boxs = document.querySelectorAll('.box')
const smallBoxs = document.querySelectorAll('.small-box')


inputLight.addEventListener('change', () => {
    bodyLight.classList.toggle('bodyColorChange')

    boxLight.forEach((box) => {
        box.classList.toggle('boxColorChange')
        
    })

    boxs.forEach(box => {
        if(box.classList.contains('boxColorChange')) {
            box.addEventListener('mouseover', () => {
                box.classList.add('hoverCardLightTheme')
            })
            box.addEventListener('mouseout', () => {
                box.classList.remove('hoverCardLightTheme')
            })
        } else {
            box.addEventListener('mouseover', () => {
                box.classList.add('hoverCardDarkTheme')
                box.classList.remove('hoverCardLightTheme')
            })
            box.addEventListener('mouseout', () => {
                // box.classList.remove('hoverCardLightTheme')
                box.classList.remove('hoverCardDarkTheme')
            })
        }
    })
    smallBoxs.forEach(smallBox => {
        if(smallBox.classList.contains('boxColorChange')) {
            smallBox.addEventListener('mouseover', () => {
                smallBox.classList.add('hoverCardLightTheme')
            })
            smallBox.addEventListener('mouseout', () => {
                smallBox.classList.remove('hoverCardLightTheme')
            })
        } else {
            smallBox.addEventListener('mouseover', () => {
                smallBox.classList.add('hoverCardDarkTheme')
                smallBox.classList.remove('hoverCardLightTheme')
            })
            smallBox.addEventListener('mouseout', () => {
                // box.classList.remove('hoverCardLightTheme')
                smallBox.classList.remove('hoverCardDarkTheme')
            })
        }
    })
})




// The Slider Object
const slider = document.getElementById('sliderX')
const slides = slider.children


const initialTransalte = (682 + 31)

// Left Most index in the slider
let currentIndex = 4



const animate = (currentIndex, instant = false) => {
    const leftElement = slides[currentIndex]
    const offset = leftElement.offsetLeft
    slider.style.transition = instant ? 'none' : 'transform 0.5s ease-in-out'
    slider.style.transform = 'translateX(' + (-offset) + 'px)'
}


// Left Slide
const slideLeft = () => {
    //for fast clicking
    if (currentIndex > 7)
        return

    animate(++currentIndex)
}

// Right Slide
const slideRight = () => {
    //for fast clicking 
    if (currentIndex <= 0)
        return
    animate(--currentIndex)
}


// Chcking for loop 
const transitionLoop = () => {
    if (currentIndex <= 0) {
        currentIndex = 7
        animate(currentIndex, true)

    } else if (currentIndex > 7) {
        currentIndex = 1
        animate(currentIndex, true)
    }
}

// Adding listeners
const addEventListeners = () => {
    const leftArrow = document.getElementById('left-arrow')
    const rightArrow = document.getElementById('right-arrow')
    leftArrow.addEventListener('click', slideLeft)
    rightArrow.addEventListener('click', slideRight)
    slider.addEventListener('transitionend', transitionLoop)
}


const initPosition = () => {
    slider.style.transition = 'transform 0.5s ease-in-out'
    slider.style.transform = 'translateX(' + (-initialTransalte) + 'px)'
}


function main() {
    addEventListeners()
    initPosition()
}

main()
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container_slider')

left.addEventListener('mouseenter', () => {
    container.classList.add('in')
})
left.addEventListener('mouseleave', () => {
    container.classList.remove('in')
})
right.addEventListener('mouseenter', () => {
    container.classList.add('other')
})
right.addEventListener('mouseleave', () => {
    container.classList.remove('other')
})
const checkbox1 = document.getElementById('checkbox1')
const checkbox2 = document.getElementById('checkbox2')
const checkbox3 = document.getElementById('checkbox3')
const boxes = document.querySelectorAll('.bg')

checkbox1.addEventListener('change', () => {
    boxes.forEach((box) => {
        box.classList.toggle('border-1')

    })
})

checkbox2.addEventListener('change', () => {
    boxes.forEach((box) => {
        box.classList.toggle('border-2')

    })
})

checkbox3.addEventListener('change', () => {
    boxes.forEach((box) => {
        box.classList.toggle('border-3')

    })
})
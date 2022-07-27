// ====================================
let result = ''
const divbox = document.createElement('div')
divbox.classList.add('divbox')
const div = document.createElement('div')
div.classList.add('div')
const output = document.createElement('input')
output.classList.add('output')
output.value = result
output.disabled = true
const body = document.body
const btnWrapper = document.createElement('div')
btnWrapper.classList.add('btnWrapper')
body.append(divbox)
divbox.append(div)
div.append(output, btnWrapper)


const arr = [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '0', 'c', 'ac',
    '+', '*', '-', '/', '', '=',
]

const getBtnValue = (event) => {
    let num = event.target.value

    if (num == 'c') {
        result = result.substring(0, result.length - 1)
    } else if (num == 'ac') {
        result = ''
    } else if (num == '=') {
        result = eval(result)
    } else {
        result += num
    }


    output.value = result
}
arr.forEach(element => {
    const btn = document.createElement('input')
    btn.classList.add('btn')
    btn.type = 'button'
    btn.value = element
    btn.addEventListener('click', getBtnValue)
    btnWrapper.append(btn)
});





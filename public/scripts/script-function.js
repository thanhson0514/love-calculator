// function show result
const showResult = (result) => {
    const div = document.createElement('div')
    const firstH3 = document.createElement('h3')
    const secondH3 = document.createElement('h3')
    firstH3.textContent = `${result.percentage}%`
    secondH3.textContent = result.result
    div.appendChild(firstH3)
    div.appendChild(secondH3)
    div.style.backgroundColor = style.backgroundColor
    div.style.color = style.color
    div.style.textAlign = style.textAlign
    div.style.padding = '10px'

    return div
}

// fumction loading result
const move = (result) => {
    document.querySelector('#myProgress').style.width = '100%'
    document.querySelector('#myProgress').style.height = '30px'
    document.querySelector('#myProgress').style.position = 'relative'
    document.querySelector('#myProgress').style.backgroundColor = 'white'
    document.querySelector('#myBar').style.backgroundColor = '#4CAF50'
    document.querySelector('#myBar').style.width = '10px'
    document.querySelector('#myBar').style.height = '30px'
    document.querySelector('#myBar').style.position = 'absolute'
    const elem = document.getElementById("myBar");
    let width = 0;
    let id = setInterval(() => {
        if (width === 100) {
            clearInterval(id);
            document.querySelector('#myProgress').style.display = 'none'
            document.querySelector('.show').appendChild(showResult(result))
            document.querySelector('#your-name').value = ''
            document.querySelector('#name-crush').value = ''

        } else {
            width++
            elem.style.width = width + '%'
        }
    }, 30)
}
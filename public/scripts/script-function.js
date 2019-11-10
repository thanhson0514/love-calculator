// function show result
const showResult = (result) => {
    const button = document.createElement('button')
    const div = document.createElement('div')
    const firstH3 = document.createElement('h3')
    const secondH3 = document.createElement('h3')

    // setting the button 
    button.setAttribute('class', 'buttonReload')
    button.style.padding = '10px'
    button.style.width = '10%'
    button.style.backgroundColor = '#fd151f'
    button.style.color = 'aliceblue'


    // create button reload page
    button.textContent = 'Again'
    firstH3.textContent = `${result.percentage}%`
    secondH3.textContent = result.result

    div.appendChild(firstH3)
    div.appendChild(secondH3)
    div.appendChild(button)

    // add style for threme
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

    // setting the time to effect loading
    const elem = document.getElementById("myBar");
    let width = 0;
    let id = setInterval(() => {
        if (width === 100) {
            clearInterval(id);
            // hidden loading
            document.querySelector('#myProgress').style.display = 'none'

            // show result
            document.querySelector('.show').appendChild(showResult(result))

            // call function to reload page
            reloadPage()

            // hidden box text input
            document.querySelector('.input-information').style.display = 'none'

            // return value = null 
            document.querySelector('#your-name').value = ''
            document.querySelector('#name-crush').value = ''

        } else {
            width++
            elem.style.width = width + '%'
        }
    }, 30)
}

const reloadPage = () => {
    document.querySelector('.buttonReload').addEventListener('click', () => window.location.reload(true))
}
const button = document.querySelector('#result');
const style = {
    backgroundColor: 'darkorchid',
    color: 'aliceblue',
    textAlign: 'center'

}

button.addEventListener('click', async() => {
    //Get value form input
    const name1 = document.querySelector('#your-name').value;
    const name2 = document.querySelector("#name-crush").value;
    console.log(name1, name2);
    //Call server, use library api
    const result = await fetch(
        `https://love-calculator.p.rapidapi.com/getPercentage?sname=${name1}&fname=${name2}`, {
            headers: {
                "x-rapidapi-host": "love-calculator.p.rapidapi.com",
                "x-rapidapi-key": "d890761ca0msh68ff774a2a619fbp13b6f3jsnf309044568b5"
            }
        }
    ).then((response) => {
        return response.json();
    });
    console.log(result);
    //Show result on screen
    move(result)
});
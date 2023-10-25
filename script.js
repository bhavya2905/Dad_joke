const jokeEl = document.getElementById('joke')
const btn = document.getElementById('jokeBtn')

btn.addEventListener('click', generateJoke)

generateJoke()

//USING async-await

async function generateJoke() {
    const config = {
        headers: {
            Accept : 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke
}

//USING .then

// function generateJoke() {
//     const config = {
//         headers : {
//             'Accept' : 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//         joke.innerHTML = data.joke
//     } )
// }
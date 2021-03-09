console.log('Client side javascript')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg-1')
const msg2 = document.querySelector('#msg-2')


// msg1.textContent = 'From javacsript'


fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data)=>{
        console.log(data)
    })
})

fetch('http://localhost:3000/weather?address=boston').then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
        }
        else{
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    msg1.textContent='Loading...'
    msg2.textContent=''

    fetch('http://localhost:3000/weather?address'+location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            msg1.textContent=data.error
            // console.log(data.error)

        }
        else{
            // console.log(data.location)
            // console.log(data.forecast)
            msg1.textContent = data.location
            msg2.textContent = data.forecast
        }
    })
})
    
})
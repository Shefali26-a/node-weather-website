//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request = require('request')

const forecast = (latitude,longitude,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=4eb6cb05faa40de2ff974f2621c38d53&query='+latitude+','+longitude+'&units=f'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to fetch weather info',undefined)
        }
        else if(response.body.error){
            callback('Unable to find location',undefined)
        }
        else{
            callback(undefined,{
                latitude:response.body.location.lat,
                longitude:response.body.location.lon
            })
        }
    })
}

module.exports=forecast
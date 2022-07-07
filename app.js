/* const request = require('request')

const url = 'https://api.weatherapi.com/v1/current.json?key=be05b93293f7459eaa672328220607&q=30.05,31.25'

request({url,json:true},(error,response)=>{
    console.log(response.body)

    if(error){
        console.log('error has occear')

    }else if (response.body.error){
        console.log(response.body.error.message)
    }else{
        console.log('in ' + response.body.location.name + " it is now " + response.body.current.temp_c)
    }
    
    console.log(response.body.location.name)
}) */

// const request = require('request')

// const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiZmFyYWgxMjMiLCJhIjoiY2tpb3ZrNnE4MDB0cjJ0cDlzZXZ5eHQ5dSJ9.F6mgRF14yRJ6WN9JqtpWtw'

// request({url:geoCodeUrl,json:true},(error,response)=>{
//     // console.log(response.body)

//     if(error){
//         console.log('error has occear')

//     }else if (response.body.message){
//         console.log(response.body.message)

//     }else if (response.body.features.length === 0){
//         console.log('your search is wrong')

//     }else{
//         const lat  = response.body.features[0].center[0];
//         const long = response.body.features[0].center[1]
//         console.log(lat +' '+ long)
//     }
    
// })

// const forcast = (lat,long,callback) =>{
//     const url = 'https://api.weatherapi.com/v1/current.json?key=be05b93293f7459eaa672328220607&q='+lat+','+long

// request({url,json:true},(error,response)=>{
//     // console.log(response.body)

//     if(error){
//         callback('unable to connect weather surface',undefined)

//     }else if (response.body.error){
//         callback('unable to find location ',undefined)

//     }else{
//         callback(undefined, response.body.current.condition.text + " it is now " + response.body.current.temp_c)
//     }
    
//     console.log(response.body.location.name)
// })
// }
// forcast(30.05,31.25 ,(error,data)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })
// const geocode = (address,callback)=>{
//     const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiZmFyYWgxMjMiLCJhIjoiY2tpb3ZrNnE4MDB0cjJ0cDlzZXZ5eHQ5dSJ9.F6mgRF14yRJ6WN9JqtpWtw"

// request({url:geoCodeUrl,json:true},(error,response)=>{
//     // console.log(response.body)

//     if(error){
//         callback('error has occear',undefined)

//     }else if (response.body.message){
//         callback(response.body.message,undefined)

//     }else if (response.body.features.length === 0){
//         callback('your search is wrong',undefined)

//     }else{
//         const lat  = response.body.features[0].center[0];
//         const long = response.body.features[0].center[1]
//         callback(undefined, lat +' '+ long)
//     }
    
// })
// }
const geocode = require('./tools/geocode')
const forcast = require('./tools/forcast')


//      geocode('egypt',(error,data)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(data)
//         forcast(data.lat,data.long, (error,data)=>{
//             if(error){
//                 console.log(error)
//             }
//             else{
//                 console.log(data)
//             }
//         })
//     }
//     })
    /////////////////
    geocode(process.argv[2],(error,data)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log(data)
            forcast(data.lat,data.long, (error,data)=>{
                if(error){
                    console.log(error)
                }
                else{
                    console.log(data)
                }
            })
        }
    })
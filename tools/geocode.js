const request = require('request')
const geocode = (address,callback)=>{
    const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiZmFyYWgxMjMiLCJhIjoiY2tpb3ZrNnE4MDB0cjJ0cDlzZXZ5eHQ5dSJ9.F6mgRF14yRJ6WN9JqtpWtw"

request({url:geoCodeUrl,json:true},(error,response)=>{
    // console.log(response.body)

    if(error){
        callback('error has occear',undefined)

    }else if (response.body.message){
        callback(response.body.message,undefined)

    }else if (response.body.features.length === 0){
        callback('your search is wrong',undefined)

    }else{
        
        callback(undefined,{
            lat:response.body.features[0].center[1],
            long:response.body.features[0].center[0]
        })
    }
    
})
}
module.exports = geocode
const request = require('request')
const forcast = (lat,long,callback) =>{
        const url = 'https://api.weatherapi.com/v1/current.json?key=be05b93293f7459eaa672328220607&q='+lat+','+long
    
    request({url,json:true},(error,response)=>{
        // console.log(response.body)
    
        if(error){
            callback('unable to connect weather surface',undefined)
    
        }else if (response.body.error){
            callback('unable to find location ',undefined)
    
        }else{
            callback(undefined, response.body.current.condition.text + " it is now " + response.body.current.temp_c)
        }
        
       // console.log(response.body.location.name)
    })
    }
     module.exports = forcast
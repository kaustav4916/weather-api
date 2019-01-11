const request= require('request');

var getWeather = (lat,lng,callback) =>{
	request({
	url: `https://api.darksky.net/forecast/5045dd7bc5514f28f160191b39bb0726/${lat},${lng}`,
	json:true
},(error,response,body) =>{
	if(error){
		callback('Unable to connect to Forecast.io servers')
	}else if(response.statusCode ===400){
		callback('Unable to connect to Forecast.io server.')
	}else if (response.statusCode ===200){
	    callback(undefined,{
	    	temperature: body.currently.temperature,
	    	apparentTemperature:body.currently.apparentTemperature
	    });
}
});
};
module.exports.getWeather =getWeather;
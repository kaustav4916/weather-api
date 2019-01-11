var asncAdd =(a,b) =>{
	return new Promise((resolve,reject) =>{
		setTimeout(()=>{
         if (typeof a ==='number' && typeof b ==='number') {
         	resolve(a+b);
         }else{
         	reject('Argument must be number');
         }
		},1500);
	});
};
asncAdd(5,'7').then((res) =>{
	console.log('Result:',res);
	return asncAdd(res,33);

},(errorMessage) =>{
	console.log(errorMessage);
}).then((res) =>{
	console.log('Should be 45',res);

}).catch((errorMessage) =>{
	console.log(errorMessage);
});
/*var somePromise =new Promise((resolve,reject) =>{
	resolve('Hey. It worked');
});
somePromise.then((message)=>{
	console.log('Success:',message);

},(errorMessage) =>{
	console.log('Error:',errorMessage);
});*/
module.exports = function(obj, res) {
	var isError = false;
	var errorMessage = '';
	if(typeof obj === 'object') {
		if(!obj.hasOwnProperty('name') || (typeof obj.name !== 'string') || (obj.name.trim()==='')){
			isError= true;
			errorMessage += 'error in name property. ';
		}

		if(!obj.hasOwnProperty('hotelName') || (typeof obj.hotelName !== 'string') || (obj.hotelName.trim()==='')){
			isError= true;
			errorMessage += 'error in hotelName property. ';
		}

		if(!obj.hasOwnProperty('arrivalDate') || (typeof obj.arrivalDate !== 'string') || (obj.arrivalDate.trim()==='') || (new Date(obj.arrivalDate)=='Invalid Date')){
			isError= true;
			errorMessage += 'error in arrivalDate property. ';
		}

		if(!obj.hasOwnProperty('departureDate') || (typeof obj.departureDate !== 'string') || (obj.departureDate.trim()==='')|| (new Date(obj.departureDate)=='Invalid Date')){
			isError= true;
			errorMessage += 'error in departureDate property. ';
		}

		if(!isError) {
			if(
				(new Date(obj.arrivalDate)).getTime()>= 
				(new Date(obj.departureDate)).getTime()
			){
				isError= true;
				errorMessage += 'error in arrivalDate is greater than or equal to departureDate. ';
			}
		} 

	} else {
		isError= true;
		errorMessage = 'format error when posting. ';
	}
	if(isError){
		res.status(400).send(errorMessage);
	}

	return {
		isError : isError,
		errorMessage : errorMessage
	}
};
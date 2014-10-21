

model.Organization.fullAddress.onGet = function() {
	// Add your code here;
	if (this.address2 === null) {
	   return this.address1 + ', ' + this.city + ', ' + this.state ;
	}
	else {
		
	   return this.address1 + ' ' + this.address2 + ', ' + this.city + ', ' + this.state ;
    }
};

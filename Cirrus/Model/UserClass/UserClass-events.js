

model.UserClass.events.onInit = function() {
	// Add your code here;
  //var myTenentId;
  //myTenentId = ds.UserClass.all().max('tenentId');
    
  //myTenentId = myTenentId + 1;
  
  this.userRole = "SubAdmin";
  this.tenentId = generateUUID();
  //this.tenentId = myTenentId;
  //this.carrier.carrierID = 6;
  //console.log("userClass Init");
	
};



model.UserClass.events.onSave = function() {
	// Add your code here;
	if (this.userName != null){
	  this.userPassword = directory.computeHA1(this.userName , this.userPassword);
	  };
};

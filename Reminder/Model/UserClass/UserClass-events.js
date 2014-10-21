

model.UserClass.events.onInit = function() {
	// Add your code here;
  //var myTenentId;
  //myTenentId = ds.UserClass.all().max('tenentId');
    
  //myTenentId = myTenentId + 1;
  
  //this.userRole = "SubAdmin";
  var vSession ;
  vSession = ds.UserClass.getSessionInfo('tenentId');
  this.tenentId = vSession;
  //this.tenentId = myTenentId;
  //this.carrier.carrierID = 6;
  //console.log("userClass Init");
	
};








model.UserClass.events.onSave = function() {
	// Add your code here;
	var testVar;
	testVar = 'a';
};

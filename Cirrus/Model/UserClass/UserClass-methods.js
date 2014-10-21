

model.UserClass.methods.getCurrentSession = function() {
	// Add your code here;
	return currentSession();
};
model.UserClass.methods.getCurrentSession.scope = "public";
	

model.UserClass.methods.setSessionInfo = function(name, nameValue) {
	// Add your code here;
	sessionStorage.lock();
	sessionStorage[name] = nameValue;
	sessionStorage.unlock();
	
};
model.UserClass.methods.setSessionInfo.scope = "public";



model.UserClass.methods.getSessionInfo = function(name) {
	// Add your code here;
    return sessionStorage[name];
};
model.UserClass.methods.getSessionInfo.scope = "public";




model.Organization.methods.getCurrentSession = function() {
	// Add your code here;
	return currentSession();
};
model.Organization.methods.getCurrentSession.scope = "public";

model.Organization.methods.getSessionInfo = function(name) {
	// Add your code here;
	return sessionStorage[name];
};
model.Organization.methods.getSessionInfo.scope = "public";
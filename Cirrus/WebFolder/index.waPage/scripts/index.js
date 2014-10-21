
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var imageButton2 = {};	// @buttonImage
	var imageButton1 = {};	// @buttonImage
	var login2 = {};	// @login
	var button3 = {};	// @button
	var documentEvent = {};	// @document
	var button2 = {};	// @button
	var menuItem2 = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	imageButton2.click = function imageButton2_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	login2.logout = function login2_logout (event)// @startlock
	{// @endlock
		// Add your code here
		$$('menuItem2').show();
		$$('menuItem3').hide();
		$$('menuItem5').hide();
		varSession = '0';
		$$('imageButton1').setURL('http://localhost:8082/index.waPage/index.html/?tenentId=' + varSession);
		$$('imageButton2').disable();
	};// @lock

	login2.login = function login2_login (event)// @startlock
	{// @endlock
		// Add your code here
		//alert('login ');
		// get group from session 
		var curSession = waf.sources.userClass.getCurrentSession();
		varSession = curSession.storage.tenentId;
		$$('imageButton1').setURL('http://localhost:8082/index.waPage/index.html/?tenentId=' + varSession);
		$$('imageButton2').setURL('http://localhost:8083/index.waPage/index.html/?tenentId=' + varSession);
		$$('imageButton2').enable();
		//alert(waf.widgets.imageButton1.URL);
		//alert(varSession);
		// save data in sessionstorage
		//WAF.sources.setSessionInfo('tenentID', curSession.storage.tenentId);
		
		var inGroup = curSession.belongsTo('Admin');
		if (inGroup) {
			$$('menuItem3').show();
		    $$('menuItem5').show();
		}; 
		inGroup = curSession.belongsTo('SubAdmin');
		if (inGroup) {
			$$('menuItem2').hide();
			$$('menuItem3').hide();
		    $$('menuItem5').hide();
		}; 
		inGroup = curSession.belongsTo('User');
		if (inGroup) {
			$$('menuItem2').hide();
			$$('menuItem3').hide();
		    $$('menuItem5').hide();
		}; 
		inGroup = curSession.belongsTo('Guest');
		if (inGroup) {
			$$('menuItem2').show();
			$$('menuItem3').hide();
		    $$('menuItem5').hide();
		}; 
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		// Add your code here
		waf.sources.userClass.removeCurrent();
		$$('tabView1').selectTab(1);
		$$('richText6').setValue("Please login or register.");
		
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// Add your code here
		//$$('tabView1').hideTab(2);
		$$('menuItem3').hide();
		$$('menuItem5').hide();
		$$('richText6').setValue("Please login or register.");
		
		var curSession = WAF.sources.userClass.getCurrentSession();
		//alert('on load');
		//alert(curSession.user.name);
		if (curSession.user.name === "default guest" ) {			
		   varSession = "0";
		   $$('imageButton2').disable();
		}
		else {  
		   varSession = curSession.storage.tenentId;
		    $$('imageButton2').enable();
           
       	}
       	//$$('imageButton2').refresh;
       	//alert(varSession);
		$$('imageButton1').setURL("http://localhost:8082/index.waPage/index.html/?tenentId=" + varSession);
		$$('imageButton2').setURL("http://localhost:8083/index.waPage/index.html/?tenentId=" + varSession);
				
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		// Add your code here
		// hash username and password
		//$$('textField3').setValue(directory.computeHA1($$('textField2').getValue(), $$('textField3').getValue()));
		//alert('here');
		
		waf.sources.userClass.save({
			onSuccess : function(event) {
				//$$('richText6').setValue('User information saved.');
				$$('richText6').setValue("Please login or register.");
				$$('tabView1').selectTab(1);
				//if (waf.sources.userClass.getPosition() == -1) {
				//	waf.sources.userClass.addEntity(waf.sources.userClass.getCurrentElement());
			}
		});
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		// Add your code here
		waf.sources.userClass.addNewElement();
        waf.sources.userClass.serverRefresh({
            onSuccess: function(event) {
                  $$('richText6').setValue('Added new registration'); //$$('messageText').setvalue("add new user");
            }
        }); 
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("login2", "logout", login2.logout, "WAF");
	WAF.addListener("login2", "login", login2.login, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
// @endregion
};// @endlock

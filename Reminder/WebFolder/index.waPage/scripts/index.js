
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var button3 = {};	// @button
	var documentEvent = {};	// @document
	var menuItem2 = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		// Add your code here
		waf.sources.userClass.removeCurrent();
		$$('menuItem1').show();
		$$('tabView1').selectTab(1);
		$$('richText6').setValue("User not created.");
		
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		// Add your code here
		alert('save userClass');
		
		waf.sources.userClass.save({
			onSuccess : function(event) {
				//$$('richText6').setValue('User information saved.');
				$$('richText6').setValue("User has been saved");
				//$$('tabView1').selectTab(1);
				//if (waf.sources.userClass.getPosition() == -1) {
				//	waf.sources.userClass.addEntity(waf.sources.userClass.getCurrentElement());
			}
		});
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// Add your code here
		var uQuery = window.location.search;
		varSession = uQuery.substr(10);
		
		//alert(varSession);
		if (varSession.length > 1) {
			$$('menuItem4').show();
		}
		else{
			$$('menuItem4').hide();
		}
		// save tenent id to session storage so it is available on server
		alert('on load');
		waf.sources.userClass.setSessionInfo('tenentId',varSession);
		waf.sources.userClass.all();
		// if no user exists force the tab to user class update
		$$('richText6').setValue("userId is not null");
		if (waf.sources.userClass.userId === null) {
			$$('menuItem4').hide();
			$$('menuItem5').hide();
			$$('richText6').setValue("Please complete your user information.");
			
		}
		
		//$$('tabView1').hideTab(2);
		/*
		$$('menuItem3').hide();
		$$('menuItem4').hide();
		$$('menuItem5').hide();
		$$('richText6').setValue("");
		
		var curSession = WAF.sources.userClass.getCurrentSession();
		//alert('on load');
		//alert(curSession.user.name);
		if (curSession.user.name === "default guest" ) {			
		   varSession = "0";
		}
		else {  
		   varSession = curSession.storage.tenentId;
           
       	}
       	*/
       	//alert(varSession);
		//$$('imageButton1').setURL("http://localhost:8082/index.waPage/index.html/?tenentId=" + varSession);
				
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		// Add your code here

		waf.sources.userClass.addNewElement();
        waf.sources.userClass.serverRefresh({
            onSuccess: function(event) {
                  $$('richText6').setValue('Please complete your user information.') //$$('messageText').setvalue("add new user");
            }
        }); 
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
// @endregion
};// @endlock

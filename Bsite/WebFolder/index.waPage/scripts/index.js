
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button8 = {};	// @button
	var button7 = {};	// @button
	var button6 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	button8.click = function button8_click (event)// @startlock
	{// @endlock
		// Add your code here
		var xhr=new XMLHttpRequest(); 
        //Create an empty FormData object
   	    var formdata=new FormData(); 
        //Fill the formdata object using the mail datasource values
        formdata.append('From',email.emailFrom); 
        formdata.append('To',email.emailTo);
        formdata.append('Pass',email.emailPassword);
        formdata.append('Title',email.emailTitle);
        formdata.append('Content',email.emailMessage);
 
        //Add a listener to read the response of the handler (server side)
        xhr.addEventListener("load", function (evt) {
        switch(evt.target.responseText){
            case 'true' :
                $$('message').setValue('Your message has been sent');
                $$('message').$domNode.css({
                    color : 'green'
                });
                break;
        //If the sendMail function response is true, 
        //then a green message will be displayed in the 
        //message dialog
 
            case 'false' :
                $$('message').setValue('Your message has not been sent');
                $$('message').$domNode.css({
                    color : 'red'
                });
                break;
        //If the sendMail function response is false,
        //then a red message will be displayed on the message
        //dialog
            }
            $$('dialog1').displayDialog();
         }, false); 
 
        xhr.open('POST','/sendMail',true); //call the sendMail handler
        xhr.send(formdata); //Send the formdata object to the handler on the server
	};// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog(); //ok button
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog(); //cancel button
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		// Add your code here
		imageIndex = slideShow(imageIndex, "-");
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		
		imageIndex = slideShow(imageIndex, "+");
	};// @lock
function slideShow( p1, p2 ) {
	if (p2 == "+") {
	  p1 = p1 + 1;
	}
	else {
		p1 = p1 - 1;
	}  
	//alert(p1);
	
	if (p1 > 5) {
		p1 = 1;
	} 
	if (p1 < 1 ) {
		p1 = 5;
	} 
	$$('image3').setValue("/images/M" + p1 + "image.jpg");
	return p1;	
	
}


	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// Add your code here
		// check to see if a user session exists
		// if yes display the admin tab else hide it
		
		//alert(document.URL);
		//alert(window.location.search);
		var uQuery = window.location.search;
		varSession = uQuery.substr(10);
		
		//alert(varSession);
		if (varSession.length > 1) {
			$$('menuItem4').show();
		}
		else{
			$$('menuItem4').hide();
		}
		
		//var curUser = curSession.
		//if (WAF.directory.currentUser() === null)	{
		//	alert ("no user");
		//}
		//else {
		//    alert (WAF.directory.currentUser());
	    //}
		imageIndex = 0;
		imageIndex = slideShow(imageIndex, "+");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button8", "click", button8.click, "WAF");
	WAF.addListener("button7", "click", button7.click, "WAF");
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock

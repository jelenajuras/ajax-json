var handleNavbar = function (element) {
	$(window).scroll(function(){              //event
		if($(window).scrollTop() > 100){
			$(element).css({
				'padding-top': 0,
				'padding-bottom': 0,
				'background-color': '#fff'
				});
				$(element + " a").css('color','#111')
		} else {
			//brži naèin  $(element).removeAttr('style');
			$(element).css({
				'padding-top': "3rem",
				'padding-bottom': "3rem",
				'background-color': 'transparent'
				});
				$(element + " a").css('color','#3b4861')
		}
	});		   
}

var App = function () {
    return {
        init: function (element){
			handleNavbar(element);
        },
    }
}(); 


//append - dodaje na kraj
//prepend - dodaje na poèetak
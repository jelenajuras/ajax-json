var handleContent = function () {
	var preloader = $('.preloader');
	var ayaxLoader = '<img class="ajax-loader" src="/img/ajax-loader.gif" />';
	
	$('.btn').click(function(e){
		e.preventDefault();
		
		$.ajax({
			url: "data/user.json",
			type: "GET",
			data: {"id": 1},
			beforeSend: function(){
				preloader.empty();
				preloader.append(ayaxLoader);
			},
			success: function(result, status, xhr){
				//console.log(result);
			},
			error:function(xhr, status, error){
				if(error){
					preloader.empty();
					preloader.text("An error occured while poccessing your requesr! Please try again later!");
					setTimeout(function() {
						preloader.empty();
					},5000);
				}
			},
			complete: function(result){
				preloader.empty();
				console.log(result.responseJSON);
				
				var text;
				for (x in result.responseJSON) {
					text = "<tr><td>" + resutl.[x]["id"] + "</td>";
					text += "<td>" + resutl.[x]["name"] + "</td>";
					text += "<td>" + resutl.[x]["username"] + "</td>";
					text += "<td>" + resutl.[x]["email"] + "</td></tr>";
					$(".tbody").append(text);
					console.log(text);
				};
				
				
			}
		});
	});
};

var App = function () {
    return {
        init: function (element){
			handleContent();
        },
    }
}(); 


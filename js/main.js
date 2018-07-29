$('.carousel').carousel({
  interval: 10000
})

$(document).ready(function () {
  $("#thumbnail-preview-indicators").carousel({
    interval: false
  });
});



$('.nav-item a').each(function () { 
        var location = window.location.href; 
        var link = this.href;  
        if(location == link) { 
            $(this).addClass('active');
			$(this).closest('.dropdown').addClass('active');
        }
	
    });



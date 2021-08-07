$(document).ready(function() {

	$('#slides').superslides({
		animation:'fade',
		play:5000,
		pagination:false
	});

	var typed = new Typed(".typed", {
		strings:["MTECH (Computer Software).", "Software Developer.", "Web Designer.", "Graphic Designer"],
		typeSpeed:70,
		loop:true,
		startDelay:1000,
		showCursor:false
	});

	$('.owl-carousel').owlCarousel({
    loop:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
        	items:4
        }
    }
});
	$('.chart').easyPieChart({
            //animate:'10000',
            //barColor:'#fff',
            //trackColor: '#696969',
            scaleLength: 0,
            lineWidth:4,
            size:152,
           onStep:function(from,to,percent){
            $(this.el).find('.percent').text(Math.round(percent));
            }
        });

	
});

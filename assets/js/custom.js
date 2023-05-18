/* 
Custom Javascript using jQuery
*/

$(document).ready(function(){
    /* memberi effect pada header ( menu ) */
	$(window).scroll(function(){
		if( $(window).scrollTop() > 100 ) {
			$("header").addClass("fixed animate__animated animate__fadeInDown");
		} else {
			$("header").removeClass("fixed animate__fadeInDown");
		}
	});


    /* Menu Active */
    $("header ul li a").click(function(){
        /* Hilangkan Class active */
        $("header ul li.active").removeClass("active");

        /* menambahkan class Active */
        $(this).parent().addClass("active");
    });
});


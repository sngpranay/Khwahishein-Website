/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

/* $(document).ready(function(){ */


/* --------------------scroll down------------------------------ */
/* jQuery.fn.extend({
  scrollTo : function(speed, easing) {
    return this.each(function() {
      var targetOffset = $(this).offset().top;
      $('html,body').animate({scrollTop: targetOffset}, speed, easing);
    });
  }
});
 */
// Scroll to "about" section
/* $('#about').scrollTo('fast', 'linear');


	
$('.one').click(function(){
    var $this = $(this),
        $next = $this.parent().next();

    $next.scrollTo($next.offset().top, 500, 'linear');
});

$('.prev-section').click(function(){
    var $this = $(this),
        $prev = $this.parent().prev();

    $prev.scrollTo($prev.offset().top, 500, 'linear');
});
	
	
 */
	
	
	
	
	
$(function() {
	
	$('#alertMe').click(function(e) {
		
		e.preventDefault();
		
		$('#successAlert').slideDown();
		
	});
	
	$('a.pop').click(function(e) {
		e.preventDefault();
	});
	
	$('a.pop').popover();
	
	$('[rel="tooltip"]').tooltip();
	
	
});
		
	
	
	
/* ---------------------------------------------------------------------	 */
	








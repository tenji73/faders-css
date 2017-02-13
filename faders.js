/*!  
faders.js
licensed under the MIT license - http://opensource.org/licenses/MIT
copyright (c) 2015 tom anyz
*/
$(function () 
{
	var addFader = function(obj)
	{
		var preg = $(obj).attr('class').match(/fadeDelay-([0-9]*)/);
		var delay = preg ? parseInt(preg[1]) : 10;
		setTimeout(function(){  $(obj).addClass("animation-end"); } ,delay);
	}

	$('.fadeOnLoad').each(function()
	{
		addFader(this);	 
	});

	$(window).scroll(function() {
		$('[class^="fadeFrom"]').each(function()
		{
			if ($(this).offset().top < $(window).scrollTop() + $(window).height() * .9 && !$(this).attr('class').match(/animation-end/) ) 
			{
				addFader(this);
			}
		});
	});
});
/*!  
faders.js
licensed under the MIT license - http://opensource.org/licenses/MIT
copyright (c) 2015 tom anyz
*/
$(window).scroll(function() {
	$('[class^="fadeFrom"]').each(function()
	{
		if ($(this).offset().top < $(window).scrollTop() + $(window).height() * .9 ) 
		{
			$(this).addClass("animation-end");
		}
	});
});
if (window.innerWidth && window.innerWidth <= 480) { 
    $(document).ready(function(){  
		$('nav ul').addClass('hide');
        $('nav').prepend('<div id="menuButton" onclick="toggleMenu()">Menu</div>'); 
    });
    function toggleMenu() { 
        $('nav ul').toggleClass('hide'); 
        $('#menuButton').toggleClass('pressed'); 
    }
}
if (window.innerWidth && window.innerWidth <= 480) { 
    $(document).ready(function(){  
	    $('nav ul').addClass('hide'); 
    
        $('nav ul').prepend('<li id="menuButton" onclick="toggleMenu()">Navigation Menu</li>'); 
    });
    function toggleMenu() { 
        $('nav ul li').toggleClass('hide'); 
        $('#menuButton').toggleClass('pressed');
		
    }
}
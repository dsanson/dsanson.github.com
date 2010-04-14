if (window.innerWidth && window.innerWidth <= 480) { 
    $(document).ready(function(){ 
        $('nav ul').addClass('hide'); 
        $('header').append('<div id="menuButton" onclick="toggleMenu()"><div id="buttonBackground">MENU</div></div>'); 
    });
    function toggleMenu() { 
        $('nav ul').toggleClass('hide'); 
        $('#buttonBackground').toggleClass('pressed'); 
    }
}
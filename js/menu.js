 (function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
	}
    if ( ! window.requestAnimationFrame ) {
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
			timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	}

	if ( ! window.cancelAnimationFrame ) {
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	}
}());


(function(w,d,undefined){
 
    var el_html = d.documentElement,
	el_body = d.getElementsByTagName('body')[0],
	header = d.getElementById('header'),
	menuIsStuck = function() {
        var wScrollTop	= w.pageYOffset || el_body.scrollTop,
        regexp		= /(nav\-is\-stuck)/i,
        classFound	= el_html.className.match( regexp ),
        navHeight	= header.offsetHeight,
        bodyRect	= el_body.getBoundingClientRect(),
        scrollValue	= 600;
     
    // si le scroll est d'au moins 600 et
    // la class nav-is-stuck n'existe pas sur HTML
    if ( wScrollTop > scrollValue && !classFound ) {
        el_html.className = el_html.className + ' nav-is-stuck';
        el_body.style.paddingTop = navHeight + 'px';
    }
     
    // si le scroll est inférieur à 2 et
    // la class nav-is-stuck existe
    if ( wScrollTop < 2 && classFound ) {
        el_html.className = el_html.className.replace( regexp, '' );
        el_body.style.paddingTop = '0';
    }	
},
	onScrolling = function() {
		// on exécute notre fonction menuIsStuck()
		// dans la fonction onScrolling()
		menuIsStuck();
		// on pourrait faire plein d'autres choses ici 
	};
 
// quand on scroll
w.addEventListener('scroll', function(){
	// on exécute la fonction onScrolling()
	w.requestAnimationFrame( onScrolling );
});
 
}(window, document));



 
    //Apparition du button s'inscrire au scroll dans la bar de nav
    const nav = document.getElementById('blue');
    const navLogo = document.getElementById('logo');
    const navMobile = document.getElementById('blueMobile');
    
    document.addEventListener('scroll',() => {
        let windowY = window.scrollY;
            console.log(windowY);
            console.log(window.innerHeigth);
        if (windowY > 500) {
            // Scrolling UP
            nav.classList.add('visible');
            nav.classList.remove('hidden');
            navLogo.classList.add('visible');
            navLogo.classList.remove('hidden');
            navMobile.classList.add('visible');
            navMobile.classList.remove('hidden');
        } else {
            // Scrolling DOWN
            nav.classList.add('hidden');
            nav.classList.remove('visible');
            navLogo.classList.add('hidden');
            navLogo.classList.remove('visible');
            navMobile.classList.add('hidden');
            navMobile.classList.remove('visible');
        };
    
    });

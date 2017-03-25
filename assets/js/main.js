$(document).ready(function() {
	// Varibles
	var mainHeader = $(".header");
	var mainNav = $('.menu');

	// Trigger Menu
	$('.menu-trigger').click(function(){
		$(this).toggleClass('menu-trigger--open');
		mainHeader.toggleClass('header--open');
	});


	// Trigger Share Button
	$('.share-button__trigger').click(function(){
		$('.share-button').toggleClass('share-button--open');
	});


	// Header will have its color in scroll
	$(window).scroll(function(){
		headerTransparent();
	});

	function headerTransparent() {
		var offset = 200;

		if( $(window).scrollTop() > offset && mainHeader.hasClass('header--transparent')) {
			mainHeader.removeClass('header--transparent');
			mainHeader.addClass('header--with-colors');

		} else if ( $(window).scrollTop() <= offset && mainHeader.hasClass('header--with-colors')) {
			mainHeader.addClass('header--transparent');
			mainHeader.removeClass('header--with-colors');
		}
   }


	// Detect the screen size, and change the background for Post
	var minWidthSmall = window.matchMedia('(min-width: 768px)');

	var postBgMobile = $('[data-post-bg-mobile]');
	var postBgDesktop = $('[data-post-bg-desktop]');

	var elementBackground = $('[data-bg-image]');

	if (minWidthSmall.matches) {
		callImages(postBgDesktop, 'data-post-bg-desktop');

	} else {
		callImages(postBgMobile, 'data-post-bg-mobile');
	}

	function callImages(dataAttr, dataAttrContent) {
		for (var i = 0; i < dataAttr.length; i++) {
			var url = dataAttr[i].getAttribute(dataAttrContent);
			dataAttr[i].style.backgroundImage='url("' + url + '")';
		}
	}

	callImages(elementBackground, 'data-bg-image');


	// Archives Delete Dialog
	var archivesDialogClose = $('.archives-dialog__close');
	
	archivesDialogClose.click(function(){
      $(this).parents('.archives-dialog').remove()
   });
});

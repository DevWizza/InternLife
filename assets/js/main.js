$(document).ready(function () {

	var mainHeader = $(".header");
	var offset = 200;
	var isOpen = false
	var afterScroll = false

	// Trigger Menu
	$('.menu-trigger').click(function () {
		$(this).toggleClass('menu-trigger--open');
		$('.menu').toggleClass('menu--open');

		if (afterScroll)
			return;

		if (isOpen)
			setTransparentHeader()
		else
			setNonTransparentHeader()

		isOpen = !isOpen
	});

	// Trigger Share Button
	$(".share-button__trigger").click(function () {
		$('.share-button').toggleClass('share-button--open');
	});

	// Header will have its color in scroll
	$(window).scroll(function () {
		headerTransparent();
	});

	function setNonTransparentHeader() {
		mainHeader.removeClass('header--transparent');
		mainHeader.addClass('header--with-colors');
	}

	function setTransparentHeader() {
		mainHeader.addClass('header--transparent');
		mainHeader.removeClass('header--with-colors');
	}

	function headerTransparent() {
		if ($(window).scrollTop() > offset && mainHeader.hasClass('header--transparent')) {
			setNonTransparentHeader()
			afterScroll = true
		}
		else if ($(window).scrollTop() <= offset && mainHeader.hasClass('header--with-colors')) {
			setTransparentHeader()
			afterScroll = false
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
			dataAttr[i].style.backgroundImage = 'url("' + url + '")';
		}
	}

	callImages(elementBackground, 'data-bg-image');
});

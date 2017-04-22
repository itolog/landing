'use strict';
// preloader
$(window).on("load", function() {
		$("#preloader").delay(350).fadeOut(500);
	});	
//preloader end
$(document).ready(function(){
	// // Обхот с посторонней вставкой бесплатного хоста
		var bag = $('#freewha');
			bag.hide();
/////////background animation
function bgSlide(){
	var bgItems = $('.bg li');
	var liFirst = bgItems.first();
	var liLast = bgItems.last();
	var activeSlide = bgItems.filter('.active');
	var nextSlide = activeSlide.next();
	
	nextSlide.addClass('active').siblings().removeClass('active');
	if(liLast.hasClass('active')){
		liFirst.addClass('active').siblings().removeClass('active');
	}
}
setInterval(bgSlide,10000);
/////////////////MENU TOGGLE
function menuToggle(){
	var menu = $(".menu");
	var txtMenu = $(".naviganion-text");
	var closeMenu = $(".close");
	var navHref = $(".nav__href");

	txtMenu.on('click',function(){
			if($(this).is(':visible')){
				$(this).hide();
				closeMenu.show();
			}
		menu.slideToggle();
	});
	closeMenu.on('click',function(){
		if($(this).is(':visible')){
			$(this).hide();
			txtMenu.show();
		}
		menu.slideToggle();
	});
		/////
		navHref.on('click', function(){
			
			if (window.innerWidth <=460) {
				menu.hide();
				closeMenu.hide();
				txtMenu.show();
			}
	});
	$(window).resize(function() {
		if ($(window).width() > 460) {
			menu.css("display", "");
		}
	});
}
menuToggle();	
////////SCROLL
$(document).scroll(function(e){
	e.preventDefault();
	var galery = $('#galery');
	var nav = $('.naviganion');
	var galeryUl = $('.galery__ul');
	var scrol = $(this).scrollTop() + window.innerHeight;
	var selfEff = $('.self-eff');
	var logo = $('.logo');
	var menu = $('.menu');
//
	//animation section Galery
	if(scrol > galeryUl.offset().top){
		galeryUl.css({
			animation: 'opacity 6s ease-out'
		});
	}
///////////////////menu fixed animation
	if(scrol > galeryUl.offset().top){
		nav.css({
			'opacity': 1,
			'height': '50px'
		});
		}else{
		nav.css({
			'opacity': '',
			'height': ''
		});
	}
/////////////section selfEf animation
	if(scrol > selfEff.offset().top){
		selfEff.css({
			animation: 'opacity 6s ease-out'
		});
	}
	//////animation section last
	if(scrol > $('.spotify').offset().top){
		$('.spotify').css({
			animation: 'slide 2s linear',
		});
	}
	if(scrol > $('.itunes').offset().top){
		$('.itunes').css({
			animation: 'slideR 2s linear',
		})
	}
////////////////	
///////toUpp
	if(scrol > galeryUl.offset().top){
		$(".toUpp").css('opacity', 0.5);
	}else{
		$(".toUpp").css('opacity',0);
	}
});
///////////////Прокрутка ссылок
$(".toUpp").on('click', function(event){
	event.preventDefault();
	$('body,html').animate({scrollTop:0}, 1500);
	return false;
});
////FIRST
var first = $("a[href='#first']");
var firstScroll = $('#first'); 
first.click(function() {
	$('body,html').animate({scrollTop: firstScroll.offset().top}, 1000);
});
/////galery
var galery = $("a[href='#galery']");
var galScroll = $('#galery'); 
galery.click(function() {
	$('body,html').animate({scrollTop: galScroll.offset().top}, 1000);
});
//////instagram
var instagram = $("a[href='#instagram']");
var instagramScroll = $('#instagram'); 
instagram.click(function() {
	$('body,html').animate({scrollTop: instagramScroll.offset().top}, 1000);
});
///////selff
var selff = $("a[href='#selff']");
var selffScroll = $('#self'); 
selff.click(function() {
	$('body,html').animate({scrollTop: selffScroll.offset().top}, 1000);
});
///////contact
var contact = $("a[href='#contact']");
var contactScroll = $('#contact'); 
contact.click(function() {
	$('body,html').animate({scrollTop: contactScroll.offset().top}, 1000);
});
////////////////////////////MODAL WINDOW
function modalWindow(){
	var modalWin = $('.modal-window');
	var modalClos = $('.modal__close');
	var modalWindowContent = $('.modal-window__content');
	var img = $('.galery__ul--img');

	img.on('click', function(){
		modalWin.fadeIn(1000);
		$(this).clone().appendTo(modalWindowContent);
	});
//////////////////////	
	modalClos.on('click', function(){
		modalWin.fadeOut(600);
		modalWindowContent.children(img).remove();
	})
}
modalWindow();
//////////////
});
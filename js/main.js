$(function() {
/*--Main nav-----------------------------------*/ 

	$('.navbar-toggle').jPushMenu({ closeOnClickLink: false });

/*--Promo slider-------------------------------*/ 
	
	var promoSlider = $('.promo-slider .owl-carousel');

	promoSlider.on('initialized.owl.carousel', function(property) {
		var current = property.item.index;
		var prev = $(property.target).find(".owl-item").eq(current).prev().find(".slider-bg").attr('data-navpic');
		var next = $(property.target).find(".owl-item").eq(current).next().find(".slider-bg").attr('data-navpic');

		$('.nav-prev').find('.bg-img').css('background-image', 'url('+prev+')');
		$('.nav-next').find('.bg-img').css('background-image', 'url('+next+')');
	});

	if (promoSlider.length > 0) {
		promoSlider.owlCarousel({
			items: 1,
			nav: false,
			dots: false,
			loop: true,
			lazyLoad: true,
			smartSpeed: 800,
			navSpeed: 800,
			autoplaySpeed: 800,
			fluidSpeed: 800,
			autoplay: true,
			autoplayTimeout: 500055
		});
	}

	promoSlider.on('changed.owl.carousel', function(property) {
		var current = property.item.index;
		var prev = $(property.target).find(".owl-item").eq(current).prev().find(".slider-bg").attr('data-navpic');
		var next = $(property.target).find(".owl-item").eq(current).next().find(".slider-bg").attr('data-navpic');

		$('.nav-prev').find('.bg-img').css('background-image', 'url('+prev+')');
		$('.nav-next').find('.bg-img').css('background-image', 'url('+next+')');
	});

	$('.nav-next').on('click', function() {
		promoSlider.trigger('next.owl.carousel', [300]);
		return false;
	});

	$('.nav-prev').on('click', function() {
		promoSlider.trigger('prev.owl.carousel', [300]);
		return false;
	});

/*--Aside product slider------------------------*/ 
	
	var asideProductCarouselState = 0;

	$(document).on('resize', function() {
		var windowWidth = ( $(document).outerWidth() < 768 ) ? true : false;

		if (windowWidth) {
			asideProductCarouselState = 1;
		} else {
			asideProductCarouselState = 0;
		}
	});

	if (asideProductCarouselState) {
		asideProductCarousel();
	}

	function mobileProductCarousel() {
		var mobCarousel = $('.aside-product-carousel');

		if (mobCarousel.length > 0) {
			mobCarousel.owlCarousel({
				items: 2,
				nav: true,
				dots: false,
				loop: true
			});
		}
	}


/*--Mask input for Callback form-----------*/

	$("input[name='uphone'").mask("+7 (999) 999-9999"); 

/*--AJAX Form submit--------------------*/

	$(document).on('af_complete', function(event,response) {
		var form_id = response.form.parents('.modal').attr('id');
		if (response.success) {
			$('#'+form_id).modal('hide');
			$('#modal-mes').modal('show');
		}
	});

/*--Animation-------------------*/

	window.sr = ScrollReveal();
	sr.reveal('.reveal-anim', { duration: 800 });
	sr.reveal('.reveal-anim', { afterReveal: function(domEl) { 
			$(domEl).css({ 
				'-webkit-transform': 'none', 
				'transform': 'none'
			});
		} });
	sr.reveal('.reveal-left', { duration: 800, origin: 'left', distance: '100px' });
	sr.reveal('.reveal-right', { duration: 800, origin: 'right', distance: '100px' });
});

/*!
 * jPushMenu.js
 * 1.1.1
 * @author: takien
 * http://takien.com
 * Original version (pure JS) is created by Mary Lou http://tympanus.net/
 */
(function($) {
	$.fn.jPushMenu = function(customOptions) {
		var o = $.extend({}, $.fn.jPushMenu.defaultOptions, customOptions);
		/* add class to the body.*/
		
		$('body').addClass(o.bodyClass);
		$(this).addClass('jPushMenuBtn');
		$(this).click(function() {
			var target         = '',
			push_direction     = '';
			
			if($(this).is('.'+o.showLeftClass)) {
				target         = '.cbp-spmenu-left';
				push_direction = 'toright';
			}
			else if($(this).is('.'+o.showRightClass)) {
				target         = '.cbp-spmenu-right';
				push_direction = 'toleft';
			}
			else if($(this).is('.'+o.showTopClass)) {
				target         = '.cbp-spmenu-top';
			}
			else if($(this).is('.'+o.showBottomClass)) {
				target         = '.cbp-spmenu-bottom';
			}
			
			$(this).toggleClass(o.activeClass);
			$(target).toggleClass(o.menuOpenClass);
			
			if($(this).is('.'+o.pushBodyClass)) {
				$('body').toggleClass( 'cbp-spmenu-push-'+push_direction );
			}
			
			/* disable all other button*/
			$('.jPushMenuBtn').not($(this)).toggleClass('disabled');
			
			return false;
		});
		var jPushMenu = {
			close: function (o) {
				$('.jPushMenuBtn,body,.cbp-spmenu').removeClass('disabled active cbp-spmenu-open cbp-spmenu-push-toleft cbp-spmenu-push-toright');
			}
		}

    if(o.closeOnClickOutside) {
			$(document).click(function() {
				jPushMenu.close();
				$('.jPushMenuBtn').removeClass('menu-active');
			});

			$(document).on('click touchstart', function(){
				jPushMenu.close();
				$('.jPushMenuBtn').removeClass('menu-active');
			});

			$('.cbp-spmenu,.toggle-menu').click(function(e){
				e.stopPropagation();
			});

			$('.cbp-spmenu,.toggle-menu').on('click touchstart', function(e){
				e.stopPropagation();
			});
		}

        // On Click Link
        if(o.closeOnClickLink) {
            $('.cbp-spmenu a').on('click',function(){
                jPushMenu.close();
            });
        }
	};
 
   /* in case you want to customize class name,
   *  do not directly edit here, use function parameter when call jPushMenu.
   */
	$.fn.jPushMenu.defaultOptions = {
		bodyClass       : 'cbp-spmenu-push',
		activeClass     : 'menu-active',
		showLeftClass   : 'menu-left',
		showRightClass  : 'menu-right',
		showTopClass    : 'menu-top',
		showBottomClass : 'menu-bottom',
		menuOpenClass   : 'cbp-spmenu-open',
		pushBodyClass   : 'push-body',
		closeOnClickOutside: true,
		closeOnClickInside: true,
		closeOnClickLink: true
	};
})(jQuery);


/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});


/* SVG fix for Firefox */ 
// (function(document, window) {
// 	"use strict";
// 	document.addEventListener("DOMContentLoaded", function() {
// 		var baseUrl = window.location.href
// 			.replace(window.location.hash, "");

// 		if( baseUrl.indexOf("#") !== -1 ) { baseUrl = baseUrl.replace("#", ""); }
			
// 		[].slice.call(document.querySelectorAll("use[*|href]"))
// 			.filter(function(element) {
// 				return (element.getAttribute("xlink:href").indexOf("#") === 0);
// 			})
// 			.forEach(function(element) {
// 				element.setAttribute("xlink:href", baseUrl + element.getAttribute("xlink:href"));
// 			});
// 	}, false);
// }(document, window));
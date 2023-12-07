"use strict";

(function($){
	$(document).ready(function(){
		
		/*for (let obj of category) {
			for (let attr in obj) {

				if (attr == 'files') {
			
					for (let file of obj[attr]) {
						console.log(file);
					}
				} 

				else {
					console.log(attr + ': ' + obj[attr]);
				}
			}
		}*/

		var lazyLoadInstance = new LazyLoad({ });

		for (let obj of category) {
			
			$('.category__list').append($('<div class="category__element" data-category="' + obj.id + '">'+ obj.name.rus +'</div>'));

			for (let file of obj.files) {
				$('.gallery__list').append($('<div class="gallery__element" data-category="' + obj.id + '"> <img data-src="' + obj.path + file + '" class="lazy">'));
			}
		}

		lazyLoadInstance.update();

		/*let obj = category[1];

		for(let file of obj.files){
			$('.gallery__list').append($('<div class="gallery__element" data-category="' + obj.id + '"> <img src="' + obj.path + file + '">'));
		}*/



		$('.category__active').on('click', function(){
			$('.category__list-container').toggleClass('active');
			
			//document.querySelector('.category__list-container').scrollTop = 0;

			$(".category__list-container").animate({
				scrollTop: 0
			}, 500);
		});

		$('.category__element').on('click', function(){
			$(this).addClass('active').siblings().removeClass('active');


			let gallery = document.querySelector('.gallery__list-container');
				gallery.scrollTop = 0;

			let category = $(this).attr('data-category');

			if(category == 0){
				$('.gallery__element').removeClass('hidden');

			} else {
				$('.gallery__element').each(function(i, el){
					if($(el).attr('data-category') == category){
						$(el).removeClass('hidden');
					} else {
						$(el).addClass('hidden');
					}
				});
			}

			$('.category__active').html($(this).html());
			$('.category__list-container').removeClass('active');
		});


		$('.color__item').on('click', function(){
			$(this).addClass('active').siblings().removeClass('active');

			let active_color = $(this).attr('data-color');

			$('.card').attr({'class': 'card'}).addClass(active_color);
		});

		$('.gallery__element').on('click', function(){
			let src = $(this).find('img').attr('src');

			$("body, html").animate({
					scrollTop: 0
				}, 500);


			if (src) {
				let img = $('<img src="'+ src +'">');

				$('.card__image').html('');
				$('.card__image').append(img);
			} 

			else {
				$('.card__image').html('');
			}
			
		});

	});


	$(window).on('load resize', function(){
		
		if(this.innerWidth < 1500) {
			let elW = $('.card').width();
			let elH = (elW / 100) * 63; 

			$('.card').height(elH);
		}
	});

})(jQuery);
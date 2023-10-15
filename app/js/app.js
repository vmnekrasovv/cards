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

		for (let obj of category) {
			
			$('.category__list').append($('<div class="category__element">'+ obj.name.rus +'</div>'));

		}

	});
})(jQuery);
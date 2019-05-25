var but = document.querySelectorAll('.buttons > li');
var cont = document.querySelectorAll('.content > div');

for(var i = 0; i < but.length; i++){

	but[i].onclick = function(){

		var sel = document.getElementsByClassName('selected');
		sel[0].classList.remove('selected');
		this.classList.add('selected');

		for(var y = 0; y < but.length; y++){

			if(but[y].classList == 'selected'){
				var num = y;
				var act = document.getElementsByClassName('active');
				act[0].classList.remove('active');
				setTimeout(function delay(){
					cont[num].classList.add('active');
				}, 500);
			};
		}
	};
}




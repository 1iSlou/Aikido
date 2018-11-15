(function($){
  $(document).ready(function(){
   $('div#block-block-10').click(function(event) {
   	$('ul.menu').toggleClass('Show_Menu');
   });;

 



		

   		if($(window).width() >= 1000){
   			$('li.expanded').children('ul').children('li.first.leaf').css({'display':'none'});
   		}
   		if ($(window).width() <= 1000 ){
   			var i=0;
   			var b = true;	
			var pov = true;
   			var c=0;
   			while(typeof c !== 'undefined'){
 			c = $('li.expanded>a').eq(i).html();
   			var adres = $('li.expanded>a').eq(i).html();
   			$('li.expanded>a').eq(i).html(adres + "+");
   			i++;
   			}

   			
   			$('.expanded>a').click(function(event) {
   				event.preventDefault();

   			});
   			$('.expanded').click(function (back) {

   			var x = $(this).children('a').text();
   			console.log(x);
   			var ini = '';

   			if($(this).children('ul').attr('class')!='menu Show_Menu show2'){
   				

   			for(let j=0;j<x.length;j++){
   				
   				if(x[j]=='+'){
   				$(this).children('a').html(ini+'-');
   				}else{
   				ini =ini + x[j];
   				}
   			}}else{
   				for(let j=0;j<x.length;j++){
   				
   				if(x[j]=='-'){
   				$(this).children('a').html(ini+'+');
   				}else{
   				ini =ini + x[j];
   				}
   			}
   			}


   				
   					$(this).children('ul').toggleClass('show2');
   					$(this).parent('ul').css({'height':'100%'});
			
				

   			});
   				
	}
  });
})(jQuery);





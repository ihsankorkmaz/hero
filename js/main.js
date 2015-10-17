
var $shown = $('.gallery img:first-child');

$shown.addClass('shown');
$counter = 0;
$counterMin = 0;
$counterMax = $('img.hero').length-1;
setTitle();


$('.next').on('click', function(e){

   if($counter == $counterMax){
       
     $counter = $counterMin;
        $shown.removeClass('shown');
	   $shown = $('.gallery img:first-child');
       $shown.addClass('shown');

   }
  
    else {
    
       
        $shown.removeClass('shown');
	   $shown = $shown.next().addClass('shown');

        $counter++;

    }
      setTitle();

});


$('.prev').on('click', function(e){

    
     if($counter == $counterMin){
       
     $counter = $counterMax;
        $shown.removeClass('shown');
	   $shown = $('.gallery img:last-child');
       $shown.addClass('shown');

   }
  
    else {
    

        $shown.removeClass('shown');
	   $shown = $shown.prev().addClass('shown');
        $counter--;
    }
    
     setTitle();


});
function setTitle(){

$currentTitle = $shown.attr('title');
$('.name').text($currentTitle);


}


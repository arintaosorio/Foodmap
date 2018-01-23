var $input = $('#icon_prefix');
var $restaurantName = $('.restaurant');
var $foodType= $('.food');
var $adress = $('.adress');
var $service = $('.service');
var $imageFood = $('.food-img');
var $order = $('.order');




function loadPage(){
   
    $('.modal').modal();
    $imageFood.click(selectImg);
  }



function selectImg(){
  var $restaurant = data.name;

}
  $(document).ready(loadPage);
console.log($restaurant); 
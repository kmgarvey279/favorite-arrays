$().ready(function(){
  $("#favoriteQuestions").submit(function(event){
    event.preventDefault();
var favoriteFoodsAnswer = $("#favoriteFood").val();
var favoriteColorsAnswer = $("#favoriteColor").val();
var favoriteAnimalsAnswer = $("#favoriteAnimal").val();
var favoriteSeasonsAnswer = $("#favoriteSeason").val();
var favoriteMoviesAnswer = $("#favoriteMovie").val();
var favoriteBooksAnswer = $("#favoriteBook").val();
var favoriteThings = [];
favoriteThings.push(favoriteFoodsAnswer);
favoriteThings.push(favoriteColorsAnswer);
favoriteThings.push(favoriteAnimalsAnswer);
favoriteThings.push(favoriteSeasonsAnswer);
favoriteThings.push(favoriteMoviesAnswer);
favoriteThings.push(favoriteBooksAnswer);
var newArray = []
newArray.push(favoriteThings[1])
newArray.push(favoriteThings[0])
newArray.push(favoriteThings[2])
alert(newArray);
});
});

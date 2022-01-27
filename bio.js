if (typeof $ == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!')
} else {console.log('I did it! I linked jQuery and this js file properly!')}


$(() => {

  $(".accordion p").hide();

  $(".accordion h3").click(function(){ $(this).next("p").slideToggle("slow") .siblings("p:visible").slideUp("slow"); $(this).toggleClass("active"); $(this).siblings("h3").removeClass("active"); });

})

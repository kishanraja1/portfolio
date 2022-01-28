// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!')
// } else {console.log('I did it! I linked jQuery and this js file properly!')}

$(() => {

////////////// Function for accordion function//////////////////////
//hiding all h3s
  const $content = $(".accordion p")
  $content.hide();

  const $h3 = $(".accordion h3")

//on click,run the following function
  $h3.click(function()
  {
    // slowly expose content in the p that follows the h3 that was clicked
    $(this).next("p").slideToggle()
    // slowly hide the current visible p tag
    .siblings("p:visible").slideToggle();
  })

})

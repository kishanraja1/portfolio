// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!')
// } else {console.log('I did it! I linked jQuery and this js file properly!')}

const toggleItems = () => {
  document.getElementById("myDropdown").classList.toggle("show");
}

$(() => {

/////////// DROPDOWN BUTTON //////////////////

$('.dropbtn').on('click', toggleItems)

////////////// Function for accordion function//////////////////////
//hiding all divs inside of .accordion class
  const $content = $(".accordion div")
  $content.hide();

  const $h3 = $(".accordion h3")

//on click,run the following function
  $h3.click(function()
  {
    // slowly expose content in the p that follows the h3 that was clicked
    $(this).next("div").slideToggle()
    // slowly hide the current visible p tag
    .siblings("div:visible").slideToggle();
  })

})

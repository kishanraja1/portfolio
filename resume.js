// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!')
// } else {console.log('I did it! I linked jQuery and this js file properly!')}

const toggleItems = () => {
  document.getElementById("myDropdown").classList.toggle("show");
}

$(() => {

///// DROPDOWN MENU ///////////////////////
$('.dropbtn').on('click', toggleItems)



//////// ACCORDION FEATURE //////////////


  const $resumeSection = $(".info")
  $resumeSection.hide();

  const $h3 = $(".accordion h3")
  const $footer = $('footer')

  $h3.click(function(){
    // toggle the div immediately after the clicked h3
    $(this).next("div").slideToggle()
    $footer.css('position', 'sticky').css('bottom', '0')

   ; })

})

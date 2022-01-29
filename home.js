const toggleItems = () => {
  document.getElementById("myDropdown").classList.toggle("show");
}



$(() => {


//////// DROPDOWN MENU ////////////
/// Used guidance from https://www.w3schools.com/howto/howto_js_dropdown.asp


$('.dropbtn').on('click', toggleItems)

})

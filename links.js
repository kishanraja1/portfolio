const toggleItems = () => {
  document.getElementById("myDropdown").classList.toggle("show");
}



$(() => {

//////// EVENT LISTENER FOR DROPDOWN MENU /////////////////

$('.dropbtn').on('click', toggleItems)

})

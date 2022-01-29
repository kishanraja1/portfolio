const toggleItems = () => {
  document.getElementById("myDropdown").classList.toggle("show");
}


$(() => {


/////// DROPDOWN MENU ///////////////////////
$('.dropbtn').on('click', toggleItems)


  ////////// CAROUSEL FEATURE //////////////////////

  currentImgIndex = 0;
  numOfImages = $('.carousel-images').children().length - 1


// event listener for clicks on the next button
  $('.next').on('click', () => {
    //hide current image being shown
     $('.carousel-images').children().eq(currentImgIndex).css('display','none')
     // if the index of the current image is less than total number of images
     if(currentImgIndex < numOfImages) {
       //add 1 to the index, showing next image
       currentImgIndex++
     } else {
       // if our number is outside of available indexes, start at index 0
       currentImgIndex = 0
     }
    // show image of relevant index
    $('.carousel-images').children().eq(currentImgIndex).css('display','block')
  })


//event listener for clicks on the previous button
  $('.previous').on('click', () => {
    //remove currently displayed image
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
    if(currentImgIndex > 0) {
   //subtract 1 from the index, showing previous image
      currentImgIndex--
    } else {
    // if our number is outside of available indexes, start at index 0
      currentImgIndex = numOfImages
    }
    //show image of relevant index
    $('.carousel-images').children().eq(currentImgIndex).css('display','block')
  })

});

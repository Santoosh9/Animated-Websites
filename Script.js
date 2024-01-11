function loaderAnimation() {
  var loader = document.querySelector('#loader');
  setTimeout(function () {
    loader.style.top = '-100%';
  }, 4200);
}

document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.getElementById('video-carousel');
  var carouselItems = carousel.getElementsByClassName('carousel-item');
  var currentIndex = 0;

  function showNextVideo() {
    // Pause the current video
    carouselItems[currentIndex].querySelector('video').pause();

    // Hide the current item
    carouselItems[currentIndex].style.display = 'none';

    // Move to the next index
    currentIndex = (currentIndex + 1) % carouselItems.length;

    // Show and play the next video
    carouselItems[currentIndex].style.display = 'block';
    carouselItems[currentIndex].querySelector('video').play();
  }

  // Set an interval to switch videos (adjust the delay as needed)
  setInterval(showNextVideo, 5000); // Switch every 5 seconds
});



loaderAnimation();
showNextVideo();

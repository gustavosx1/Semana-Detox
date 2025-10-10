
const images = [
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1519340333755-197a2f3d9b6b?auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=60"
];

let currentIndex = 0;

function changeSlide(direction) {
  currentIndex += direction;
  if(currentIndex < 0) currentIndex = images.length - 1;
  if(currentIndex >= images.length) currentIndex = 0;
  document.getElementById("slider-image").src = images[currentIndex];
}
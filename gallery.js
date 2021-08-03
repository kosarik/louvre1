var img1 = [];
for(var i=1;i<=15;i++){ 
img1[i] = './assets/img/gallery/galery' + i + '.jpg'; }
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
shuffle(img1);
const galleryInner = document.querySelector('.gallery-inner');

for (var i = 1, j = img1.length-1; i < j; i++) {
  var img = document.createElement('img');
  img.src = img1[i]; // img[i] refers to the current URL.
  galleryInner.appendChild(img);
}



  
  
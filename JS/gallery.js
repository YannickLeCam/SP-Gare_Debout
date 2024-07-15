
const imageToEnlarge = document.getElementById('imageToEnlarge');
const overlay = document.getElementById('overlay');
const enlargedImg = document.getElementById('enlargedImg');
const closeButton = document.getElementById('closeButton');


document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('imagesContainer');

    const images = [
        "./asset/Gare_Debout_gallery.jpg",
        "./asset/Gare_Debout_gallery2.jpg",
        "./asset/Gare_Debout_gallery3.jpg",
        "./asset/Gare_Debout_gallery4.jpg",
        "./asset/Gare_Debout_gallery5.jpg"
    ]


    images.forEach(image => {
        const img = document.createElement('img');
        img.src = `${image}`;
        //agrandissement de la photo sur le clique
        img.addEventListener("click",function(){
            overlay.style.display = 'flex';
            enlargedImg.src = img.src;
        });
        imageContainer.appendChild(img);
    })
});



closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
    }
});

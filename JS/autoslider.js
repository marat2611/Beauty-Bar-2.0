
autoSlider ()
left=0;
var timer;

function autoSlider () {
    timer=setTimeout(function() {
        var polosa=document.getElementById ('polosa');
        left=left-1140;
        if (left<-1140) {left=0}
        polosa.style.left=left+'px';
        autoSlider ()
    },4000) 
}
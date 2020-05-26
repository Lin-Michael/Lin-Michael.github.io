
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

var light = "#fff";
var dark = "#303030";

//light: fff
//dark: #303030
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
function resetButton(){
    document.getElementById("darkMode").checked = false;
}

function darkMode(checkbox){

    if(checkbox.checked)//dark theme
    {
        var x = document.getElementsByTagName("BODY")[0];
        x.style.background = dark;
        x.style.color = light;
        var y = document.getElementsByClassName("resume");
        y[0].style.color = light;
        y[1].style.color = light;
    }
    else{
        var x = document.getElementsByTagName("BODY")[0];
        x.style.background = "#fff";
        x.style.color = dark;
        var y = document.getElementsByClassName("resume");
        y[0].style.color = dark;
        y[1].style.color = dark;
    }

}

var ignisModal = document.getElementById("ignisModal");
var ignisBtn = document.getElementById("ignisBtn");
var ignisSpan = document.getElementsByClassName("closeIgnis")[0];

// When the user clicks on the button, open the modal
ignisBtn.onclick = function() {
    ignisModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ignisSpan.onclick = function() {
    ignisModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == ignisModal) {
    ignisModal.style.display = "none";
  }
} 
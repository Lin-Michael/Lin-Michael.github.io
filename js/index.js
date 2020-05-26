
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
        var z = document.getElementsByClassName("modal-content");
        z[0].style.background = dark;
        z[1].style.background = dark;
        z[2].style.background = dark;
        z[3].style.background = dark;
        var a = document.getElementsByClassName("modalButton");
        a[0].style.color = light;
        a[1].style.color = light;
        a[2].style.color = light;
        a[3].style.color = light;

    }
    else{
        var x = document.getElementsByTagName("BODY")[0];
        x.style.background = "#fff";
        x.style.color = dark;
        var y = document.getElementsByClassName("resume");
        y[0].style.color = dark;
        y[1].style.color = dark;
        var z = document.getElementsByClassName("modal-content");
        z[0].style.background = light;
        z[1].style.background = light;
        z[2].style.background = light;
        z[3].style.background = light;
        var a = document.getElementsByClassName("modalButton");
        a[0].style.color = dark;
        a[1].style.color = dark;
        a[2].style.color = dark;
        a[3].style.color = dark;
    }

}
//MODALS--------------------------------------------------------------------------
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


var atsModal = document.getElementById("atsModal");
var atsBtn = document.getElementById("atsBtn");
var atsSpan = document.getElementsByClassName("closeAts")[0];

atsBtn.onclick = function() {
    atsModal.style.display = "block";
}

atsSpan.onclick = function() {
    atsModal.style.display = "none";
}


var fanModal = document.getElementById("fanModal");
var fanBtn = document.getElementById("fanBtn");
var fanSpan = document.getElementsByClassName("closeFan")[0];

fanBtn.onclick = function() {
    fanModal.style.display = "block";
}

fanSpan.onclick = function() {
    fanModal.style.display = "none";
}


var waterlooModal = document.getElementById("waterlooModal");
var waterlooBtn = document.getElementById("waterlooBtn");
var waterlooSpan = document.getElementsByClassName("closeWaterloo")[0];

waterlooBtn.onclick = function() {
    waterlooModal.style.display = "block";
}

waterlooSpan.onclick = function() {
    waterlooModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == ignisModal) {
      ignisModal.style.display = "none";
    }
    if (event.target == fanModal) {
        fanModal.style.display = "none";
      }
      if (event.target == atsModal) {
        atsModal.style.display = "none";
      }
    if (event.target == waterlooModal) {
        waterlooModal.style.display = "none";
      }
  } 



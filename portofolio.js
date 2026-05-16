// ================= CONTACT FORM =================

document.getElementById("contactForm").addEventListener("submit", function(e){

  e.preventDefault();

  alert("Pesan berhasil dikirim!");

});


// ================= DARK MODE =================

window.onload = function(){

  const btn = document.getElementById("modeToggle");

  btn.onclick = function(){

    document.body.classList.toggle("dark-mode");

    // Ganti icon
    if(document.body.classList.contains("dark-mode")){

      btn.innerHTML = "☀️";

    }else{

      btn.innerHTML = "🌙";

    }

  }

}
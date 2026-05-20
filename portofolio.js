// ================= CONTACT FORM =================

document.getElementById("contactForm").addEventListener("submit", function(e){

  e.preventDefault();

  alert("Pesan berhasil dikirim!");

});
/* =========================
      FOOTER ANIMATION
========================= */

const footer = document.querySelector(".footer-section");

window.addEventListener("scroll", () => {

  const footerTop = footer.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if(footerTop < screenPosition){
    footer.classList.add("show");
  }

});

/* =========================
      NEWSLETTER BUTTON
========================= */

const form = document.querySelector(".newsletter");

form.addEventListener("submit", function(e){

  e.preventDefault();

  alert("Thank you for subscribing ✨");

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

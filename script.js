// Ambil nama dari URL (?to=Nama Tamu)
const params = new URLSearchParams(window.location.search);
const guest = params.get("to") || "Tamu Undangan";
document.querySelector(".guest-name").textContent = "Kepada Yth: " + guest;

// Tombol Buka
const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");

openBtn.addEventListener("click", () => {
  cover.classList.add("open");
  setTimeout(() => {
    cover.style.display = "none";
    invitation.classList.remove("d-none");
  }, 1200); // sesuai durasi animasi pintu
});

const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const invitation = document.querySelector(".invitation");
const guestName = document.getElementById("guestName");

  // Ambil nama dari URL (misal ?to=Bapak+Ahmad)
  const urlParams = new URLSearchParams(window.location.search);
  const to = urlParams.get("to");
  if (to) guestName.textContent = decodeURIComponent(to);

  // Saat klik tombol buka
  openBtn.addEventListener("click", () => {
    cover.classList.add("opened");
 
  // Setelah animasi pintu + cahaya selesai, hilangkan cover & munculkan undangan
  setTimeout(() => {
    cover.style.display = "none";
    invitation.classList.add("show-invitation");
    cover.classList.add("hidden"); // cover hilang
    invitation.style.display = "block"; // tampil undangan
    document.body.style.overflow = "auto"; // aktifkan scroll
  }, 2500); // timing harus lebih lama dari animasi
});


  // Lock scroll saat cover masih tampil
  document.body.style.overflow = "hidden";
});

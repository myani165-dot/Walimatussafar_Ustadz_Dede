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
  cover.classList.add("open"); // <- SAMA dengan CSS

  // Setelah animasi pintu + cahaya selesai
  setTimeout(() => {
    cover.style.display = "none"; // tutup cover
    invitation.classList.add("show-invitation"); // tampilkan undangan
    document.body.style.overflow = "auto"; // aktifkan scroll
  }, 7200); // timing sesuai CSS (1.5s pintu + 2s cahaya)
});

// Lock scroll saat cover masih tampil
document.body.style.overflow = "hidden";

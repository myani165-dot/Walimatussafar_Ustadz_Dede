document.addEventListener("DOMContentLoaded", () => {
  const cover = document.getElementById("cover");
  const invitation = document.getElementById("invitation");
  const openBtn = document.getElementById("openBtn");
  const guestName = document.getElementById("guestName");

  // Ambil nama dari URL (misal ?to=Bapak+Ahmad)
  const urlParams = new URLSearchParams(window.location.search);
  const to = urlParams.get("to");
  if (to) guestName.textContent = decodeURIComponent(to);

  // Saat klik tombol buka
  openBtn.addEventListener("click", () => {
    cover.classList.add("opened");
    setTimeout(() => {
      cover.classList.add("hidden"); // cover hilang
      invitation.style.display = "block"; // tampil undangan
      document.body.style.overflow = "auto"; // scroll aktif
    }, 1600);

  });


  // Lock scroll saat cover masih tampil
  document.body.style.overflow = "hidden";
});

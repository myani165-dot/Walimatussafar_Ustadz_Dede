const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const invitation = document.querySelector(".invitation");
const guestName = document.getElementById("guestName");

// Ambil nama dari URL (misal ?to=Bapak+Ahmad)
const urlParams = new URLSearchParams(window.location.search);
const to = urlParams.get("to");
if (to) guestName.textContent = decodeURIComponent(to);
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i');
const song = document.querySelector('#song');
    let isPlaying = false;
// Saat klik tombol buka
openBtn.addEventListener("click", () => {
  // Sembunyikan teks cover lebih dulu
  document.querySelector(".cover-content").classList.add("hide");

  // Lanjut animasi pintu
  cover.classList.add("open");

   playAudio();
  
  // Setelah animasi pintu + cahaya selesai
  setTimeout(() => {
    cover.style.display = "none"; // tutup cover
    invitation.classList.add("show-invitation"); // tampilkan undangan
    document.body.style.overflow = "auto"; // aktifkan scroll
  }, 5500); // timing sesuai CSS (1.5s pintu + 2s cahaya)
});

   function playAudio(){
      song.volume = 0.6;
      audioIconWrapper.style.display = 'flex';
      song.play();
      isPlaying = true;
    }

    audioIconWrapper.onclick = function(){
      if(isPlaying){
        song.pause();
        audioIcon.classList.remove('bi-disc');
        audioIcon.classList.add('bi-pause-circle');
      } else {
        song.play();
        audioIcon.classList.add('bi-disc');
        audioIcon.classList.remove('bi-pause-circle');
      }

      isPlaying=!isPlaying;
    }

// Lock scroll saat cover masih tampil
document.body.style.overflow = "hidden";

// simply countdown
 simplyCountdown(".simply-countdown", {
      year: 2025, // Target year (required)
        month: 9, // Target month [1-12] (required)
        day: 21, // Target day [1-31] (required)
        hours: 10, // Target hour [0-23], default: 0
        words: { // Custom labels, with lambda for plurals
            days: { root: 'Hari', lambda: (root, n) => n > 1 ? root : root },
            hours: { root: 'Jam', lambda: (root, n) => n > 1 ? root  : root },
            minutes: { root: 'Menit', lambda: (root, n) => n > 1 ? root  : root },
            seconds: { root: 'Detik', lambda: (root, n) => n > 1 ? root  : root }
        },
    });

document.addEventListener('DOMContentLoaded', function () {
  const animElements = document.querySelectorAll('.anim');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, { threshold: 0.3 });

  animElements.forEach(el => observer.observe(el));
});

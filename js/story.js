// Variabel global untuk melacak indeks slide saat ini
let slideIndex = 0;

// Fungsi untuk menampilkan slide berdasarkan indeks
function showSlides(n) {
    // Ambil semua elemen dengan kelas 'slide'
    const slides = document.querySelectorAll(".slide");
    
    // Cek jika indeks lebih besar dari jumlah slide, reset ke 0
    if (n >= slides.length) { slideIndex = 0; }
    
    // Cek jika indeks kurang dari 0, set ke indeks terakhir
    if (n < 0) { slideIndex = slides.length - 1; }
    
    // Terapkan transformasi CSS untuk menggeser slide yang sesuai
    document.querySelector('.slides').style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Fungsi untuk mengubah slide berdasarkan langkah n
function changeSlide(n) {
    // Tambahkan langkah n ke slideIndex
    slideIndex += n;
    
    // Tampilkan slide yang baru berdasarkan indeks yang diperbarui
    showSlides(slideIndex);
}

// Tambahkan event listener untuk tombol kembali ke halaman utama
document.getElementById('backToHomeBtn').addEventListener('click', function() {
    window.location.href = 'index.html'; // Alihkan ke halaman utama saat tombol diklik
});

// Tampilkan slide awal saat halaman dimuat
showSlides(slideIndex);

// Set interval untuk otomatis mengganti slide setiap 5 detik
setInterval(() => changeSlide(1), 5000);

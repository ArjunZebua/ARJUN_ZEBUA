// Tunggu hingga seluruh konten halaman dimuat sebelum menjalankan kode
document.addEventListener("DOMContentLoaded", () => {
  // URL API tempat data anime diambil
  const apiUrl = "https://jun-anime.vercel.app/api/animes";
  // Ambil elemen container tempat anime akan ditampilkan
  const animeContainer = document.getElementById("anime-container");
  // Variabel untuk menyimpan data anime
  let animeData = [];

  // Ambil data dari API menggunakan fetch
  fetch(apiUrl)
    .then((response) => response.json())  // Parsing response menjadi format JSON
    .then((data) => {
      animeData = data;  // Simpan data anime ke variabel
      displayAnimes(animeData);  // Tampilkan anime di halaman
    })
    .catch((error) => console.error("Error fetching anime data:", error));  // Tangani kesalahan jika fetch gagal

  // Fungsi untuk menampilkan anime di halaman
  function displayAnimes(animes) {
    // Hapus semua anak dari animeContainer agar tidak ada duplikasi
    while (animeContainer.firstChild) {
      animeContainer.removeChild(animeContainer.firstChild);
    }

    // Iterasi melalui setiap anime dan buat elemen HTML untuk masing-masing
    animes.forEach((anime) => {
      // Buat elemen figure untuk setiap anime
      const animeItem = document.createElement("figure");
      animeItem.className = "anime-item";

      // Buat elemen img untuk gambar anime
      const animeImage = document.createElement("img");
      animeImage.src = anime.photo_url;  // Set URL gambar
      animeImage.alt = anime.name;  // Set alt text gambar
      // Tambahkan event listener untuk membuka detail anime saat gambar diklik
      animeImage.addEventListener("click", () => {
        window.open(`anime.html?id=${anime.id}`, '_self');
      });

      // Buat elemen figcaption untuk nama anime
      const animeCaption = document.createElement("figcaption");
      const captionText = document.createTextNode(anime.name);  // Buat teks nama anime
      animeCaption.appendChild(captionText);  // Tambahkan teks ke figcaption

      // Tambahkan gambar dan caption ke elemen figure
      animeItem.appendChild(animeImage);
      animeItem.appendChild(animeCaption);
      // Tambahkan elemen figure ke container
      animeContainer.appendChild(animeItem);

      // Tambahkan event listener untuk menyimpan data anime ke localStorage saat item diklik
      animeItem.addEventListener("click", () => {
        localStorage.setItem("detail-anime", JSON.stringify(anime));
      });
    });
  }

  // Fungsi untuk mencari anime berdasarkan nama
  window.searchAnime = function() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();  // Ambil nilai dari search bar dan ubah menjadi huruf kecil
    // Filter anime yang nama-namanya mencakup searchTerm
    const filteredAnimes = animeData.filter(anime => anime.name.toLowerCase().includes(searchTerm));
    // Tampilkan anime yang sesuai dengan hasil pencarian
    displayAnimes(filteredAnimes);
  };
});
function toggleMenu() {
  const navMenu = document.querySelector('.navbar');
  navMenu.classList.toggle('active');
}
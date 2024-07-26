document.addEventListener("DOMContentLoaded", () => {
    // Mengambil elemen-elemen dari halaman berdasarkan kelas CSS
    const nameAnime = document.querySelector(".nama-anime");
    const totalEpisode = document.querySelector(".total-episode");
    const ratingAnime = document.querySelector(".ratingAnime");
    const categoryAnime = document.querySelector(".categoryAnime");
    const synopsisAnime = document.querySelector(".synopsisAnime");
    const trailerAnime = document.querySelector(".trailerAnime");
    const animeImage = document.querySelector(".anime-image");

    // Mengambil data detail anime dari localStorage
    const dataDetailAnime = JSON.parse(localStorage.getItem("detail-anime"));
    console.log(dataDetailAnime); // Untuk debugging, menampilkan data anime di konsol

    // Mengatur nama anime (judul) pada elemen dengan kelas 'nama-anime'
    nameAnime.textContent = dataDetailAnime.name;

    // Mengatur total episode anime pada elemen dengan kelas 'total-episode'
    totalEpisode.textContent = `Total Episodes: ${dataDetailAnime.episode_count}`;

    // Mengatur rating anime pada elemen dengan kelas 'ratingAnime'
    ratingAnime.textContent = dataDetailAnime.rating;

    // Mengatur kategori anime pada elemen dengan kelas 'categoryAnime'
    categoryAnime.textContent = dataDetailAnime.category;

    // Mengatur sinopsis anime pada elemen dengan kelas 'synopsisAnime'
    synopsisAnime.textContent = dataDetailAnime.synopsis;

    // Mengatur gambar anime dengan URL yang disimpan di dataDetailAnime
    animeImage.setAttribute("src", dataDetailAnime.photo_url);

    // Mengatur URL video YouTube untuk trailer anime
    const trailerUrl = dataDetailAnime.trailer_url;

    // Ekstraksi videoId dari URL YouTube menggunakan ekspresi reguler
    const videoId = trailerUrl.match(/(?:youtube\.com.*(?:v=|\/embed\/|\/v\/|\/.*\/)|youtu\.be\/)([^&\n?#]+)/)[1];

    // Menambahkan kelas CSS tambahan untuk penyesuaian gaya
    nameAnime.classList.add('name');
    ratingAnime.classList.add('rating');
    categoryAnime.classList.add('category');
    
    // Jika videoId ditemukan, atur atribut src dari iframe trailer dengan URL embed YouTube
    if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        trailerAnime.setAttribute("src", embedUrl);
    }
});

// Tunggu hingga seluruh konten halaman dimuat sebelum menjalankan kode
document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen-elemen DOM yang diperlukan
    let loginContainer = document.getElementById('loginContainer');
    let registerContainer = document.getElementById('registerContainer');
    let showRegisterLink = document.getElementById('showRegister');
    let showLoginLink = document.getElementById('showLogin');
    let backToHomeButton = document.getElementById('backToHome');
    
    // Tambahkan event listener untuk tautan "Registrasi disini"
    showRegisterLink.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah perilaku default tautan
        // Sembunyikan formulir login dan tampilkan formulir registrasi
        loginContainer.classList.remove('active');
        registerContainer.classList.add('active');
    });
    
    // Tambahkan event listener untuk tautan "Login disini"
    showLoginLink.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah perilaku default tautan
        // Sembunyikan formulir registrasi dan tampilkan formulir login
        registerContainer.classList.remove('active');
        loginContainer.classList.add('active');
    });
    
    // Tambahkan event listener untuk tombol "Kembali ke Home"
    backToHomeButton.addEventListener('click', function() {
        // Arahkan pengguna ke halaman home
        window.location.href = 'index.html'; // Ganti 'index.html' dengan halaman home yang sesuai
    });
    
    // Tambahkan event listener untuk formulir registrasi
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir secara default
        // Ambil nilai dari input registrasi
        let name = document.getElementById('registerName').value.trim();
        let email = document.getElementById('registerEmail').value.trim();
        let password = document.getElementById('registerPassword').value.trim();
    
        // Validasi data registrasi
        if (name === '' || email === '' || password === '') {
            alert('Mohon lengkapi semua field'); // Tampilkan pesan jika ada field yang kosong
            return;
        }
    
        // Proses atau simpan data registrasi ke server bisa dilakukan di sini
        console.log('Data registrasi:', name, email, password); // Debugging
        alert('Registrasi berhasil!'); // Tampilkan pesan berhasil
        document.getElementById('registerForm').reset(); // Reset formulir registrasi
    
        // Setelah berhasil registrasi, arahkan pengguna ke formulir login
        loginContainer.classList.add('active');
        registerContainer.classList.remove('active');
    });
    
    // Tambahkan event listener untuk formulir login
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir secara default
        // Ambil nilai dari input login
        let email = document.getElementById('loginEmail').value.trim();
        let password = document.getElementById('loginPassword').value.trim();
    
        // Validasi data login
        if (email === '' || password === '') {
            alert('Mohon lengkapi semua field'); // Tampilkan pesan jika ada field yang kosong
            return;
        }
    
        // Simulasi proses login
        console.log('Data login:', email, password); // Debugging
        alert('Login berhasil!'); // Tampilkan pesan berhasil
    
        // Setelah berhasil login, arahkan pengguna ke halaman "home"
        window.location.href = 'index.html'; // Ganti 'index.html' dengan halaman yang sesuai
        document.getElementById('loginForm').reset(); // Reset formulir login
    });
});

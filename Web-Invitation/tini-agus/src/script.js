

const countDownDate = new Date("Dec 22, 2024 00:00:00").getTime()

const x = setInterval(function () {
    const nowDate = new Date().getTime()

    const distance = countDownDate - nowDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60 )) / 1000)

    document.getElementById("Days").innerHTML = days;
    document.getElementById("Hours").innerHTML = hours;
    document.getElementById("Minutes").innerHTML = minutes;
    document.getElementById("Seconds").innerHTML = seconds;
}, 1000)



// Salin Rekning
document.getElementById('copyButton').addEventListener('click', function() {
    // Pilih elemen paragraf
    var rekeningNumber = document.getElementById('rekeningNumber').textContent;

    // Salin teks ke clipboard
    navigator.clipboard.writeText(rekeningNumber)
        .then(() => {
            // Jika berhasil menyalin
            document.getElementById('statusMSG').textContent = 'Nomor rekening berhasil disalin!';
        })
        .catch((err) => {
            // Jika terjadi kesalahan
            document.getElementById('statusMSG').textContent = 'Gagal menyalin nomor rekening.';
            console.error('Gagal menyalin teks: ', err);
        });
});


// Reservasi Whatssapp

function kirimWhatsApp() {
    var nama = document.getElementById('nama').value;
    var alamat = document.getElementById('alamat').value;
    var konfirmasi = document.querySelector('input[name="konfirmasi"]:checked').value;

    if (konfirmasi === 'Tidak_hadir') {
        var konfirmasi = "Maaf, saya tidak bisa hadir"
    } else if (konfirmasi === '1') {
        var konfirmasi = "1 Orang"
    } else if (konfirmasi === '2') {
        var konfirmasi = "2 Orang"
    } else if (konfirmasi === 'lebih') {
        var konfirmasi = 'Lebih dari 2 Orang'
    }

    var nomorWA = '6281382820300'; // Ganti dengan nomor WhatsApp tujuan
    var pesan = `Nama : *${nama}*,\n Alamat: ${alamat}. \n Konfirmasi kehadiran: ${konfirmasi}.`;    


    var urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    // Buka URL WhatsApp di tab baru
    window.open(urlWA, '_blank');
}


// open invitation
document.addEventListener("DOMContentLoaded", function() {
    // Lock scroll on page load
    document.body.classList.add("no-scroll");

    // Unlock scroll when button is clicked
    document.getElementById("open-invitation").addEventListener("click", function() {
        document.body.classList.remove("no-scroll");
    });
});

// menangkap paramater pada url
    // Function to get the 'to' parameter from the URL
    function getInviteeName() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('to') || 'Tamu Undangan'; // Default name if 'to' is not provided
    }

    // Inject the invitee name into the HTML content
    document.addEventListener("DOMContentLoaded", function () {
        const inviteeName = getInviteeName();
        const inviteeNameElement = document.getElementById('tamu-undangan');
        if (inviteeNameElement) {
            inviteeNameElement.textContent = inviteeName;
        }
    });

    // membuat website ketika di refresh langsung ke page pertama/halaman atas
    window.onload = function () {
      window.scrollTo(0, 0);
    };


    const musicButton = document.getElementById('music')
    const navigation = document.getElementById('navigation')
    const musicAudio = document.getElementById('music-audio') 
    const isiMusic = document.getElementById('isi-music')
    const isiIcon = document.getElementById('isi-icon')
    let isPlaying = false;

    document.getElementById('open-invitation').addEventListener('click', function() {
        musicButton.classList.remove('hidden')
        musicButton.classList.add('fade-up')
        musicButton.classList.add('flex')


        navigation.classList.remove('hidden')
        navigation.classList.add('fade-up')

        musicAudio.play()
    })

    musicButton.addEventListener('click', function () {
        if (!isPlaying) {
            musicAudio.play()
            isiIcon.classList.remove('fa-pause')
            isiIcon.classList.add('fa-music')
          } else {
            musicAudio.pause()
            isiIcon.classList.remove('fa-music')
            isiIcon.classList.add('fa-pause')
          }
          isPlaying = !isPlaying;
    })


    window.addEventListener('scroll', function(){
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.innerHeight + window.scrollY;


        if (scrollPosition >= scrollHeight - 500) {
            navigation.classList.add("fade-down");
            // navigation.classList.add("opacity-0");

          } else {
            navigation.classList.remove("fade-down");
          }


    })

    // window.addEventListener('scroll', function(){
    //     const scrollatas = window.scrollY

    //     if (scrollatas >= 500) {
    //         navigation.classList.add('fade-down')
    //     } else {
    //         navigation.classList.remove("fade-down");

    //     }

    // })
    



// image slider

const images = ["public/Galery/IMG_1862_copy_1.jpg", 
                "public/Galery/IMG_1905-Edit.jpg", 
                "public/Galery/IMG_1971_copy_1.jpg",
                "public/Galery/IMG_1779-Edit.jpg",
                "public/Galery/IMG_2011_copy_1.jpg",
                "public/Galery/IMG_2390.JPEG.jpg",
                "public/Galery/IMG_2041-Edit-2.jpg",
                "public/Galery/IMG_2391.JPEG.jpg",
                "public/Galery/IMG_1819-Edit.jpg",
                "public/Galery/IMG_1575.jpg"]

let currentIndex = 0;


        // Fungsi untuk membuka lightbox dan menampilkan gambar sesuai indeks yang diklik
        function openLightbox(index) {
            currentIndex = index;  // Menyimpan indeks gambar yang diklik
            updateImage();          // Memperbarui gambar di lightbox
            // Menyembunyikan galeri dan menampilkan lightbox
            // document.getElementById('gallerys').classList.add('hidden');
            document.getElementById('lightbox').classList.remove('hidden');
        }

        // Fungsi untuk menutup lightbox dan kembali menampilkan galeri
        function closeLightbox() {
            // document.getElementById('gallerys').classList.remove('hidden');  // Menampilkan galeri
            document.getElementById('lightbox').classList.add('hidden');    // Menyembunyikan lightbox
        }

        // Fungsi untuk memperbarui gambar di lightbox berdasarkan indeks saat ini
        function updateImage() {
            const imageElement = document.getElementById('lightbox-image');   // Mengambil elemen gambar di lightbox
            const counterElement = document.getElementById('image-counter');  // Mengambil elemen counter
            imageElement.src = images[currentIndex];                          // Mengubah sumber gambar
            counterElement.textContent = `${currentIndex + 1} / ${images.length}`;  // Memperbarui teks counter
        }

        // Fungsi untuk menampilkan gambar berikutnya
        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;  // Menambah indeks dengan modular agar tidak melebihi batas
            updateImage();  // Memperbarui gambar di lightbox
        }

        // Fungsi untuk menampilkan gambar sebelumnya
        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;  // Mengurangi indeks dengan modular
            updateImage();  // Memperbarui gambar di lightbox
        }
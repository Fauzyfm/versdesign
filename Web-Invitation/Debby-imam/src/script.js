// membuat website ketika di refresh langsung ke page pertama/halaman atas
window.onload = function () {
    window.scrollTo(0, 0);
};

// Hapus fragment dari URL saat halaman dimuat
window.addEventListener('load', function () {
    if (window.location.hash) {
        // Simpan fragment untuk digunakan jika diperlukan
        const fragment = window.location.hash;

        // Hapus fragment dari URL
        history.replaceState(null, document.title, window.location.pathname + window.location.search);

        // Optional: jika ingin langsung scroll ke posisi fragment setelah fragment dihapus
        // Uncomment baris di bawah ini
        // document.querySelector(fragment)?.scrollIntoView();
    }
});


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

// RSVP Function connect to WhatsApp

function kirimWhatsApp() {
    var nama = document.getElementById('nama').value;
    var alamat = document.getElementById('alamat').value;
    var konfirmasi = document.querySelector('input[name="konfirmasi"]:checked').value;

    if (konfirmasi === 'tidak-hadir') {
        var konfirmasi = "Maaf, saya tidak bisa hadir"
    } else if (konfirmasi === '1') {
        var konfirmasi = "1 Orang"
    } else if (konfirmasi === '2') {
        var konfirmasi = "2 Orang"
    } else if (konfirmasi === 'lebih') {
        var konfirmasi = 'Lebih dari 2 Orang'
    }

    var nomorWA = '6285155217688'; // Ganti dengan nomor WhatsApp tujuan
    var pesan = `----- Hallo Kak Debby dan Kak Imam\nNama : *${nama}*,\nAlamat: ${alamat}. \nKonfirmasi kehadiran: ${konfirmasi}.`;    


    var urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    // Buka URL WhatsApp di tab baru
    window.open(urlWA, '_blank');
}
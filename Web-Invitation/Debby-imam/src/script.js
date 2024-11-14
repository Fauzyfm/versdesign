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

// membuat website ketika di refresh langsung ke page pertama/halaman atas
window.onload = function () {
    window.scrollTo(0, 0);
};

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
import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, push } from "firebase/database";
// import bgSectionUmum from "../src/invitation-website/Tini-Agus/Asset/bgSectionUmum.jpg";

// Define the type for comments
type Comment = {
  name: string;
  message: string;
  timestamp: string;
};

const TiniAgus = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [comments, setComments] = useState<Comment[]>([]);
  const [inviteeName, setInviteeName] = useState("Tamu Undangan");

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);

    // Countdown Timer
    const countDownDate = new Date("Dec 22, 2024 00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    // Load invitee name from URL
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("to");
    if (name) setInviteeName(decodeURIComponent(name));

    // Firebase initialization
    const firebaseConfig = {
      apiKey: "AIzaSyBgvt09MQ7I5FGZT6ADjnJ5VEdPFuggipQ",
      authDomain: "tini-agus-web-invitation.firebaseapp.com",
      databaseURL: "https://tini-agus-web-invitation-default-rtdb.firebaseio.com/",
      projectId: "tini-agus-web-invitation",
      storageBucket: "tini-agus-web-invitation.firebasestorage.app",
      messagingSenderId: "81413055593",
      appId: "1:81413055593:web:346652fc4f52d01a392ef8",
      measurementId: "G-JLPBCNSYQN",
    };
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    // Load comments from Firebase
    const commentsRef = ref(database, "comments");
    onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      const loadedComments: Comment[] = [];
      for (const key in data) {
        loadedComments.push(data[key]);
      }
      setComments(loadedComments);
    });

    return () => clearInterval(timer);
  }, []);

  const toggleMusic = () => {
    const musicAudio = document.getElementById("music-audio") as HTMLAudioElement;
    if (musicAudio) {
      if (isMusicPlaying) {
        musicAudio.pause();
      } else {
        musicAudio.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  const handleWhatsAppReservation = () => {
    const nama = (document.getElementById("nama") as HTMLInputElement)?.value || "";
    const alamat = (document.getElementById("alamat") as HTMLInputElement)?.value || "";
    const konfirmasi = document.querySelector<HTMLInputElement>('input[name="konfirmasi"]:checked')?.value || "";

    const konfirmasiText =
      konfirmasi === "Tidak_hadir"
        ? "Maaf, saya tidak bisa hadir"
        : konfirmasi === "1"
        ? "1 Orang"
        : konfirmasi === "2"
        ? "2 Orang"
        : "Lebih dari 2 Orang";

    const nomorWA = "6281382820300";
    const pesan = `Halo Kak Tini dan Kak Agus\nTerimakasih atas undangan yang telah diberikan.\nKami dengan senang hati mengonfirmasi kehadiran pada acara pernikahan kalian:\nNama : *${nama}*\nAlamat: *${alamat}*\nKonfirmasi kehadiran: *${konfirmasiText}*\n\nTerimakasih, Selamat menempuh kehidupan Baru ^_^`;

    const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    window.open(urlWA, "_blank");
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameInput = (document.getElementById("nameInput") as HTMLInputElement)?.value.trim();
    const messageInput = (document.getElementById("messageInput") as HTMLTextAreaElement)?.value.trim();

    if (nameInput && messageInput) {
      const firebaseConfig = {
        apiKey: "AIzaSyBgvt09MQ7I5FGZT6ADjnJ5VEdPFuggipQ",
        authDomain: "tini-agus-web-invitation.firebaseapp.com",
        databaseURL: "https://tini-agus-web-invitation-default-rtdb.firebaseio.com/",
        projectId: "tini-agus-web-invitation",
        storageBucket: "tini-agus-web-invitation.firebasestorage.app",
        messagingSenderId: "81413055593",
        appId: "1:81413055593:web:346652fc4f52d01a392ef8",
        measurementId: "G-JLPBCNSYQN",
      };
      const app = initializeApp(firebaseConfig);
      const database = getDatabase(app);

      const commentsRef = ref(database, "comments");
      const timestamp = new Date().toLocaleString();
      push(commentsRef, { name: nameInput, message: messageInput, timestamp });

      alert("Ucapan berhasil dikirim!");
      (document.getElementById("nameInput") as HTMLInputElement).value = "";
      (document.getElementById("messageInput") as HTMLTextAreaElement).value = "";
    } else {
      alert("Harap isi nama dan ucapan!");
    }
  };

  const closeLightbox = () => {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
      lightbox.classList.add("hidden");
    }
  };

  const prevImage = () => {
    console.log("Previous image");
  };

  const nextImage = () => {
    console.log("Next image");
  };

  return (
    <div className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Font Playball */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playball&display=swap"
          rel="stylesheet"
        />

        {/* Font Cinzel */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Playball&display=swap"
          rel="stylesheet"
        />

        {/* Font Inter */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />

        {/* Font EB Garmond */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap"
          rel="stylesheet"
        />

        {/* Font Playfair Display */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Sacramento&family=The+Nautigal:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Font Volkhov */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Playball&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Sacramento&family=The+Nautigal:wght@400;700&family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />

        {/* Font Raleway */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Sacramento&family=The+Nautigal:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Font The Naugtigal */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Sacramento&family=The+Nautigal:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Font Cinzel Decorative */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Playball&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Sacramento&family=The+Nautigal:wght@400;700&family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />

        {/* Font Sanchez */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Playball&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Sacramento&family=Sanchez:ital@0;1&family=The+Nautigal:wght@400;700&family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />

        {/* FontAwesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Share Whatsapp */}
        <meta property="og:title" content="The Wedding of Tini & Agus" />
        <meta property="og:description" content="Minggu, 22 Desember 2024" />
        <meta
          property="og:image"
          content="/invitation-website/Tini-Agus/Asset/gallery/5-1.jpg"
        />
        <meta
          property="og:url"
          content="https://versdesign.com/Web-Invitation/tini-agus"
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://versdesign.com/Web-Invitation/tini-agus"
        />

        {/* No Cache */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />

        {/* AOS */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />

        {/* TailwindCSS */}
        <link href="src/output.css" rel="stylesheet" />

        <title>Tini & Agus</title>
      </head>
      <body className="bg-slate-600 overflow-x-hidden">
        <div className="lg:flex relative justify-center">
          {/* Left Content */}
          <div
            className="sticky top-0 bg-biruGelap w-full hidden lg:block lg:w-[75%] h-screen bg-cover bg-center"
            style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/gallery/5-1.jpg)" }}
          ></div>

          {/* Right Content */}
          <div className="overflow-x-hidden relative flex justify-center items-center">
            <div className="mx-auto max-w-md h-auto overflow-y-hidden relative">
              {/* Navigation */}
              <div className="flex flex-wrap">
                {/* Music Button */}
                <div
                  id="music"
                  className="rounded-full w-[40px] h-[40px] hidden text-center justify-center items-center bg-emas shadow-xl fixed left-[15px] bottom-20 z-20 cursor-pointer"
                  onClick={toggleMusic}
                >
                  {isMusicPlaying ? (
                    <img id="disk" className="rotate-box" src="/invitation-website/Tini-Agus/Asset/music-disk-logo.png" alt="Pause" />
                  ) : (
                    <img id="play" src="/invitation-website/Tini-Agus/Asset/play-button.png" alt="Play" />
                  )}
                  <audio id="music-audio" src="/invitation-website/Tini-Agus/Asset/star.mp3"></audio>
                </div>

                {/* Navbar */}
                <div
                  id="navigation"
                  className="w-[300px] mx-auto h-[50px] bg-biruGelap rounded-lg fixed bottom-3 left-1 right-1 z-20 hidden shadow-xl border-white border lg:max-w-md bg-cover bg-top"
                  style={{
                    backgroundImage: "url(/invitation-website/Tini-Agus/Asset/hiasan-atas-bg-bawah.png)",
                  }}
                >
                  <ul className="flex justify-center items-center gap-8 h-full text-white">
                    {/* Home */}
                    <li className="text-center cursor-pointer hover:text-birdong transition-all duration-200 flex justify-center items-center">
                      <a href="#home">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>
                      </a>
                    </li>
                    {/* Love */}
                    <li className="text-center cursor-pointer hover:text-birdong transition-all duration-200 flex justify-center items-center">
                      <a href="#love">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                      </a>
                    </li>
                    {/* Tanggal */}
                    <li className="text-center cursor-pointer hover:text-birdong transition-all duration-200 flex justify-center items-center">
                      <a href="#tanggal">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                          />
                        </svg>
                      </a>
                    </li>
                    {/* Gallery */}
                    <li className="text-center cursor-pointer hover:text-birdong transition-all duration-200 flex justify-center items-center">
                      <a href="#gallery">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>
                      </a>
                    </li>
                    {/* RSVP */}
                    <li className="text-center cursor-pointer hover:text-birdong transition-all duration-200 flex justify-center items-center">
                      <a href="#rsvp-comment">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 1 - Cover */}
              <div
                id="home"
                className="bg-cover bg-top bg-no-repeat bg-biruGelap w-full h-screen p-4 relative overflow-hidden flex flex-col justify-center items-center"
                style={{ backgroundImage: `url('/invitation-website/Tini-Agus/Asset/bgSectionUmum'})` }}
              >
                {/* Hiasan Atas */}
                <div className="absolute top-0" data-aos="fade-down" data-aos-duration="850" data-aos-offset="0">
                  <div className="w-full h-[100px]">
                    <img src="/invitation-website/Tini-Agus/Asset/hiasan-atas-bg.png" alt="" />
                  </div>
                </div>

                {/* Isi */}
                <div className="flex flex-col justify-evenly items-center relative -mt-[20px]">
                  {/* Top Design */}
                  <div className="mx-auto text-center flex flex-col justify-center items-center" data-aos="zoom-in">
                    <p className="text-cklt font-times text-[20px]">The Wedding Of</p>
                  </div>

                  {/* Bottom Design */}
                  <div className="flex flex-col justify-center items-center">
                    <div className="mb-[15px] mt-[30px]">
                      <div className="capitalize text-center text-cklt">
                        <div className="flex justify-center items-center gap-3 text-[32px] font-bold">
                          <p className="font-cinzel" data-aos="zoom-in">Tini</p>
                          <p className="font-cinzel" data-aos="zoom-in">&</p>
                          <p className="font-cinzel ml-[7px]" data-aos="zoom-in">Agus</p>
                        </div>
                        <p className="font-playfair text-[14px] mt-[25px]" data-aos="zoom-in">Kpd Yth.</p>
                        <p className="font-playfair text-[14px] mt-[5px]" data-aos="zoom-in">Bapak/Ibu/Saudara/I</p>
                        <p id="tamu-undangan" className="text-[16px] font-playfair mt-[15px] text-white" data-aos="zoom-in">{inviteeName}</p>
                      </div>
                    </div>
                    <a
                      id="open-invitation"
                      href="#section2"
                      className="bg-cklt flex gap-1 justify-center items-center font-playfair text-white py-2 px-3 cursor-pointer lg:text-sm rounded-xl hover:bg-white hover:text-cklt hover:border-cklt hover:border-5 shadow-lg transition-all duration-300"
                      data-aos="zoom-in"
                      data-aos-offset="10"
                    >
                      Buka Undangan
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Hiasan Bawah */}
                <div className="absolute bottom-0">
                  <div className="w-full h-[105px]" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="0">
                    <img src="/invitation-website/Tini-Agus/Asset/hiasan-bawah-background.png" alt="" />
                  </div>
                </div>
                {/* Wayang */}
                <div className="flex justify-center items-center gap-[25px] absolute ml-[20px] -bottom-[80px]">
                  {/* Wayang Pria */}
                  <div className="w-[120px] h-[265px] md:w-[147px] opacity-80" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="0">
                    <img src="/invitation-website/Tini-Agus/Asset/wayang-pria-web.webp" alt="" />
                  </div>
                  {/* Wayang Wanita */}
                  <div className="w-[150px] h-[220px] md:w-[172px] md:h-[246px] opacity-80" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="0">
                    <img src="/invitation-website/Tini-Agus/Asset/wayang-wanita-2-web.webp" alt="" />
                  </div>
                </div>
              </div>

              {/* Section 2 - Pembukaan */}
              <div
                id="section2"
                className="bg-cover bg-center w-full h-[844px] relative pt-[78px] bg-biruGelap overflow-hidden flex flex-col justify-center items-center"
                style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/bg-section-umum.jpg)" }}
              >
                {/* Hiasan Atas */}
                <div className="absolute top-0" data-aos="fade-down" data-aos-duration="850">
                  <div className="w-full h-[130px]">
                    <img src="/invitation-website/Tini-Agus/Asset/hiasan-atas-bg.png" alt="" />
                  </div>
                </div>

                {/* Isi */}
                <div className="mt-8 flex flex-col shadow-2xl w-[317px] h-[559px] rounded-2xl mx-auto text-center justify-around items-center gap-5 bg-biruGelap">
                  <div
                    className="bg-white w-full h-[300px] rounded-t-2xl bg-cover bg-no-repeat bg-center"
                    style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/gallery/7.jpg)" }}
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  ></div>
                  <p className="text-center px-[18px] text-xs text-white mt-[20px]" data-aos="zoom-in" data-aos-duration="1500">
                    “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir"
                  </p>
                  <p className="font-bold font-inter pb-4 text-white flex justify-center items-center gap-2" data-aos="zoom-in" data-aos-duration="1500">
                    (QS. Ar - Rum : ٢١)
                  </p>
                </div>

                {/* Hiasan Bawah */}
                <div className="w-[170px] h-[32px] flex justify-center items-center absolute bottom-[30px]" data-aos="fade-up" data-aos-duration="850">
                  <img src="/invitation-website/Tini-Agus/Asset/hiasan-garis-bawah.png" alt="" />
                </div>
              </div>

              {/* Section 3 - Bride & Groom */}
              <div
                id="love"
                className="relative w-full h-[844px] bg-cover bg-bottom overflow-hidden bg-birdong flex flex-col justify-center items-center"
                style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/bg-section-umum.jpg)" }}
              >
                {/* Hiasan Atas */}
                <div className="absolute top-[20px] flex justify-center items-center w-[170px] h-[32px]" data-aos="fade-down" data-aos-duration="850">
                  <img src="/invitation-website/Tini-Agus/Asset/hiasan-garis-atas.png" alt="" />
                </div>

                <div className="relative flex flex-col justify-center items-center gap-[40px]">
                  {/* Bride */}
                  <div className="flex flex-col justify-center gap-2 items-center" data-aos="fade-up">
                    <div>
                      <p className="text-center text-[32px] text-white font-sanchez font-black">The Bride</p>
                    </div>
                    {/* Bingkai */}
                    <div
                      className="bg-cover bg-center w-[170px] h-[179px] flex flex-wrap justify-center items-center"
                      style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/bride-2.png)" }}
                    ></div>
                    {/* Keterangan */}
                    <div className="flex flex-col justify-center item-center text-white text-center gap-2" data-aos="fade-up">
                      <p className="font-volkhov font-bold text-[20px]">TINI SAPUTRI</p>
                      <p className="text-[20px] font-times">Putri dari</p>
                      <p className="px-[30px] text-[14px] font-times">Bapak Tarudi (Alm) & Ibu Suharti (Almh)</p>
                    </div>
                  </div>

                  {/* Groom */}
                  <div className="flex flex-col justify-center gap-2 items-center" data-aos="fade-up" data-aos-duration="1500">
                    <div>
                      <p className="text-center text-[32px] text-white font-sanchez font-black">The Groom</p>
                    </div>
                    {/* Bingkai */}
                    <div
                      className="bg-cover bg-center w-[170px] h-[179px] flex flex-wrap justify-center items-center"
                      style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/groom-1.png)" }}
                    ></div>
                    {/* Keterangan */}
                    <div className="flex flex-col justify-center item-center text-white text-center gap-2" data-aos="fade-up">
                      <p className="font-volkhov font-bold text-[20px]">AGUS APRIANTO</p>
                      <p className="text-[20px] font-times">Putra dari</p>
                      <p className="px-[30px] text-[14px] font-times">Bapak Munadi (Alm) & Ibu Sartiyah</p>
                    </div>
                  </div>
                </div>

                {/* Hiasan Bawah */}
                <div className="absolute bottom-[20px] flex justify-center items-center w-[170px] h-[32px]" data-aos="fade-up" data-aos-duration="850">
                  <img src="/invitation-website/Tini-Agus/Asset/hiasan-garis-bawah.png" alt="" />
                </div>
              </div>

              {/* Section 4 - Save The Date */}
              <div
                className="relative w-full h-[844px] bg-biruGelap overflow-hidden bg-center bg-cover flex flex-col justify-center items-center"
                style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/bg-section-umum.jpg)" }}
              >
                <div id="tanggal" className="w-full flex flex-col justify-center items-center gap-[20px] relative">
                  {/* Hiasan Atas */}
                  <div className="top-[20px] flex justify-center items-center w-[170px] h-[32px]" data-aos="fade-down" data-aos-duration="850">
                    <img src="/invitation-website/Tini-Agus/Asset/hiasan-garis-atas.png" alt="" />
                  </div>

                  <div className="flex flex-col justify-center items-center gap-[60px]">
                    {/* Top Design */}
                    <div className="flex flex-col justify-center items-center gap-[20px]">
                      <div className="flex flex-col font-nautigal justify-center text-center text-[64px] text-white" data-aos="zoom-in" data-aos-duration="850">
                        <p>Save The</p>
                        <p className="-mt-[45px]">Date</p>
                      </div>
                      <div className="text-white font-times text-[20px] text-center" data-aos="zoom-in" data-aos-duration="850">
                        <p>For The Wedding Of</p>
                      </div>
                      <div className="flex justify-center items-center gap-2 text-[32px] font-bold text-cklt">
                        <p className="font-cinzel" data-aos="zoom-in">Tini</p>
                        <p className="font-cinzel" data-aos="zoom-in">&</p>
                        <p className="font-cinzel" data-aos="zoom-in">Agus</p>
                      </div>
                    </div>

                    {/* Bottom Design */}
                    <div className="w-[336px] flex flex-col justify-center items-center">
                      <div className="flex gap-[5px] font-bold" data-aos="zoom-in" data-aos-duration="850">
                        <div className="text-white font-inter text-[40px]">
                          <p>22</p>
                        </div>
                        <div className="flex flex-col justify-center items-start text-[18px] text-white">
                          <p>Minggu,</p>
                          <p className="-mt-[5px]">Desember 2024</p>
                        </div>
                      </div>

                      {/* Rundown Time */}
                      <div className="w-full h-[109px] bg-transparent flex justify-center gap-2 items-center" data-aos="zoom-in" data-aos-duration="850" data-aos-offset="10">
                        <div className="w-[80px] h-[109px] bg-transparent font-bold font-inter rounded-lg flex flex-col justify-center items-center text-center text-white border border-white">
                          <p id="Days" className="text-[25px]">{countdown.days}</p>
                          <p>Hari</p>
                        </div>
                        <div className="w-[80px] h-[109px] bg-transparent font-bold font-inter rounded-lg flex flex-col justify-center items-center text-center text-white border border-white">
                          <p id="Hours" className="text-[25px]">{countdown.hours}</p>
                          <p>Jam</p>
                        </div>
                        <div className="w-[80px] h-[109px] bg-transparent font-bold font-inter rounded-lg flex flex-col justify-center items-center text-center text-white border border-white">
                          <p id="Minutes" className="text-[25px]">{countdown.minutes}</p>
                          <p>Menit</p>
                        </div>
                        <div className="w-[80px] h-[109px] bg-transparent font-bold font-inter rounded-lg flex flex-col justify-center items-center text-center text-white border border-white">
                          <p id="Seconds" className="text-[25px]">{countdown.seconds}</p>
                          <p>Detik</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hiasan Bawah */}
                  <div className="bottom-[20px] flex justify-center items-center w-[170px] h-[32px]" data-aos="fade-up" data-aos-duration="850">
                    <img src="/invitation-website/Tini-Agus/Asset/hiasan-garis-bawah.png" alt="" />
                  </div>
                </div>
              </div>

              {/* Section 5 - Wedding Event */}
              <div
                className="relative w-full h-[844px] bg-biruGelap overflow-hidden bg-center bg-cover flex flex-col justify-start items-center"
                style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/bg-section-umum.jpg)" }}
              >
                {/* Hiasan Atas */}
                <div className="absolute top-[20px] flex justify-center items-center w-[170px] h-[32px]" data-aos="fade-down" data-aos-duration="850">
                  <img src="/invitation-website/Tini-Agus/Asset/hiasan-garis-atas.png" alt="" />
                </div>

                {/* Isi */}
                <div className="flex flex-col justify-evenly items-center gap-[90px] mt-[80px]">
                  {/* Top Design */}
                  <div className="flex justify-center items-center text-[64px] font-nautigal text-white" data-aos="zoom-in" data-aos-duration="850">
                    <p>Wedding Event</p>
                  </div>

                  {/* Mid Design */}
                  <div className="flex flex-col justify-center items-center text-white font-times gap-[20px]">
                    <div className="text-[20px] flex flex-col justify-center items-center" data-aos="zoom-in" data-aos-duration="850">
                      <p>Akad Nikah</p>
                      <p>10.00 s/d 11.00 WIB</p>
                    </div>
                    <div className="text-[20px] flex flex-col justify-center items-center" data-aos="zoom-in" data-aos-duration="850">
                      <p>Ramah Tamah</p>
                      <p>11.00 s/d 13.00 WIB</p>
                    </div>
                  </div>

                  {/* Bottom Design */}
                  <div className="flex flex-col justify-center place-items-center text-white font-times gap-[20px]">
                    <div className="flex flex-col justify-center items-center gap-[10px]" data-aos="zoom-in" data-aos-duration="850">
                      <p className="text-[22px]">BUNI MANTEN, CIPUTAT</p>
                      <p className="text-[14px] px-[80px] text-center">Jl. Kihajar Dewantara, Sawah Lama, Ciputat, Tangerang Selatan</p>
                    </div>

                    <div className="flex flex-col justify-center items-center" data-aos="zoom-in" data-aos-duration="850">
                      <a href="https://maps.app.goo.gl/aTbCBJr9K7AcrT1z8?g_st=iw" target="_blank" rel="noopener noreferrer">
                        <button className="py-2 px-[20px] bg-abu text-birdong border-birdong border-2 rounded-md hover:bg-birdong hover:text-abu transition-all duration-300">
                          Open on Google Maps
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hiasan Bawah */}
                <div className="absolute bottom-[20px] flex justify-center items-center w-[170px] h-[32px]" data-aos="fade-up" data-aos-duration="850">
                  <img src="/invitation-website/Tini-Agus/Asset/hiasan-garis-bawah.png" alt="" />
                </div>
              </div>

              {/* Section 6 - Gallery */}
              <div
                id="gallery"
                className="relative w-full h-[844px] bg-biruGelap overflow-hidden bg-center bg-cover flex flex-col justify-start items-center"
                style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/bg-section-umum.jpg)" }}
              >
                {/* Hiasan Atas */}
                <div className="absolute top-[20px] flex justify-center items-center w-[170px] h-[32px]" data-aos="fade-down" data-aos-duration="850">
                  <img src="/invitation-website/Tini-Agus/Asset/hiasan-garis-atas.png" alt="" />
                </div>

                {/* Isi */}
                <div className="flex flex-col justify-center items-center gap-[30px] mt-[80px]">
                  <div className="text-white font-nautigal text-[54px]" data-aos="zoom-in" data-aos-duration="850">
                    <p>Our Gallery</p>
                  </div>

                  <div className="w-[317px] h-auto flex flex-wrap gap-[17px]">
                    {/* Img 1 */}
                    <div
                      className="w-[95px] h-[146px] rounded-lg overflow-hidden group bg-center bg-cover hover:scale-95 cursor-pointer"
                      data-aos="zoom-in"
                      data-aos-duration="850"
                    >
                      <div
                        className="w-full h-full bg-birdong bg-center bg-cover transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-6"
                        style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/gallery/2.webp)" }}
                      ></div>
                    </div>

                    {/* Img 2 */}
                    <div
                      className="w-[205px] h-[146px] rounded-lg overflow-hidden group bg-top bg-cover hover:scale-95 cursor-pointer"
                      data-aos="zoom-in"
                      data-aos-duration="850"
                    >
                      <div
                        className="w-full h-full bg-birdong bg-top bg-cover transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-6"
                        style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/gallery/9.jpeg)" }}
                      ></div>
                    </div>

                    {/* Img 3 */}
                    <div
                      className="w-[205px] h-[146px] rounded-lg overflow-hidden group bg-top bg-cover hover:scale-95 cursor-pointer"
                      data-aos="zoom-in"
                      data-aos-duration="850"
                    >
                      <div
                        className="w-full h-full bg-birdong bg-top bg-cover transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-6"
                        style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/gallery/6.jpeg)" }}
                      ></div>
                    </div>

                    {/* Img 4 */}
                    <div
                      className="w-[95px] h-[146px] rounded-lg overflow-hidden group bg-center bg-cover hover:scale-95 cursor-pointer"
                      data-aos="zoom-in"
                      data-aos-duration="850"
                    >
                      <div
                        className="w-full h-full bg-birdong bg-center bg-cover transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-6"
                        style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/gallery/4.webp)" }}
                      ></div>
                    </div>

                    {/* Img 5 */}
                    <div
                      className="w-[95px] h-[146px] rounded-lg overflow-hidden group bg-center bg-cover hover:scale-95 cursor-pointer"
                      data-aos="zoom-in"
                      data-aos-duration="850"
                    >
                      <div
                        className="w-full h-full bg-birdong bg-center bg-cover transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-6"
                        style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/gallery/1-1.jpg)" }}
                      ></div>
                    </div>

                    {/* Img 6 */}
                    <div
                      className="w-[205px] h-[146px] rounded-lg overflow-hidden group bg-center bg-cover hover:scale-95 cursor-pointer"
                      data-aos="zoom-in"
                      data-aos-duration="850"
                    >
                      <div
                        className="w-full h-full bg-birdong bg-center bg-cover transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-6"
                        style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/gallery/5-1.jpg)" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Hiasan Bawah */}
                <div className="absolute bottom-[20px] flex justify-center items-center w-[170px] h-[32px]" data-aos="fade-up" data-aos-duration="850">
                  <img src="/invitation-website/Tini-Agus/Asset/hiasan-garis-bawah.png" alt="" />
                </div>
              </div>

              {/* Section 7 - Quotes */}
              <div
                className="relative w-full h-[844px] bg-biruGelap overflow-hidden bg-center bg-cover flex flex-col justify-center items-center"
                style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/bg-section-umum.jpg)" }}
              >
                {/* Hiasan Atas */}
                <div className="absolute top-[20px] flex justify-center items-center w-[170px] h-[32px]" data-aos="fade-down" data-aos-duration="850">
                  <img src="/invitation-website/Tini-Agus/Asset/hiasan-garis-atas.png" alt="" />
                </div>

                <div className="flex justify-center items-center text-center text-white font-playfair text-[26px]" data-aos="zoom-in" data-aos-duration="850">
                  <p>When Two Hearts <br /> Find Each Other</p>
                </div>

                {/* Isi */}
                <div className="mt-8 flex flex-col shadow-2xl w-[317px] h-[450px] rounded-2xl mx-auto text-center justify-start items-center gap-5 bg-biruGelap">
                  <div
                    className="bg-white w-full h-[230px] rounded-2xl bg-cover bg-no-repeat bg-center"
                    style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/gallery/10.jpg)" }}
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  ></div>
                  <p className="text-center px-3 text-[18px] font-times text-white mt-[20px]" data-aos="zoom-in" data-aos-duration="1500">
                    Allah tak akan mempertemukan kita dengan seseorang tanpa sebab <br /> Everything must be a reason
                  </p>
                  <p className="font-bold font-inter pb-4 text-white flex justify-center items-center gap-2" data-aos="zoom-in" data-aos-duration="1500">
                    - Wonosobo
                  </p>
                </div>

                {/* Hiasan Bawah */}
                <div className="absolute bottom-[20px] flex justify-center items-center w-[170px] h-[32px]" data-aos="fade-up" data-aos-duration="850">
                  <img src="/invitation-website/Tini-Agus/Asset/hiasan-garis-bawah.png" alt="" />
                </div>
              </div>

              {/* Section 8 - RSVP & Comment */}
              <div
                id="rsvp-comment"
                className="relative w-full h-[844px] bg-biruGelap overflow-hidden bg-top bg-cover flex flex-col justify-start items-center"
                style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/bg-section-umum.jpg)" }}
              >
                <div className="flex flex-col justify-center items-center gap-[80px]">
                  {/* Hiasan Atas */}
                  <div className="mt-[20px] flex justify-center items-center w-[170px] h-[32px]" data-aos="fade-down" data-aos-duration="850">
                    <img src="/invitation-website/Tini-Agus/Asset/hiasan-garis-atas.png" alt="" />
                  </div>

                  {/* Ucapan/Comment */}
                  <div className="flex flex-col justify-center items-center gap-[30px]" data-aos="zoom-in" data-aos-duration="850">
                    {/* Sesi ke 1 */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="font-nautigal text-[48px] text-white">
                        <p>Best Wishes</p>
                      </div>
                      <div className="font-times text-[20px] text-white">
                        <p>Kirim Ucapan dan Do'a</p>
                      </div>
                    </div>

                    {/* Button */}
                    <div id="konfirmasi-kehadiran-ucapan" className="flex flex-col justify-center items-center">
                      <div
                        id="button-konfirmasi-ucapan"
                        className="w-[282px] h-[40px] border border-merahMuda flex justify-center items-center text-center text-white hover:text-birdong hover:border-white hover:bg-white cursor-pointer transition-all duration-200"
                      >
                        <p className="flex gap-3">
                          Mulai isi sekarang
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </p>
                      </div>
                    </div>

                    {/* Isi Ucapan */}
                    <div id="isi-ucapan" className="w-[282px] h-[520px] hidden bg-biruGelap border-2 border-merahMuda shadow-2xl">
                      <div className="flex flex-col">
                        <div className="mx-[30px] mt-[30px]">
                          <form id="commentForm" onSubmit={handleCommentSubmit}>
                            {/* Input Nama */}
                            <div>
                              <input
                                className="w-full p-2 border-none mt-2 form-input"
                                type="text"
                                id="nameInput"
                                required
                                placeholder="Nama Lengkap"
                              />
                            </div>

                            {/* Input Ucapan dan Doa */}
                            <div className="mt-[5px]">
                              <textarea
                                className="w-full p-2 border-none mt-2 resize-none form-input"
                                id="messageInput"
                                required
                                placeholder="Tuliskan Ucapan doa restu"
                              ></textarea>
                            </div>

                            <div className="mt-[5px]">
                              <button
                                type="submit"
                                className="font-times w-full h-[37px] flex text-center justify-center items-center border bg-biruGelap text-white border-white hover:bg-emas hover:border-white transition-all duration-200 hover:text-white shadow-xl"
                              >
                                Kirim Ucapan
                              </button>
                            </div>
                          </form>

                          {/* Konfirmasi */}
                          <div id="commentsContainer" className="mt-[10px] w-full h-[250px] bg-white overflow-auto">
                            {comments.map((comment, index) => (
                              <div key={index} className="p-2 border-b border-gray-300">
                                <p className="font-bold">{comment.name}</p>
                                <p>{comment.message}</p>
                                <p className="text-xs text-gray-500">{comment.timestamp}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RSVP */}
                  <div className="flex flex-col justify-center items-center gap-[30px]" data-aos="zoom-in" data-aos-duration="850">
                    {/* Judul */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="font-nautigal text-[48px] text-white">
                        <p>RSVP</p>
                      </div>
                      <div className="font-times text-[20px] text-white px-[40px] text-center">
                        <p>Silahkan mengisi konfirmasi kehadiran terlebih dahulu</p>
                      </div>
                    </div>
                    {/* Button RSVP */}
                    <div id="konfirmasi-kehadiran-rsvp" className="flex flex-col justify-center items-center">
                      <div
                        id="button-konfirmasi-rsvp"
                        className="w-[282px] h-[40px] border border-merahMuda flex justify-center items-center text-center text-white hover:text-birdong hover:border-white hover:bg-white cursor-pointer transition-all duration-200"
                      >
                        <p className="flex gap-3">
                          Mulai isi sekarang
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </p>
                      </div>
                    </div>

                    {/* Isi Form */}
                    <div id="isi-rsvp" className="px-8 font-inter mt-8 hidden border-white bg-biruGelap border py-8">
                      {/* Input Nama */}
                      <div className="mb-4">
                        <label htmlFor="nama" className="block text-gold mb-2 text-white text-sm">
                          Nama :
                        </label>
                        <input
                          type="text"
                          id="nama"
                          placeholder="Masukan Nama"
                          className="w-full p-2 rounded-lg border-none shadow-md text-black"
                        />
                      </div>

                      {/* Input Alamat */}
                      <div className="mb-4">
                        <label htmlFor="alamat" className="block text-gold text-sm mb-2 text-white">
                          Alamat :
                        </label>
                        <textarea
                          id="alamat"
                          placeholder="Masukan Alamat"
                          className="w-full h-20 p-2 rounded-lg border-none shadow-md text-black resize-none"
                        ></textarea>
                      </div>

                      {/* Konfirmasi */}
                      <div className="mb-6">
                        <label className="block text-gold text-sm mb-2 text-white font-bold">Konfirmasi :</label>
                        <div className="text-left space-y-2">
                          <label className="inline-flex items-center text-white">
                            <input type="radio" name="konfirmasi" className="form-radio text-gold" value="1" />
                            <span className="ml-2 text-white text-sm">1 Orang</span>
                          </label>
                          <br />

                          <label className="inline-flex items-center text-white">
                            <input type="radio" name="konfirmasi" className="form-radio text-gold" value="2" />
                            <span className="ml-2 text-white text-sm">2 Orang</span>
                          </label>
                          <br />

                          <label className="inline-flex items-center text-white">
                            <input type="radio" name="konfirmasi" className="form-radio text-gold" value="lebih" />
                            <span className="ml-2 text-white text-sm">Lebih dari 2 Orang</span>
                          </label>
                          <br />

                          <label className="inline-flex items-center text-white">
                            <input type="radio" name="konfirmasi" className="form-radio text-gold" value="Tidak_hadir" />
                            <span className="ml-2 text-white text-sm">Maaf, Saya tidak bisa hadir</span>
                          </label>
                        </div>
                      </div>

                      {/* Tombol Reservasi */}
                      <button
                        id="konfirmasi-wa"
                        className="w-full py-2 bg-biruGelap text-white border-white border-2 font-bold rounded-full shadow-md hover:text-white hover:bg-emas transition-all duration-200"
                        onClick={handleWhatsAppReservation}
                      >
                        Reservasi Via WhatsApp
                      </button>
                    </div>
                  </div>

                  {/* Hiasan Bawah */}
                  <div className="mb-[20px] flex justify-center items-center w-[170px] h-[32px]" data-aos="fade-up" data-aos-duration="850">
                    <img src="/invitation-website/Tini-Agus/Asset/hiasan-garis-bawah.png" alt="" />
                  </div>
                </div>
              </div>

              {/* Section 9 - Love Gift & Penutup */}
              <div
                className="relative w-full h-[1000px] bg-biruGelap overflow-hidden bg-top bg-contain flex flex-col justify-start items-center"
                style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/bg-section-umum.jpg)" }}
              >
                {/* Hiasan Atas */}
                <div className="absolute top-[20px] flex justify-center items-center w-[170px] h-[32px]" data-aos="fade-down" data-aos-duration="850">
                  <img src="/invitation-website/Tini-Agus/Asset/hiasan-garis-atas.png" alt="" />
                </div>

                {/* Isi */}
                <div className="flex flex-col justify-center items-start mt-[60px]">
                  <div className="flex flex-col justify-center items-center gap-[50px]">
                    {/* Top Design */}
                    <div className="flex justify-center items-center flex-col">
                      <div className="text-white font-nautigal text-[54px]" data-aos="zoom-in" data-aos-duration="850">
                        <p>Love Gift</p>
                      </div>
                      <div className="text-white font-times text-[13px] px-[40px] text-center" data-aos="zoom-in" data-aos-duration="850">
                        <p>Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan tanda terimakasih untuk kami, dapat melalui :</p>
                      </div>
                    </div>

                    {/* Mid Design */}
                    <div className="flex flex-col justify-center items-center gap-[20px]">
                      {/* Rekening 1 */}
                      <div
                        className="w-[280px] h-[125px] mx-[15px] rounded-xl bg-biruGelap border-2 border-white flex flex-col justify-center items-center gap-2"
                        data-aos="zoom-in"
                        data-aos-duration="850"
                      >
                        <div className="bg-cover bg-center w-[80px] h-[40px]" style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/logo-bca.png)" }}></div>
                        <div className="flex gap-2 justify-center items-center ml-[40px]">
                          <p id="rekeningNumber" className="text-xl font-inter text-white font-extrabold">
                            5260694555
                          </p>
                          <button
                            id="copyButton"
                            className="flex justify-center items-center gap-1 text-white mt-1 px-2 py-1 rounded-sm hover:text-slate-800 transition-all duration-100"
                            onClick={() => copyToClipboard("5260694555")}
                          >
                            <i id="statusMSG" className="fa-solid fa-copy"></i>
                          </button>
                        </div>
                        <p className="text-xs font-inter text-white font-bold">an. Agus Aprianto</p>
                      </div>

                      {/* Rekening 2 */}
                      <div
                        className="w-[280px] h-[125px] mx-[15px] rounded-xl bg-biruGelap border-2 border-white flex flex-col justify-center items-center gap-2"
                        data-aos="zoom-in"
                        data-aos-duration="850"
                      >
                        <div className="bg-cover bg-center w-[80px] h-[40px]" style={{ backgroundImage: "url(/invitation-website/Tini-Agus/Asset/logo-bca.png)" }}></div>
                        <div className="flex gap-2 justify-center items-center ml-[40px]">
                          <p id="rekeningNumber1" className="text-xl font-inter text-white font-extrabold">
                            0670655521
                          </p>
                          <button
                            id="copyButton1"
                            className="flex justify-center items-center gap-1 text-white mt-1 px-2 py-1 rounded-sm hover:text-slate-800 transition-all duration-100"
                            onClick={() => copyToClipboard("0670655521")}
                          >
                            <i id="statusMSG1" className="fa-solid fa-copy"></i>
                          </button>
                        </div>
                        <p className="text-xs font-inter text-white font-bold">an. Tini Saputri</p>
                      </div>
                    </div>

                    {/* Bottom */}
                    <div className="justify-center items-center flex flex-col gap-[20px]">
                      <div
                        className="justify-center items-center flex flex-col text-white font-[13px] font-times px-[40px] text-center"
                        data-aos="zoom-in"
                        data-aos-duration="850"
                      >
                        <p>
                          Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/I berkenan hadir dalam hari kebahagiaan ini. Terima kasih atas segala ucapan, doa, dan perhatian yang diberikan.
                        </p>
                      </div>

                      <div className="flex flex-col justify-center items-center gap-[20px] text-white font-playfair text-[20px]" data-aos="zoom-in" data-aos-duration="850">
                        <p>See you on our special day!</p>
                      </div>
                      <div className="flex justify-center items-center gap-3 text-[32px] font-bold text-cklt">
                        <p className="font-cinzel" data-aos="zoom-in">
                          Tini
                        </p>
                        <p className="font-cinzel" data-aos="zoom-in">
                          &
                        </p>
                        <p className="font-cinzel ml-[7px]" data-aos="zoom-in">
                          Agus
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hiasan Bawah */}
                <div className="absolute bottom-0 flex justify-center items-center w-full h-[104px]" data-aos="fade-up" data-aos-duration="850">
                  <img src="/invitation-website/Tini-Agus/Asset/hiasan-atas-bg-bawah.png" alt="" />
                </div>
              </div>

              {/* Lightbox */}
              <div id="lightbox" className="hidden">
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                  <div className="relative z-10">
                    {/* Bagian Header Lightbox: Counter dan Tombol Tutup */}
                    <div className="flex justify-between items-center text-white p-4">
                      {/* Counter untuk Menunjukkan Gambar ke Berapa */}
                      <span id="image-counter">1 / 10</span>
                      <div className="flex space-x-4">
                        {/* Tombol untuk Menutup Lightbox */}
                        <i className="fas fa-times cursor-pointer" onClick={() => closeLightbox()}></i>
                      </div>
                    </div>
                    {/* Bagian Gambar Lightbox */}
                    <div className="flex justify-center items-center bg-no-repeat bg-origin-content">
                      {/* Menampilkan Gambar yang Sedang Dipilih dalam Lightbox */}
                      <img id="lightbox-image" alt="Lightbox Image" className="max-w-full max-h-screen" height="600" width="800" />
                    </div>
                    {/* Tombol Navigasi Kiri (untuk Gambar Sebelumnya) */}
                    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl cursor-pointer" onClick={() => prevImage()}>
                      <i className="fas fa-chevron-left"></i>
                    </div>
                    {/* Tombol Navigasi Kanan (untuk Gambar Berikutnya) */}
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl cursor-pointer" onClick={() => nextImage()}>
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <footer className="bg-gray-800 w-full text-slate-400 p-6 overflow-x-hidden">
                <div className="container mx-auto text-center">
                  <p>
                    © 2024{" "}
                    <a className="text-blue-400 hover:text-blue-300" href="https://www.versdesign.com" target="_blank" rel="noopener noreferrer">
                      versdesign.com{" "}
                    </a>
                    All rights reserved.
                  </p>
                  <p>
                    Follow us on{" "}
                    <a href="https://instagram.com/fauzyfm_" className="text-blue-400 hover:text-blue-300">
                      Instagram
                    </a>
                  </p>
                  <p>
                    Contact us on{" "}
                    <a
                      href="mailto:fachrulfauzy23@gmail.com?subject=Interested%20in%20Collaborating&body=Hello%20Owner%20,%0A%0AI%20am%20interested%20in%20creating%20a%20website%20and%20would%20like%20to%20explore%20the%20possibility%20of%20collaborating%20with%20you.%20Could%20we%20arrange%20a%20time%20to%20discuss%20this%20further?%0A%0ALooking%20forward%20to%20your%20response.%0A%0ABest%20regards,%0A[Write%20Your%20Name%20Here]"
                      className="text-blue-400 hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Email
                    </a>
                  </p>
                  <div className="flex items-center text-center justify-center space-x-2">
                    <p>Created by</p>
                    <a href="https://www.versdesign.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                      VersDesign
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>

        {/* Scripts */}
        <script src="src/script.js"></script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
    </div>
  );
};

export default TiniAgus;
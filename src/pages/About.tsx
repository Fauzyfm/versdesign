// import '../assets/styles/About.css'
import image1 from '../assets/images/bg-potong-1.png'
// import image2 from '../assets/images/bg-1.jpeg'


const About = () => {

    const item = [
        "Desain Profesional & Responsif",
        "Fleksibel & Customizable",
        "SEO & Performa Optimal",
        "Dukungan & Maintenance",
        "Keamanan & Kecepatan",
        "Konsultasi Gratis"
    ]
    const items = [
        "Website yang menarik, modern, dan dapat diakses dengan baik di semua perangkat.",
        "Kami menyesuaikan fitur dan desain sesuai dengan kebutuhan bisnis Anda.",
        "Website yang kami buat sudah dioptimasi agar mudah ditemukan di Google.",
        "Kami tidak hanya membuat website, tetapi juga siap membantu dalam perawatannya.",
        "Kami memastikan website Anda memiliki sistem keamanan yang baik dan loading cepat.",
        "Tidak perlu ragu, kami siap berdiskusi untuk memberikan solusi terbaik bagi Anda."
    ]

  return (
    <>
    <div id='about' className='flex bg-slate-900 sm:bg-slate-700 h-auto pb-[50px] bg-center bg-cover pt-[90px]' style={{ backgroundImage: `url()` }}>
    {/* Container untuk gambar (hanya ditampilkan di layar besar) */}
    <div className='hidden sm:block w-[900px] h-[600px] bg-cover bg-center z-10 -mr-[170px]' style={{ backgroundImage: `url(${image1})` }} data-aos='fade-right'>
        {/* Konten di dalam gambar (hanya ditampilkan di layar besar) */}
        <div className='container mx-28 mt-[100px] flex flex-col gap-7'>
        <div className='flex'>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent" data-aos='fade-right'>
            Mengapa Harus Buat Website di VersDesign ?
            </h1>
        </div>

        <div className='mr-96 text-left text-white opacity-60'>
            <ul className='flex flex-col gap-2'>
            {/* List items */}

                <li className='flex gap-2' data-aos='fade-right'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 text-softblue">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                <p>
                    <span className='font-bold bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent'>{item[0]}</span> – {items[0]}
                </p>
                </li>
                <li className='flex gap-2' data-aos='fade-right'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 text-softblue">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                <p>
                    <span className='font-bold bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent'>{item[1]}</span> – {items[1]}
                </p>
                </li>
                <li className='flex gap-2' data-aos='fade-right'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 text-softblue">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                <p>
                    <span className='font-bold bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent'>{item[2]}</span> – {items[2]}
                </p>
                </li>
                <li className='flex gap-2' data-aos='fade-right'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 text-softblue">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                <p>
                    <span className='font-bold bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent'>{item[3]}</span> – {items[3]}
                </p>
                </li>
                <li className='flex gap-2' data-aos='fade-right'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 text-softblue">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                <p>
                    <span className='font-bold bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent'>{item[4]}</span> – {items[4]}
                </p>
                </li>
                <li className='flex gap-2' data-aos='fade-right'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 text-softblue">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                <p>
                    <span className='font-bold bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent'>{item[5]}</span> – {items[5]}
                </p>
                </li>
            </ul>
        </div>
        </div>
    </div>

    {/* Konten untuk tampilan mobile (tanpa gambar) */}
    <div className='sm:hidden container mx-4 mt-[50px] flex flex-col gap-7'>
        <div className='flex'>
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent" data-aos='fade-right'>
            Mengapa Harus Buat Website di VersDesign ?
        </h1>
        </div>

        <div className='text-left text-white opacity-60'>
        <ul className='flex flex-col gap-2'>
            {/* List items */}

            <li className='flex gap-2' data-aos='fade-right'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 sm:size-10 text-softblue">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                <p>
                <span className='font-bold bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent'>{item[0]}</span> – {items[0]}
                </p>
            </li>
            <li className='flex gap-2' data-aos='fade-right'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 sm:size-10 text-softblue">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                <p>
                <span className='font-bold bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent'>{item[1]}</span> – {items[1]}
                </p>
            </li>
            <li className='flex gap-2' data-aos='fade-right'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 sm:size-10 text-softblue">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                <p>
                <span className='font-bold bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent'>{item[2]}</span> – {items[2]}
                </p>
            </li>
            <li className='flex gap-2' data-aos='fade-right'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 sm:size-10 text-softblue">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                <p>
                <span className='font-bold bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent'>{item[3]}</span> – {items[3]}
                </p>
            </li>
            <li className='flex gap-2' data-aos='fade-right'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 sm:size-10 text-softblue">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                <p>
                <span className='font-bold bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent'>{item[4]}</span> – {items[4]}
                </p>
            </li>
            <li className='flex gap-2' data-aos='fade-right'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 sm:size-10 text-softblue">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                <p>
                <span className='font-bold bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent'>{item[5]}</span> – {items[5]}
                </p>
            </li>
        </ul>
        </div>
    </div>
    </div>
    </>
  );
};

export default About;
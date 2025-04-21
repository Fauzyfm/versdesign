import { useSearchParams } from 'react-router';
import { Link } from 'react-router';

const TiniAgus = () => {
  const [searchParams] = useSearchParams(); // Mengambil query string
  const to = searchParams.get('to'); // Mendapatkan nilai dari ?to=

  return (
    <div className='bg-slate-900 h-screen w-full text-white flex justify-center items-center flex-col p-10 gap-5 text-center'>
      <h1 className='font-bold text-2xl  md:text-3xl'>Selamat Datang di Undangan Tini & Agus</h1>
      <p className='text-xl capitalize'>Kpd Yth. {to}</p>
      <p className='md:px-[20%]'>Mohon maaf untuk Undangan Tini & Agus telah di pindahkan, silahkan klik tombol dibawah ini untuk menuju undangan yang sebenarnya</p>
      <Link to={`https://www.versdesign.org/Web-Invitation/tini-agus/?to=${to}`} className='bg-slate-500 p-2 rounded-md mt-4 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer'>
      <button className='p-2'>Menuju Undangan</button>
      </Link>
    </div>
  );
};

export default TiniAgus;
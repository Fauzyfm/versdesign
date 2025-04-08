import { Link, useNavigate } from "react-router";

function Navbar() {
  const Navigate = useNavigate()

  const handleScroll = (id: string) => {
    Navigate('/main#' + id)
    setTimeout(()=> {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({behavior: "smooth"})
      }
    }, 100)
  }

  const handleScrollHome = () => {
    Navigate('/')
  }

  return (
    <div className="flex flex-wrap items-center w-full h-[56px] md:h-[72px] bg-slate-900 justify-between px-4 md:px-28 fixed z-100 opacity-80" data-aos='fade-down' >
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent cursor-pointer">
         <button className="cursor-pointer" onClick={handleScrollHome}>VersDesign</button> 
        </h1>
      </div>

      {/* Tombol Hamburger (Hanya di Mobile) */}
      <div className="block md:hidden">

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="text-white hover:bg-slate-700 p-1 rounded-sm bg-slate-900">          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg></div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-white">
            <li><button onClick={() => handleScroll('about')}>Tentang</button></li>
            <li><button onClick={() => handleScroll('service')}>Layanan</button></li>
            <li><button onClick={() => handleScroll('packet')}>Paket</button></li>
            {/* <li><button onClick={() => handleScroll('portofolio')}>Portofolio</button></li> */}
            <li><Link to={'/contact'}><button >Contact Us</button></Link></li>
          </ul>
        </div>
      </div>

      {/* Menu (Desktop) */}
      <div className="hidden md:block">
        <ul className="flex gap-6 text-white opacity-60">
          <li className="hover:text-softblue cursor-pointer"><button className="cursor-pointer" onClick={() => handleScroll('about')}>Tentang</button></li>
          <li className="hover:text-softblue cursor-pointer"><button className="cursor-pointer" onClick={() => handleScroll('service')}>Layanan</button></li>
          <li className="hover:text-softblue cursor-pointer"><button className="cursor-pointer" onClick={() => handleScroll('packet')}>Paket</button></li>
          {/* <li className="hover:text-softblue cursor-pointer"><button className="cursor-pointer" onClick={() => handleScroll('portofolio')}>Portofolio</button></li> */}
          <li className="hover:text-softblue cursor-pointer"><Link to={'/contact'}><button className="cursor-pointer">Contact Us</button></Link></li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;
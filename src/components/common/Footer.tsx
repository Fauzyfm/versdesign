function Footer() {
  
  const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini 
  return (
    <footer className="footer bg-base-200 text-base-content p-4 text-center">
      <div className="flex justify-center items-center mx-auto">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current mx-auto"
        >
          <path d="M22.672 15.226l-2.432.811..."></path>
        </svg>
        <p className="mt-2">© {currentYear} VersDesign. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

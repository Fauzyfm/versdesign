

interface CardsPacketProps {
  title: string;
  list?: string[];
  price: string;
  detail: string;
}

const CardsPacket = ({ title, list, price, detail }: CardsPacketProps) => {


  // Button Pilih Paket
  const handlePacketClick = () => {
    const phoneNumber = "6285155217688"; // Nomor WhatsApp tujuan
    const message = `Halo, saya ingin membeli ${title} untuk membuat website saya. Apakah kita bisa berdiskusi lebih lanjut?`; // Pesan yang ingin dikirim
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank"); // Buka WhatsApp dengan pesan yang telah disiapkan


  };

  return (
    <>
      <div className="card md:w-[397px] h-auto bg-base-100 shadow-sm">
        <div className="card-body bg-slate-800 rounded-md border-[0.5px]" data-aos="fade-down">
          <div className="flex flex-col justify-center text-center">
            <h2 className="font-bold text-white opacity-80 text-[24px]">{title}</h2>
            <p className="font-bold bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent text-[32px]">
              {price}
            </p>
          </div>
          <div className="flex flex-col justify-between h-full">
            <ul className="mt-6 flex flex-col gap-6 text-base text-white opacity-80">
              {list?.map((item) => (
                <li className="w-full flex justify-start items-center" key={item}>
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 inline-block me-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-start">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-10">
              <p className="bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent">
                Cocok Untuk : <span className="text-white opacity-80">{detail}</span>
              </p>
                <button onClick={handlePacketClick} className="btn btn-primary btn-block">
                  Pilih Paket
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsPacket;

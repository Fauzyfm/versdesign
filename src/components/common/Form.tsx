import { Button } from "../ui/button"
import { useForm } from "react-hook-form"
import { useSearchParams } from "react-router"


type RegisterFormSchema = {
    name: string,
    email: string,
    phone: string,
    deskripsi: string,
}


function Form() {
    const [param] = useSearchParams()
    const project = param.get("product")

    const { register, handleSubmit } = useForm<RegisterFormSchema>()
    const onSubmit = (data: any) => {
        const phoneNumber = "6285155217688"
        const projectParam = project
        const message = `Nama: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nProduct: ${projectParam}\nDeskripsi: ${data.deskripsi}\nTerimakasih Telah Mengisi Formulir Ini!\nMohon Tunggu Konfirmasi Dari Kami!`
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")

        console.log(projectParam)
        alert(`Form ${data.name} submitted successfully!`)
    }

  return (
    <>
    <form action="" onSubmit={handleSubmit(onSubmit)} className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 w-full" method="get">
        <div className="flex flex-col gap-3">
            {/* Username */}
            <div className="" data-aos='fade-right'>
                <label className="input validator text-white opacity-100">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                <input {...register('name', {
                    required: true,
                    pattern: /^[A-Za-z][A-Za-z0-9\-]*$/,
                    minLength: 3,
                    maxLength: 30
                })} type="input" required placeholder="Nama" pattern="[A-Za-z][A-Za-z0-9\-]*"  title="Only letters, numbers or dash" className="" />
                </label>
                <p className="validator-hint hidden">
                Must be 3 to 30 characters
                <br/>
                </p>
            </div>
            {/* Email */}
            <div className="" data-aos='fade-right'>
                <label className="input validator text-white opacity-100">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                <input {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                })} type="email" placeholder="mail@gmail.com" required/>
                </label>
                <div className="validator-hint hidden">Enter valid email address</div>
            </div>
            {/* Phone Number */}
            <div className="" data-aos='fade-right'>
                <label className="input validator text-white opacity-100">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="none"><path d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z" fill="currentColor"></path></g></svg>
                <input {...register('phone', {
                    required: true,
                    minLength: 10,
                    maxLength: 15,
                    pattern: /^[0-9]+$/
                })} type="tel" className="tabular-nums" required placeholder="Phone" pattern="[0-9]*" title="Must be 10 digits" />
                </label>
                <p className="validator-hint">Must be 10 digits</p>
            </div>
        </div>
        {/* Text Deskripsi */}
        <div className="" data-aos='fade-right'>
        <textarea {...register('deskripsi', {
            required: true,
            minLength: 5,
            maxLength: 2000
        })} className="textarea textarea-md text-white" placeholder="Deskrisikan Ide Project Anda ..."></textarea>
        <Button type="submit" className="bg-white text-black hover:bg-black hover:text-white transition-all duration-200 cursor-pointer mt-[10px]">Kirim Project</Button>
        </div>
    </form>
    </>
  )
}

export default Form

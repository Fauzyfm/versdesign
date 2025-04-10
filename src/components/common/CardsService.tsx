
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "../ui/button"
import {Link} from 'react-router'

  interface CardsServiceProps {
    title: string;
    cardContent: string;  
    icon?: string;
  }

  // import { useParams } from "react-router";


const CardsService = ({ title, cardContent, icon }: CardsServiceProps) => {


  return (
    <Card className="w-[320px] md:w-[359px] h-full flex flex-col justify-around bg-slate-900 opacity-70 hover:opacity-100 transition-all duration-200 shadow-2xl">
        <CardHeader>
            <CardTitle className="flex gap-5">
                <div className="w-[60px] h-[60px] bg-slate-600 rounded-sm flex justify-center items-center text-white ">
                  <img src={icon} />
                </div>  
                <div className="h-[60px] flex justify-center items-center">
                <p className="text-white font-bold text-2xl">{title}</p>
                </div>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-white text-base opacity-80">{cardContent}</p>
        </CardContent>
        <CardFooter>
          <Link to={`/project/name?product=${title}`}>  

            <Button className="bg-white text-black transition-all duration-200 cursor-pointer">Mulai Project <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg></Button>
          </Link>
        </CardFooter>
    </Card>
  )
}

export default CardsService;

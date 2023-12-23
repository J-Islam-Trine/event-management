import Logo from "../assets/Logo.svg"
export default function Footer()
{
    return(
        <div className="bg-primary text-black px-16">
                <div className="grid grid-cols-2 pt-32 pb-8">
                    <div className="flex flex-col gap-4">
                        <img className="w-16" src={Logo} alt="" />
                        <p className=" font-light">Whether you need an event planner to organise a show-stopping corporate launch, or a magnificent marquee event with endless entertainment…

Our event planning team will guarantee to deliver an outstanding variety of options and ideas.</p>
                    </div>
                    <div>
                        <p>Business days: Monday to Friday</p>
                    </div>
                    </div>                    

        </div>
    )
}
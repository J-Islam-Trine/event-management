import { NavLink } from "react-router-dom"
export default function Services({data})
{

    return(
                    <div className="pt-32 flex flex-col px-16 py-8 bg-primary">
            <div className="flex justify-center md:items-center lg:items-center gap-2 text-2xl">
                <hr className=" hidden md:display lg:display w-32 border-black border-1"/>
                <p className="uppercase">Our Services</p>
            </div>
            {console.log(data.length)}
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 *:border-2 *:font-semibold *:text-center *:text-2xl *:p-4 *:border-black ">
                    {
                        data.map((event) => {
                           return <NavLink to={`/events/${event.event_code}`} key={event.id}>{event.event_name}</NavLink>
                        })
                    }
            </ul>

        </div>
    )
}
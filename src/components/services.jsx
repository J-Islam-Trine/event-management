export default function Services()
{

    return(
                    <div className="pt-32 flex flex-col px-16 py-8 bg-primary">
            <div className="flex items-center gap-2 text-2xl">
                <hr className="w-32 border-black border-1"/>
                <p className="uppercase">Our Services</p>
            </div>
            <ul className="grid grid-cols-2 gap-4 mt-8 *:border-2 *:font-semibold *:text-center *:text-2xl *:p-4 *:border-black ">
                    <li>Weddings</li>
                    <li>Birthday Parties</li>
                    <li>Anniversary</li>
                    <li>Engagement Parties</li>
                    <li>retirement paties</li>
                    <li> baby shower</li>
            </ul>

        </div>
    )
}
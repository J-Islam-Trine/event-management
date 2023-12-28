import { useLoaderData, useParams } from 'react-router-dom'

export default function Event()
{
    const eventData = useLoaderData();
    return(
        <div className="px-16 bg-primary min-h-screen pt-8">
                <div className="flex gap-8 items-center pb-4 border-black">
                    <h3 className='text-4xl font-bold w-full text-center'>{eventData.event_name}</h3>
                    <div>
                    <p className='text-xl text-justify font-normal'>{eventData.event_description}</p>
                </div>``                
                </div>
                <div className=' flex justify-center pt-4'>
                <figure className='w-full'>
                    <img className='rounded-lg' src={eventData.event_image} alt="" />
                    </figure>
                </div>

        </div>
    )
}
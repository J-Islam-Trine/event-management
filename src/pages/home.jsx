import { useLoaderData } from "react-router-dom";

import Hero from "../components/hero";
import Inspirations from "../components/showcase";
import CTA from "../components/cta";
import Services from "../components/services";
import Testimonial from "../components/testimonial";
import { useEffect } from "react";

export default function HomePage()
{
    const eventList = useLoaderData();
    

    return(
        <div className="">
            <Hero />
            <CTA />
            <Services data={eventList}/>
            <Inspirations />
            <Testimonial />
        </div>
    )
}
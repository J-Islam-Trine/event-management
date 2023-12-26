import Hero from "../components/hero";
import Inspirations from "../components/showcase";
import CTA from "../components/cta";
import Services from "../components/services";
import Testimonial from "../components/testimonial";

export default function HomePage()
{
    return(
        <div className="">
            <Hero />
            <CTA />
            <Services />
            <Inspirations />
            <Testimonial />
        </div>
    )
}
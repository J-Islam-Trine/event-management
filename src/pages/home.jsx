import Hero from "../components/hero";
import Inspirations from "../components/showcase";
import CTA from "../components/cta";

export default function HomePage()
{
    return(
        <div className="">
            <Hero />
            <CTA />
            <Inspirations />
        </div>
    )
}
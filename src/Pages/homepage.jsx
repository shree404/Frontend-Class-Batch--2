import Colorfilter from "../Components/filtermethod"
import FAQS from "../Components/faq"
import { useEffect, useState } from "react"
import {Helmet} from "react-helmet";

function HomePage(){
    const [scrolltop , setScrollTop] = useState(false);

    useEffect(() => {
        if (scrolltop) {
            window.scrollTo({
                top:0,
                behavior:"smooth"
            })
            setScrollTop(false);
        }
   
    }, [scrolltop]);

    return(
        <>
        <Helmet>
            <title>Best Education Institute | </title>
            <meta name="keywords" content="Education , Training" />
            <meta name ="description " content="This is best education instutute"
/>        </Helmet>
        <p>This is our landing page</p>
        <Colorfilter />
        <FAQS/>
        <Colorfilter />
        <FAQS/>
        <Colorfilter />
        <FAQS/>
        <Colorfilter />
        <FAQS/>
        <Colorfilter />
        <FAQS/>
        <Colorfilter />
        <FAQS/>
        <button onClick={() => setScrollTop(true) }>Back to Top</button>
        </>
    )
}

export default HomePage
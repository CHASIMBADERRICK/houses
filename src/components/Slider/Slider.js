import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {sliderData} from "./slider-data";
import "./Slider.css";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
        console.log("next");
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
        console.log("prev");
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
        auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <div className="slider">
        <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
        <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
        {sliderData.map((slide, index) => {
            return (
            <div
                className={index === currentSlide ? "slide current" : "slide"}
                key={index}
            >
                {index === currentSlide && (
                <div>
                    <img src={slide.image} alt="slide" className="image" />
                    <div className="content">
                    <h2>{slide.heading}</h2>
                    <br></br>
                    <h3>{slide.title}</h3>
                    <h3>{slide.price}</h3>
                    <br></br>
                    <p>{slide.desc}</p>
                    <br></br>
                    <p>{slide.location}</p>
                    <br></br>
                    <button className="--btn --btn-primary">Get Started</button>
                    </div>
                </div>
                )}
            </div>
            );
        })}
        </div>
    );
};

export default Slider;



// import { useState, useEffect } from "react";
// import {AiOutLineArrowLeft, AiOutLineArrowRight} from "react-icons/ai";
// import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
// import {sliderData} from "./slider-data";
// import "./Slider.css";

// const Slider = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const slideLength = sliderData.length;

//     // slideLength = 1 2 3
//     // currentSlide = 0 1 2

//     const nextSlide = () => {
//         setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
//         console.log("next");
//     };



//     useEffect(() =>{
//         setCurrentSlide(0)
//     }, [])


//     return (
//         <div className="slider">
//             <SlArrowLeft className="arro prev" />
//             <SlArrowRight className="arro next"  onClick={nextSlide} />

//             {sliderData.map((slide, index) =>{
//                 return (
//                     <div className={index === currentSlide ?
//                     "slide current" : "slide"} key={index}>
//                         {index === currentSlide && (
//                             <>
//                             <img src={slide.image} alt="slide" />
//                             <div className="content">
//                                 <h2>{slide.heading}</h2>
//                                 <br></br>
//                                 <h3>{slide.title}</h3>
//                                 <h3>{slide.price}</h3>
//                                 <br></br>
//                                 <p>{slide.desc}</p>
//                                 <br></br>
//                                 <p>{slide.location}</p>
//                                 <br></br>
//                                 <button className="--btn--btn-primary">MORE INFORMATION</button>
//                             </div>

//                             </>
//                         )}

//                     </div>
//                 )
//             })}

//         </div>
//     );
// };

// export default Slider;
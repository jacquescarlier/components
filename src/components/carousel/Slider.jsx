import leftChevron from "../../pictures/arrow_back.png"
import rightChevron from "../../pictures/arrow_forward.png"
import "./slider.css"
import { useState, useEffect } from "react"

export default function Slider({ logement }) {
    const [sliderIndex, setSliderIndex] = useState(1)
    function toggleImage(indexPayload) {

        setSliderIndex(state => {
            if (indexPayload + state > logement.pictures.length) {
                return 1
            }
            else if (indexPayload + state < 1) {
                return logement.pictures.length
            }
            else {
                return state + indexPayload
            }
        })
    }
    useEffect(() => {
        const intervalID = setInterval(() => toggleImage(1), 3000)
        return () => clearInterval(intervalID)
    }, [])

    return (
        <>
            <p className="index-info"> {sliderIndex}/{logement.pictures.length} </p>
            <div className="slider">
                <p className="image-info"> {logement.title}</p>
                <img src={logement.pictures[sliderIndex - 1]} alt="" className="slider-img" />
                <button onClick={() => toggleImage(-1)} className="navigation-button prev-button">
                    <img src={leftChevron} alt="previous image" />
                </button>
                <button onClick={() => toggleImage(1)} className="navigation-button next-button">
                    <img src={rightChevron} alt="next image" />
                </button>
            </div>
        </>
    )
}
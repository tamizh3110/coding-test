import React, {useState} from 'react'
import shuffle from '../util/shuffle'
import Slider from './slider'

function CarouselViewer(props) {

    const [index, setImageIndex] = useState(1)

    const carouselData = shuffle(props.carouselData)

    const nextImage = () => {
        index === carouselData.length? setImageIndex(1) : setImageIndex(index + 1)
    }

    const prevImage = () => {
        index === 1 ? setImageIndex(carouselData.length) : setImageIndex(index-1)
    }

    const images = carouselData.map((elem,index) => {
        return(
            <div key = {index}>
                <img alt = {elem} src = {elem} width = "auto" height="50%"/> 
            </div>
        )
    })
    return (
        <div class = "container-slider">
            {images}
            <Slider move={nextImage} direction={"next"} />
            <Slider move={prevImage} direction={"prev"} />
        </div>
    )
}

export default CarouselViewer
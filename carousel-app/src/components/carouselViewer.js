import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function carouselViewer(props) {
    const carouselData = shuffle(props.carouselData)


    const images = carouselData.map((elem) => {
        return(
            <div key = {elem}>
                <img src = {elem} width = "auto" height="50%"/> 
            </div>
        )
    })
    return (
        <div class = "carouselParent">
        <Carousel useKeyboardArrows>
            {images}
        </Carousel>
        </div>
    )
}

function shuffle(data){

    //Fisher Yates Shuffle
    
    for(let i = data.length-1;i>=0;i--){
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [data[i], data[j]] = [data[j],data[i]];
    }
    return data    
}

export default carouselViewer

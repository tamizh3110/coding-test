import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react'
import Sharkbutton from './sharksbutton'
import Catbutton from './catsbutton'

class carousel extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            sharkData:[],
            catsData:[]
        }
    }
    handleCatCallBack = (c) =>{
        this.setState({
            catsData:c
        })
    }
    handleSharkCallBack = (s) => {
        this.setState({
            sharkData:s
        })
    }

    render(){
        return (
            <div>   
                <Catbutton parentCall = {this.handleCatCallBack}/>
                <Sharkbutton parentCall = {this.handleSharkCallBack} />
                {console.log(this.state)} 
            </div>
        )
    }
    
}

export default carousel
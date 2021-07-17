import React from 'react'
import Sharkbutton from './sharksbutton'
import Catbutton from './catsbutton'
import CarouselViewer from './carouselViewer'
import Spinner from './spinner'

class carousel extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            sharkData:{},
            catsData:{}
        }

        this.filterImages = this.filterImages.bind(this)
    }
    componentDidMount(){
        console.log("carousel updated")
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

    filterImages = () => {
        const cat_toggle_state = this.state.catsData.toggle_cats
        const shark_toggle_state = this.state.sharkData.toggle_sharks
        const final_image_list = []
        if(cat_toggle_state){
            this.state.catsData.cats_list.forEach((elem) => {
                final_image_list.push(elem)
            })
            
        }
        if(shark_toggle_state){
            this.state.sharkData.sharks_list.forEach((elem) => {
                final_image_list.push(elem)
            
            })
        }

        return final_image_list

    }

    render(){

        const finalImageList = this.filterImages()

        return (
            <div>   
                <Catbutton parentCall = {this.handleCatCallBack}/>
                <Sharkbutton parentCall = {this.handleSharkCallBack} />
                <CarouselViewer carouselData = {finalImageList} />
            </div>
        )
    }
    
}

export default carousel
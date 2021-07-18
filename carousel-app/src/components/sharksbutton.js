import React from 'react'
import axios from 'axios'
import Spinner from './spinner'
class Sharksbutton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toggle_sharks: false,
            sharks_list:[],
            loading:false,
            violet:false

        }
        this.handleClick = this.handleClick.bind(this)
        this.changeButtonColor = this.changeButtonColor.bind(this)
    }

    changeButtonColor(){
        this.setState(prevState => ({
            violet: !prevState.violet
        }))
    }

    handleClick(){

        this.changeButtonColor()

        this.setState(prevState => ({
            toggle_sharks:!prevState.toggle_sharks
        }))
        
        this.setState({loading: true}, async () => {

            if(this.state.toggle_sharks){
                console.log("shark is working")
                try{
                    const result = await axios.get('http://localhost:3001/api/sharks')
                    this.setState({
                        loading: false,
                        sharks_list: result.data,
                    }, () => this.props.parentCall(this.state));
                }catch(error){
                    console.log(error)
                }
                
            }else{
                this.setState({
                    sharks_list:[],
                    loading: false
                }, () => this.props.parentCall(this.state))
            }
          });
        }

    render()
        {
            const classButtonColor = this.state.violet? "sharkVioletClass":"sharkClass" 
            return(
                <div>
                    <button class = {classButtonColor} onClick={this.handleClick}>Sharks      
                    </button>
                    {this.state.loading && <Spinner/> }
                </div>
            )
        }
    }

  
export default Sharksbutton;

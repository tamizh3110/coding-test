import React from 'react'
import axios from 'axios'
import Spinner from './spinner'

class Sharksbutton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toggle_sharks: false,
            sharks_list:[],
            loading:false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){

        this.setState(prevState => ({
            toggle_sharks:!prevState.toggle_sharks
        }))
        
        this.setState({loading: true}, () => {

            if(this.state.toggle_sharks){
                console.log("shark is working")
            
                axios.get('http://localhost:3001/api/sharks')
                .then(result => this.setState({
                loading: false,
                sharks_list: result.data,
                }, () => this.props.parentCall(this.state)));

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
            return(
                <div>
                    <button onClick={this.handleClick}>Sharks      
                    </button>
                </div>
                
            )
        }
    }

  
export default Sharksbutton;

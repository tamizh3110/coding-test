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
            return(
                <div>
                    <button class = "sharkClass" onClick={this.handleClick}>Sharks      
                    </button>
                    {this.state.loading && <Spinner/> }
                </div>
            )
        }
    }

  
export default Sharksbutton;

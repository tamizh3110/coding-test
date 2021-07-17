import React from 'react'
import axios from 'axios'
import spinner from './spinner'
import Carousel from './carousel'

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

            // axios.get('/endpoint')
            // .then(result => this.setState({
            //   loading: false,
            //   cats_list: [...result.data],
            // }));
            }else{
                this.setState({
                    sharks_list:[]
                })
            }
          });

          this.props.parentCall(this.state)

        }

    render()
        {
            return(
                <div>
                    <button onClick={this.handleClick}>"Sharks"</button>
                </div>
            )
        }
    }

  
export default Sharksbutton;

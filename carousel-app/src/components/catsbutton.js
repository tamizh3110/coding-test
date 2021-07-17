import React from 'react'
import axios from 'axios'
import Spinner from './spinner'

class Catsbutton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toggle_cats: false,
            cats_list:[],
            loading:false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){

        
        this.setState(prevState => ({
            toggle_cats:!prevState.toggle_cats
        }))


        this.setState({loading: true}, () => {

            if(this.state.toggle_cats){
                console.log("cat is working")
                axios.get('http://localhost:3001/api/cats')
                .then(result => this.setState({
                loading: false,
                cats_list: result.data,
                }, () => this.props.parentCall(this.state)));
                

            }else{
                this.setState({
                    cats_list:[],
                    loading:false
                },() => this.props.parentCall(this.state))
            }
          });

        }

    render()
        {
            return(
                <div>
                        <button onClick={this.handleClick}>Cats
                        </button>
    

                </div>
                
            )
        }
    }

  
export default Catsbutton;

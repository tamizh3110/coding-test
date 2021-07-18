import React from 'react'
import axios from 'axios'
import Spinner from './spinner'
class Catsbutton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toggle_cats: false,
            cats_list:[],
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
            toggle_cats:!prevState.toggle_cats
        }))


        this.setState({loading: true}, async () => {

            if(this.state.toggle_cats){
                console.log("cat is working")
                try{
                    const result = await axios.get('http://localhost:3001/api/cats') 
                    this.setState({
                    loading: false,
                    cats_list: result.data,
                    }, () => this.props.parentCall(this.state));
                    
                }catch(error){
                    console.log(error)
                }
        
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

            const classButtonColor = this.state.violet? "catVioletClass":"catClass" 
            return(
                <div>
                        <button class = {classButtonColor} onClick={this.handleClick}>Cats 
                        </button>
                        {this.state.loading && <Spinner/> }
                                          
                </div>
                
            )
        }
    }

  
export default Catsbutton;

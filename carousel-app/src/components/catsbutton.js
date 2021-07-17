import React from 'react'
import axios from 'axios'
import spinner from './spinner'
import Carousel from './carousel'

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
            // axios.get('/endpoint')
            // .then(result => this.setState({
            //   loading: false,
            //   cats_list: [...result.data],
            // }));
            }else{
                this.setState({
                    cats_list:[]
                })
            }
          });

          this.props.parentCall(this.state)

        }

    render()
        {
            return(
                <div>
                        <button onClick={this.handleClick}>"Cats"</button>


                </div>
                
            )
        }
    }

  
export default Catsbutton;

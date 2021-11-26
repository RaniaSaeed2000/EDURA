import React, { Component } from 'react'



export class NotFound extends Component {
    render() {
        return (
            <div>



                <div className="container d-flex justify-content-center mt-5 mb-5">
                    <div>
                    <i className="far fa-sad-tear" style={{color:'#e96b56' , fontSize:'100px' , margin:'10px auto'}}></i>
 
                     <h1>Error 404!</h1>
                     <p>Faild to find this link , Try different words.</p>

            
                </div>
                </div>
                
            </div>
        )
    }
}

export default NotFound

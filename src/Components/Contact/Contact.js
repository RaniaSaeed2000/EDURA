import React from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    function sendEmail(e){
   
        e.preventDefault();
        emailjs.sendForm(
            'service_bw9h334',
            'template_4o4b6gl',
             e.target,
             "user_6sex7BtAbUuVbzL3E1ZEo"
             ).then(res =>{console.log(res);
             }).catch(err =>console.log(err));



    }
    return (
        <div className="container border"
            style={{
            width:"50%",
            justifyContent:"center",
            textAlign:"center",
            marginTop:"150px",
            marginBottom:"100px",

            // backgroundImg:`url()`
           
        
        }}
        >
            <h1 style={{marginTop:'25px' , fontFamily:'cursive' , color:' #e96b56' }}>Contact Form </h1>
            <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
               <label>Name</label>
                <input type="text" name="name" className="form-control"/>

                <label>Email</label>
                <input type="email" name="user_email" className="form-control" />

                <label>Message</label>
                <textarea name="message" rows="4" className="form-control"/>
                <input type="submit" value="Send" className="form-control btn "
                style={{marginTop:"30px", backgroundColor:"#e96b56", color:"white", letterSpacing:'2px' }}
                />
                

            </form>
        </div>
    )
}

export default Contact

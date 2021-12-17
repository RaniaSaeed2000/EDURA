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
            <div className="row"style={{paddingLeft:'15px', paddingRight:'15px',marginTop:'25px', textAlign:'center', flexFlow:'wrap'}} ><h1 style={{  fontFamily:'cursive' , color:' #e96b56',width:'90%', fontSize:"30px"}}>Contact Form </h1></div>
            <form className="row" style={{paddingLeft:'15px', paddingRight:'15px', marginBottom:'25px', justifyContent:'center'}} onSubmit={sendEmail}>
               <label>Name</label>
                <input type="text" name="name" className="form-control"  style={{width:'50%'}} />

                <label>Email</label>
                <input type="email" name="user_email" className="form-control" style={{width:'50%'}} />

                <label>Message</label>
                <div className="row" style={{justifyContent:'center'}}><textarea name="message" rows="4" className="form-control" style={{width:'50%'}}/></div>
                <input type="submit" value="Send" className="form-control btn "
                style={{marginTop:"30px", backgroundColor:"#e96b56", color:"white", letterSpacing:'2px',width:'50%' }}
                />
                

            </form>
        </div>
    )
}

export default Contact

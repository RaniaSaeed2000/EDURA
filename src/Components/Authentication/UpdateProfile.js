import React from 'react'
import { Form, Button, Card , Alert, Container } from 'react-bootstrap'
import { useRef, useState } from 'react'
import { useAuth } from '../Context/AuthContexts'
import {Link, useHistory} from 'react-router-dom'
import './Style.css'

export default function UpdateProfile() {

    // Note : we use ref for this so we will say email ref this is so we can acutually get the value when we acutakky need to submit our form 
    const emailRef = useRef()
    const passowrdRef = useRef()
    const passowrdConRef = useRef()
    const {currentUser , updateEmail , updatePassword}  = useAuth()
    const [ error, setError ]= useState("")
    const [ loading, setLoading ] = useState(false)
    const history=useHistory()



     function handleSubmit(e) {
        
         e.preventDefault()
         setLoading(true)
         setError("")
          //هذا تحقق انه الباسوردين زي بعض صح 
        if (passowrdRef.current.value !== passowrdConRef.current.value) {
            return setError("Passwords do not match ")
        }

        const promises =[]
        if(emailRef.current.value!==currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
        if(passowrdConRef.current.value)
        {
            promises.push(updatePassword(passowrdConRef.current.value))
        }
        Promise.all(promises).then(()=>{
            history.push('/')
        }).catch(()=>{
            setError('Failed to update account')
        }).finally(()=>{
            setLoading(false)
            
        })
      
    }
    return (
        <Container className="d-flex align-items-center justify-content-center " style={{minHeight:'100vh'}} >

        <div className="w-100 " style={{ maxWidth: "400px" }}>
            <Card>
                <Card.Body>
                    <h3 className="text-center mb-4" >Update Profile </h3>
                    {/* {currentUser.email}   هاي بس للتجربة ذا ما في كرنت يوزر رح يعطي ايرور*/}
                {error && <Alert variant ="danger">{error}</Alert>} 
                     {/* السطر يلي فوق عشان لو في ايرور يطلع كتابة من البوتستراب للمستخدم اسمها دينجر انه في ايرور */} 
                    <Form onSubmit={handleSubmit} >
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}>{currentUser.email}</Form.Control>
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passowrdRef} required placeholder="Leave blanck to keep the same  "></Form.Control>
                        </Form.Group>

                        <Form.Group id="password-con">
                            <Form.Label>Password Confirmaiton</Form.Label>
                            <Form.Control type="password" ref={passowrdConRef} required  placeholder="Leave blanck to keep the same  "></Form.Control>
                        </Form.Group>


                        <Button className="w-100 mt-2 " disabled={loading} type="submit">  Update </Button>
                        {/*التحميل ما يرد يعمل سبمت للفورم
                */}
                    </Form>

                </Card.Body>
            </Card>
            {/* The next div will move us to login page  */}
            <div className="w-100 text-center mt-2">
                <Link to="/">Cancel  </Link>
            </div>
        </div>
        </Container>
    )
}

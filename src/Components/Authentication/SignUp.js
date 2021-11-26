import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom'
import { useAuth } from '../Context/AuthContexts'
import './Style.css'

export default function Signup() {

    // Note : we use ref for this so we will say email ref this is so we can acutually get the value when we acutakky need to submit our form 

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()
        //هذا تحقق انه الباسوردين زي بعض صح 
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match ")
        }
        try {
            setError("")//لازم اتأكد انه اخلي الست ايرور فاضية عشان بس يدخل باسورد خطأ يعطيني انه في ايرور
            setLoading(true)

            //ساين اب بتدخل الباسود والايميل 
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        }
        catch {
            setError("Failed to create an account")
        }
        setLoading(false)//عشان ما يضل يعمل حسابات باستمرار بعد ما اضغط 
    }



    return (
        
        <Container className="d-flex align-items-center justify-content-center " style={{minHeight:'100vh'}} >

        <div className="w-100 " style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        {/* {currentUser.email}   هاي بس للتجربة ذا ما في كرنت يوزر رح يعطي ايرور*/}
                        {error && <Alert variant="danger">{error}</Alert>}
                        {/* السطر يلي فوق عشان لو في ايرور يطلع كتابة من البوتستراب للمستخدم اسمها دينجر انه في ايرور */}

                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef} required />
                            </Form.Group>
                            <Button className="w-100 mt-4 btn-c "variant="" disabled={loading} type="submit">Sign Up</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Already have an account ? <Link className="link-s" to="/login">Log In</Link>
                </div>
                <div className="w-100 text-center mt-2">
                    Logout all acounts ? <Link className="link-s" to="/logout">Log out</Link>
                </div>

                </div>
                </Container>
        
    )
}
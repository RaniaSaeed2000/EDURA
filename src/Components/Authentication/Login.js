import React from 'react'
import { Form, Button, Card , Alert ,Container} from 'react-bootstrap'
import { useRef, useState  } from 'react'
import { useAuth } from '../Context/AuthContexts'
import { Link , useHistory } from 'react-router-dom'
import './Style.css'

export default function Login() {

    // Note : we use ref for this so we will say email ref this is so we can acutually get the value when we acutakky need to submit our form 
    const emailRef = useRef()
    const passowrdRef = useRef()
    const {login}  = useAuth()
    const [ error, setError ]= useState("")
    const [ loading, setLoading ] = useState(false)
    const history=useHistory()
   


    async function handleSubmit(e) {
        e.preventDefault()
        
   
        try {
            setError("")//لازم اتأكد انه اخلي الست ايرور فاضية عشان بس يدخل باسورد خطأ يعطيني انه في ايرور
            setLoading(true)

            //ساين اب بتدخل الباسود والايميل 
            await login(emailRef.current.value, passowrdRef.current.value)
            // history.push("/") -> go to home page  
            history.push("/")
        }
        catch {
            setError("Failed to Login in")
        }
        setLoading(false)//عشان ما يضل يعمل حسابات باستمرار بعد ما اضغط 

    }
    return (
        <Container className="d-flex align-items-center justify-content-center " style={{minHeight:'100vh'}} >

        <div className="w-100 " style={{ maxWidth: "400px" }}>
            <Card>
                <Card.Body>
                    <h3 className="text-center mb-4" >Login</h3>
                    {/* {currentUser.email}   هاي بس للتجربة ذا ما في كرنت يوزر رح يعطي ايرور*/}
                {error && <Alert variant ="danger">{error}</Alert>} 
                     {/* السطر يلي فوق عشان لو في ايرور يطلع كتابة من البوتستراب للمستخدم اسمها دينجر انه في ايرور */} 
                    <Form onSubmit={handleSubmit} >
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
            
                            <Form.Control type="password"   ref={passowrdRef} required></Form.Control>
                        </Form.Group>

            


                        <Button className="w-100 mt-3 btn-c "  variant="" disabled={loading} type="submit"> Login</Button>
                        {/*التحميل ما يرد يعمل سبمت للفورم
                */}
                    <div className="w-100 text-center mt-3">
                        <Link className="link-s"  to="/forgot-password">Forgot Password</Link>
                    </div>


                    </Form>

                </Card.Body>
            </Card>
            {/* The next div will move us to login page  */}
            <div className="w-100 text-center mt-2">
                Need an account ? <Link  className="link-s"  to="/signup">SginUp</Link>
            </div>
        </div>
        </Container>
    )
}

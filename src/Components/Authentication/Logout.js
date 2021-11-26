import { useState } from "react"
import { Card, Button, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../Context/AuthContexts'
import {  useHistory } from 'react-router-dom'
import './Style.css'
// useAuth عشان اوصل للكرنت يوزرر:

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('./login')
        }
        catch {
            setError('Faild to log out')
        }
    }
    return (

        <Container className="d-flex align-items-center justify-content-center " style={{minHeight:'100vh'}} >

        <div className="w-100 " style={{ maxWidth: "400px" }}>
            <Card>


                <Card.Body>

                    <h3 className="text-center mb-4" > Profile </h3>
                    {error && <Alert variant="danger">{error}</Alert>}
                 


                    <div >
                            <strong>Email : </strong>
                            <span  type="email"  required >{currentUser.email}</span>
                        </div>

              
                    {/* <Link to="/update-profile" className="btn btn-c w-100 mt-3">Update Profile</Link> */}

                </Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" className="link-s" onClick={handleLogout}>Log Out</Button>
            </div>
        </div>
        </Container>
    )
}

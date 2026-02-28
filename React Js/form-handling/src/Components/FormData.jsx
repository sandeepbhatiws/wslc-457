import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function FormData({userData, setUserData}) {

    const formHandler = (event) => {
        event.preventDefault();

        const data = {
            name : event.target.name.value,
            email : event.target.email.value,
            mobile_number : event.target.mobile_number.value,
            address : event.target.address.value,
        }

        const finalData = [data, ...userData];
        setUserData(finalData);

        localStorage.setItem('userInfo', JSON.stringify(finalData));

        event.target.reset();
    }


    return (
        <>
            <div className='row border rounded-2 p-3'>
                <Form onSubmit={formHandler} autoComplete='off'>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" name='mobile_number' placeholder="Mobile Number" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name='address' placeholder="Address" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Form>
            </div>
        </>
    )
}

import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <Form>
      <Form.Group controlId="formName"  className="mb-3 form-text">
            <Form.Label>Name: </Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
  <Form.Group className="mb-3 form-text" controlId="formBasicEmail">
    <Form.Label className='textarea'>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3 form-text" controlId="formBasicPassword">
    <Form.Label className='textarea' required="true">Leave a message!</Form.Label>
    <Form.Control className='textarea' type="form" placeholder="Message" />
  </Form.Group>
  <Form.Group className="mb-3 form-text" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

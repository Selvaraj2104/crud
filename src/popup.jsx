import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Popup(abc){
  console.log(abc.fieldData,"###")
  const updateData=() => {
    fetch(`https://67d7ed0d9d5e3a10152c9ab3.mockapi.io/employee/detail/${abc.fieldData.id}`, {
      method: 'PUT', // or PATCH
      headers: {'content-type':'application/json'},
      body: JSON.stringify(abc.fieldData)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      alert("Success")
      abc.setRef(!abc.ref)
    }).catch(error => {
      console.log(error)
    })
    abc.boxClose()
}

 const createUser = () => {
      
      fetch('https://67d7ed0d9d5e3a10152c9ab3.mockapi.io/employee/detail', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(abc.fieldData)
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(task => {
        alert("Added Successfully")
        abc.setRef(!abc.ref)
      }).catch(error => {
        console.log(error)
      })
      abc.boxClose()
    }

    return(
        <>
  
        <Modal show={abc.boxShow} onHide={abc.boxClose}>
          <Modal.Header closeButton>
            {abc.fieldData.id ? <Modal.Title>Edit Data ✍</Modal.Title> : <Modal.Title>Add Data</Modal.Title>}
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder='Enter your name'
                  defaultValue={abc.fieldData.name}
                  onChange={(e)=>abc.setFieldData({...abc.fieldData,name:e.target.value})}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder='Enter your email'
                  defaultValue={abc.fieldData.emailid}
                  onChange={(e)=>abc.setFieldData({...abc.fieldData,emailid:e.target.value})}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Phone No</Form.Label>
                <Form.Control
                  type="tell"
                  placeholder='Enter your mobile number'
                  defaultValue={abc.fieldData.phoneNo}
                  onChange={(e)=>abc.setFieldData({...abc.fieldData,phoneNo:e.target.value})}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Qualification</Form.Label>
                <Form.Control
                  type="text"
                  placeholder='Enter your qualification'
                  defaultValue={abc.fieldData.qualification}
                  onChange={(e)=>abc.setFieldData({...abc.fieldData,qualification:e.target.value})}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder='Enter your location'
                  defaultValue={abc.fieldData.location}
                  onChange={(e)=>abc.setFieldData({...abc.fieldData,location:e.target.value})}
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={abc.boxClose}>
              Close
            </Button>
            {abc.fieldData.id ? <Button variant="primary" onClick={updateData}>
              Save Changes
            </Button> :
            <Button variant="primary" onClick={createUser}>
            Create
          </Button>}
            
          </Modal.Footer>
        </Modal>
      </>
    )
}
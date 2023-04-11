import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



export default function InventoryForm() {
  const fields = [
    "Brand", "Model", "Type", "Serial Number", "SKU", "Purchase Date", "Description"
  ]
  return (
    <div className="m-5">
    {
      fields.map(field => {
        return <FloatingLabel controlId="floatingInput" label={field} className="mb-3" >
        <Form.Control type="text" placeholder={field} />
      </FloatingLabel>
    })
    }
     
     
      <Button>Save</Button>
    </div>
  )
}

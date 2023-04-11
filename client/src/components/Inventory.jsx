import React from 'react'
import {Table} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'



export default function Inventory() {
  const data = [
    {
      id: "224",
      brand: "Sony",
      model: "A7 III",
      type: "Camera",
      serialNumber: "1384PD383",
      sku: "23234234123",
      purchaseDate: "08/24/2023",
      description: "Fuckin stolen as fuck.  gone like a mother fucker.  never coming back.  fucking bastards. ",
    },
    {
      id: "5651",
      brand: "Apple",
      model: "Mac Studio",
      type: "Computer",
      serialNumber: "654654SDF65465",
      sku: "7849843684161",
      purchaseDate: "01/01/2023",
      description: "Max bought me this shit.  I owe him like over $3k for it.  sucks balls but i'm going to fix it, I swear. ",
    },
    {
      id: "123",
      brand: "Apple",
      model: "iPad",
      type: "Tablet",
      serialNumber: "1294023322DFE12",
      sku: "233333442341",
      purchaseDate: "07/12/2022",
      description: "I Got this through my verizon plan, and I got it in Beorne.  I hope I never have to go back there ever again. ",
    },
    {
      id: "321",
      brand: "Universal Audio",
      model: "Apollo Twin Duo",
      type: "Interface",
      serialNumber: "344452131",
      sku: "34535245545",
      purchaseDate: "10/21/2016",
      description: "The workhorse.  The beast.  The legend.  I love this thing.  ",
    },
    {
      id: "987",
      brand: "Shure",
      model: "SM7B",
      type: "Microphone",
      serialNumber: "144553234",
      sku: "DFEEF32134234",
      purchaseDate: "02/20/1983",
      description: "Michael Jackson used this.  It's totally cool.",
    },



  ]
  return (
    <div style={{marginTop:"40px"}}>
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>EDIT</th>
        <th>ID</th>
        <th>Brand</th>
        <th>Model</th>
        <th>Type</th>
        <th>Serial Number</th>
        <th>SKU</th>
        <th>Purchase Date</th>
        <th>Description</th>
        <th>DELETE</th>
      </tr>
    </thead>
    <tbody>

{data.map((item)=>{
  return <tr>
        <td><FontAwesomeIcon icon={faPenToSquare} /></td>
        <td>{item.id}</td>
        <td>{item.brand}</td>
        <td>{item.model}</td>
        <td>{item.type}</td>
        <td>{item.serialNumber}</td>
        <td>{item.sku}</td>
        <td>{item.purchaseDate}</td>
        <td>{item.description}</td>
        <td><FontAwesomeIcon icon = {faTrash}/></td>
      </tr>
})}
      
      
    </tbody>
  </Table>
  </div>
  )
}

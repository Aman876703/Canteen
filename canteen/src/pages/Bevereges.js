import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

export default function Snacks() {
  var [produts,setProducts]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:9000/getproduct/Beverages").then((response)=>{
      setProducts(response.data)
    })
  },[])

  return (
    <>
    <h1 className='text-center'>Beverages</h1>
    <div className='row justify-content-around'>
      {produts.map((pr,index)=>{
       return <Card productid={pr.productid} image={pr.productimage} productname={pr.productname} description={pr.description}
        price={pr.price}></Card>
      })}
    </div>
    </>
  )
}

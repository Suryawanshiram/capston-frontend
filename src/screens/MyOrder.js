

import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {

    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("/api/myOrderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
        })

    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='container ' style={{"backgroundColor":" #FFE87C"}} >
                <div className='row'>
                    <div className='container' style={{'color':'black','display':'flex', 'justifyContent':'center','fontFamily':'fantasy'}}><h1> Orders_History </h1> </div>
                    {orderData !== {} ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div  >
                                                    {arrayData.Order_date ? <div className='m-auto mt-5' style={{'color':'#344ec2','fontSize':'25px', 'fontFamily':'monospace'}}>

                                                        {data = arrayData.Order_date}
                                                        <hr />
                                                    </div> :

                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3 mx-5 mb-4" style={{ width: "25rem", maxHeight: "360px", 'backgroundColor':'#d1f0c2' }}>
                                                               {/* <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />*/}
                                                                <div className="card-body">
                                                                    <h5 className="card-title" style={{'color':'#e62e40'}}>{arrayData.name} </h5> <i class="bi bi-bookmark-check" style={{'position':'absolute','left':'380px','top':'20px', 'color':'green'}}></i>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1' style={{'color':'green','fontFamily':'monospace'}}>{arrayData.qty}</span>
                                                                        <span className='m-1' style={{'color':"green",'fontFamily':'monospace'}}>{arrayData.size}</span>
                                                                        <span className='m-1'>{data}</span>
                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5 ' style={{'color':'green' , 'fontFamily':'monospace'}} >
                                                                            ₹{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>



                                                    }

                                                </div>
                                            )
                                        })

                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>


            </div>

            <Footer />
        </div>
    )
}
import { list } from './BikeDetails';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { BikeDetails } from "./BikeServiceForm";
import { Reading } from './ReadPage';


export const Homepage01=()=>
{
    const[temparray,setTemparray]=useState([]);
    const[createview,setCreateview]=useState(false)
     const[readview,setReadview]=useState(false)
    const[pos,setPos]=useState(0)
    const result=()=>
    {
        setTemparray(list)
    }
    useEffect(()=>
    {
        result()
    })
    return(
        <>
        <div className="container mt-5">
            {
                (createview)?
                <>
                <BikeDetails/>
                <div className='row justify-content-center'>
                <button className="btn btn-outline-dark mt-3" onClick={
                    ()=>
                    {
                        setCreateview(false)
                    }
                }>Back</button>
                </div>
                
                </>
                :
                (readview)?
                <>
                <Reading who={pos}/>
                <div className='row justify-content-center d-grid'>
                <button className="btn btn-outline-primary" onClick={
                    ()=>
                    {
                        setReadview(false)
                    }
                }>
                    Back
                </button>
                </div>
                </>
                :
                <> 
                <div className='row justify-content-center'>
                <button className="btn btn-outline-warning mb-4 " onClick={
                    ()=>
                    {
                        setCreateview(true)
                    }
                } >
                    Create new bikeDetails
                </button>
                </div>
                

                 <div className="row justify-content-center">
                    <div className="table-responsive-md">
                        <table className="col-lg-8 table table-striped p-4 ">
                            <thead>
                                <tr>
                                    <th>CustomerId </th>
                                    <th>CustomerName</th>
                                    <th>CustomerEmail</th>
                                    <th>CustomerContact</th>
                                    <th>CustomerDate</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    temparray.map((ele,ind)=>
                                    (
                                        <tr>
                                            <td>{ele.cusId}</td>
                                            <td>{ele.cusName}</td>
                                            <td>{ele.cusEmail}</td>
                                            <td>{ele.cusContact}</td>
                                            <td>{ele.cusDate}</td>
                                            <td>
                                                <button className="btn btn-outline-success" onClick={
                                                    ()=>
                                                    {
                                                        setReadview(true);
                                                        setPos(ind)
                                                    }
                                                }>
                                                    READ
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>

                    </div>

                </div> 
                </>
            }

        </div>
        </>
    )
}
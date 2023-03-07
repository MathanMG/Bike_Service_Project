import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { alter1 } from './BikeDetails'



export let Updating=(myvalue)=>
{
    const[pos,setPos]=useState(myvalue.who)
    const[process,setProcess]=useState({
        "cusId":myvalue.mention.cusId,
        "cusName":myvalue.mention.cusName,
        "cusContact":myvalue.mention.cusContact,
        "cusEmail":myvalue.mention.cusEmail,
        "cusDate":myvalue.mention.cusDate
    })

    const track=(data)=>
    {
        const{name,value}=data.target
        setProcess(
            (old)=>
            {
                return{
                    ...old,
                    [name]:value
                }
            }
        )
    }

    const register=()=>
    {
        alter1(process,pos)
        alert("Your values is updated succesfully")
        
    }
    const reset=()=>
    {
        alert('Rejected...!')
    }

    return(
        <>
            <body id="bgcolor">
            <div className="row justify-content-center">
                <form id="radius"className="col-lg-7  mt-2 mb-2 p-3 bg-light">
                    <h4 className=" text-center fw-bold text-uppercase">Bike Details Form</h4>
                    <table  className="row">
                        <tbody>
                         <tr className="row">
                           <td ><label className="mb-2 fw-bold text-dark">Customer ID</label></td>
                           <td className="col-12"><input type="text" name="cusID" onChange={track} value={process.cusID} className="mb-2 form-control "  placeholder="Enter your Customer ID"/></td> 
                         </tr>
                         <tr className="row">
                           <td ><label className="mb-2 fw-bold text-dark">Customer Name</label></td>
                           <td className="col-12"><input type="text" name="cusName" onChange={track} value={process.cusName} className="mb-2 form-control "  placeholder="Enter your Name"/></td> 
                         </tr>
                         <tr className="row">
                           <td ><label className="mb-2 fw-bold text-dark">Customer Contact No</label></td>
                           <td className="col-12"><input type="tel" name="cusContact" onChange={track} value={process.cusContact} className="mb-2 form-control "  placeholder="Enter your Contact No"/></td> 
                         </tr>
                         <tr className="row">
                           <td ><label className="mb-2 fw-bold text-dark">Customer Email</label></td>
                           <td className="col-12"><input type="email" name="cusEmail" onChange={track} value={process.cusEmail} className="mb-2 form-control "  placeholder="Enter your Email"/></td> 
                         </tr>
                         <tr className="row">
                           <td ><label className="mb-2 fw-bold text-dark">Purchase Date</label></td>
                           <td className="col-12"><input type="date" name="cusDate" onChange={track} value={process.cusDate} className="mb-2 form-control "  placeholder="Enter your Purchase Date"/></td> 
                         </tr>
                         <tr className="row justify-content-evenly">
                   
                           <td className="col-5" ><input className=" mt-3 form-control text-center  text-light bg-primary"  onClick={register} value="Register" /></td>
                           <td className="col-5" ><input className=" mt-3 form-control text-center text-light bg-danger" type="reset" onClick={reset} value="Reset" /></td>
                         </tr>
                        </tbody>
                    </table>
                </form>
            </div>
          </body>
        </>
    )
}
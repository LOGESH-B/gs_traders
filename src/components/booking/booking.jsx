import  './Booking.css';
import { useState } from "react";
import { Button } from "react-bootstrap";
function Booking(){

    const [inputFields, setInputFields] = useState([{
        fullName:'',
        emailAddress:''
    } ]);
 
    const addProduct = ()=>{

        setInputFields([...inputFields, {
            fullName:'',
            emailAddress:''
        } ])
      
    }
    const removeProduct = (index)=>{
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
   }
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
    }

    return(
    
        <div className="container">
            
                  {
                    inputFields.map((data, index)=>{
                    const {fullName, emailAddress}= data;
                    return(
                    <div className="row my-3" key={index}>
                        <div className="col sm-5 ">
                            <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={fullName} name="fullName" className="form-control"  placeholder="Category" />
                        </div>

                        <div className="col sm-5 ">
                        <input type="email" onChange={(evnt)=>handleChange(index, evnt)} value={emailAddress} name="emailAddress" className="form-control" placeholder="Product" />
                        </div>
                        
                        <div className="col sm-2 remove">
                        {(inputFields.length!==1)? <Button variant="warning"  onClick={removeProduct}>Remove</Button>:''}
                        </div>
                    </div>
                    )})
                  }
              
          
                  
                <div className="add">
                    <button className="btn btn-success " onClick={addProduct}>Add</button>
            
                </div>
                 
               

        </div>
           
        
    )
}
export default Booking
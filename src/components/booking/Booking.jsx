import './Booking.css';
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Nav from '../nav_component/Nav'
import logo from '../../assets/logo/GS-logo.png'

function Booking() {
  const [validated, setValidated] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  //const [msg, setMsg] = useState('');
  const [loading, Load] = useState(0);
  const initialValues =
  {
    cname: "",
    mobile: "",
    address: "",
  };
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    const isInputFilled = e.target.form.checkValidity();
    setIsFormValid(isInputFilled);
    const value = e.target.value;
    //console.log(values);
    setValues({
      ...values,
      [e.target.name]: value
    });
  };

  const [inputFields, setInputFields] = useState([{ category: '', product: '', qty: '' }]);
  const productOptions = {
    Cement: ['DALMIA', 'RAMCO', 'ULTRATECH', 'PRIYA', 'ARASU'],
    Steel: ['TATA', 'JWS', 'GOWRI'],
    Brick: ['Interlock Bricks', 'Fly Ash Bricks', 'Hollow Blocks'],
    'Blue metals': ['M Sand', 'P Sand', 'River Sand', 'Clay Bricks', 'Soil', 'R R Stones']
  };

  const handleAddInput = () => {
    setInputFields([...inputFields, { category: '', product: '', qty: '' }]);
  };

  const handleInputChange = (index, event) => {
    const isIInputFilled = event.target.form.checkValidity();
    setIsFormValid(isIInputFilled);
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleSubmit = async (event) => {


    Load(1);
    const personalData =
    {
      cname: values.cname,
      mobile: values.mobile,
      address: values.address,
    }
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true)

    event.preventDefault();
    event.preventDefault();
    await axios.post("https://gsgroups.onrender.com/api/sendmail", { personal: personalData, product: inputFields })
      .then(response => {
        window.alert(response.data.respMesg);
        setValues(initialValues);  // Clear personal details
        setInputFields([{ category: '', product: '', qty: '' }]);  // Clear product details
        Load(0);
      })
      .catch(error => {
        console.error("There was an error sending the data!", error);
        Load(0);
      });
    console.log(personalData, inputFields);
    


  }



  return (
    <>

      <Nav img={logo} />
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit} ><br />
          <center>
            <div className='pdata'>
              <div className='pform'>
                <Form.Group >
                  <Form.Label><h3>NAME:</h3></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="cname"
                    value={values.cname}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </Form.Group><br />

                <Form.Group >
                  <Form.Label><h5>MOBILE NUMBER:</h5></Form.Label>
                  <Form.Control
                    required
                    type="number"
                    name="mobile"
                    title="Give valid mobile number."
                    pattern="[1-9]{1}[0-9]{9}"
                    value={values.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                  />
                </Form.Group><br />

                <Form.Group >
                  <Form.Label><h5>ADDRESS:</h5></Form.Label>
                  <Form.Control as="textarea" rows="3"
                    required
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                  />
                </Form.Group><br />
              </div>


            </div>
          </center>

          <br />
          <br />

          <div className='productForm'>
            <h3 style={{ padding: '10px', color: "white" }}>Choose products you want:</h3><br />
            {inputFields.map((inputField, index) => (
              <div key={index} className="formcontainer">
                <div >
                  <Form.Select
                    required
                    name="category"
                    value={inputField.category}
                    onChange={(event) => handleInputChange(index, event)}
                  >
                    <option value="">--Select Category--</option>
                    <option value="Cement">Cement</option>
                    <option value="Steel">Steel</option>
                    <option value="Brick">Brick</option>
                    <option value="Blue metals">Blue metals</option>
                  </Form.Select>
                </div>

                <div>
                  {inputField.category && (
                    <Form.Select noValidate validated={validated}
                      required
                      name="product"
                      value={inputField.product}
                      onChange={(event) => handleInputChange(index, event)}
                    >
                      <option value="">--Select--</option>
                      {productOptions[inputField.category].map((product) => (
                        <option key={product} value={product}>
                          {product}
                        </option>
                      ))}
                    </Form.Select>
                  )}
                </div>

                <div >
                  <Form.Control className='qty' type="text" placeholder='Enter Qty: 2-units (or) 2-tons...'
                    required
                    name="qty"
                    value={inputField.qty}
                    onChange={(event) => handleInputChange(index, event)}
                  >

                  </Form.Control>< br />
                </div>
                < br />
              </div>

            ))}
            <Button className='add' variant="success" type="button" onClick={handleAddInput}>
              Add
            </Button><br></br>
          </div>
          < br />
          <div className='buttons'>
            <Button variant="primary" type="submit" disabled={!isFormValid}>
              {isFormValid && loading === 1 && <span className="spinner-border spinner-border-sm mr-1"></span>}
              Submit
            </Button>
          </div><br /><br />
          {/* <h3 style={{ color: "green", textAlign: 'center' }}>
            {msg}
          </h3> */}

        </Form>
      </Container>
    </>
  );
}


export default Booking;

import './Contact.css'
import Logo from '../../assets/logo/GS-logo.png'
import Bluemetal from '../../assets/logo/GS-logo-metal.png'
import Traders from '../../assets/logo/GS-logo-traders.png'
import Construction from '../../assets/logo/GS-logo-construction.png'
import brick from '../../assets/logo/GS-logo-brick.png'
export default function Contact() {
    return (
        <>
            <hr />
            <session className="mt-5" id='about'>

                <div className='row mt-5 mb-5'>
                    <div className='col-lg-4 ' style={{ textAlign: 'center', color: 'orangered' }} >
                        <h1 className='fw-bold '>CONTACT US</h1>

                    </div>
                    <div className='col-lg-5  addresscon d-flex mt-5' >
                        <div> <img className='logocon' src={Logo} alt="" />

                            <p >GS GROUPS, <br /> First floor GS CORNER,<br /> Sivagiri-638109,<br />
                                Erode Dt, TN</p></div>


                        <iframe className='frame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.8970401122347!2d77.7874098749707!3d11.121045552742743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba97858b15d93df%3A0x868a3ab705f4582!2sGS%20TRADERS!5e0!3m2!1sen!2sin!4v1683612079245!5m2!1sen!2sin"></iframe>


                    </div>
                    <div className='col-lg-3 mt-5'>
                        <h5 style={{ color: 'orangered' }}>FEEDBACK</h5>
                        <input type="text" placeholder='Name' /> <br />
                        <input type="text" placeholder='Feeedback' /> <br />
                        <button className='buttoncon mt-1'>Submit</button>

                        <div className='d-flex'>
                        <h5 className='data mt-2'>email:</h5>
                        <a className='mailcon' href="mailto:gsgrouo@gmail.com" >gsgroups@gmail.com</a>
                        
                        </div>
                        



                    </div>

                </div>

                <br/>

            </session>
        </>
    )
}
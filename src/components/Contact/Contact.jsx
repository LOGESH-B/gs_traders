import './Contact.css'
import Logo from '../../assets/logo/GS-logo.png'

export default function Contact() {
    return (
        <>

            <session className="mt-5" id='about'>


                <div className='col-lg-4 ' style={{ marginLeft: '25px', color: 'orangered' }} >
                    <h1 className='fw-bold '>CONTACT US</h1>

                </div>
                <div className='addresscon  mt-5' >
                    <div className='address'> <img className='logocon' src={Logo} alt="" />

                        <p >GS GROUPS, <br /> First floor GS CORNER,<br /> Sivagiri-638109,<br />
                            Erode Dt, TN</p>
                    </div>
                    <div>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d978.7245328115603!2d77.78870046951958!3d11.120964315237691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba97957beb60ddd%3A0xbcc49c8ce13fa3c7!2sGS%20GROUPS!5e0!3m2!1sen!2sin!4v1719151309646!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>


                <div className='col-lg-50 mt-5 ml-3 p-2 con'>
                    <div className='d-flex'>
                        <h5 className='data mt-2'>email:</h5>
                        <ul >
                            <li><a className='mailcon' href="mailto:gsgroups@gmail.com" >gsgroups@gmail.com</a></li>
                            <li><a className='mailcon' href="mailto:ponvishnugs@gmail.com" >ponvishnugs@gmail.com</a></li>
                            <li ><a className='mailcon' href="mailto:pradeepangangags@gmail.com" >pradeepangangags@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className='d-flex ' >
                        <h5 className='data mt-2'>phone:</h5>
                        <ul>
                            <li>PonVishnu - 8344941266</li>
                            <li>Gangatharan - 9965526657</li>
                            <li>Pradeepan - 9597906657</li>
                        </ul>
                    </div>

                </div>



                <div className='text-center fw-bold mt-5 ' style={{ letterSpacing: "1px" }}>
                    <p>All Rights Reserved @ GS Groups</p>
                </div>

            </session>
        </>
    )
}
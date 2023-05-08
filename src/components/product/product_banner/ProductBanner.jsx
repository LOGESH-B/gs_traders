import { useNavigate } from 'react-router-dom'
import './ProductBanner.css'
export default function ProductBanner(props){
    const navigate=useNavigate();
    return(
        <>
        <div style={{backgroundImage: `url(${props.bgimg})`}} className='phead'>
            <div className='row pt-4'>
                <div className='col col-md-8 headercontent'>
                    <h1 className='fw-b' >{props.name}</h1>
                    <h2>YOUR TRUSTED PROVIDER</h2>
                    <h5 className='mt-5'>{props.content}</h5>
                </div>
                <div className="col-md-4 text-center d-flex justify-content-center align-items-center">
                <div className='headbtn ' onClick={()=>navigate('/booking')}>BOOK NOW</div>
                </div>
            </div>       
        </div>    
        </>
    )
}
import './productheader.css'
import phead from '../../assets/images/pheader.jpeg'
export default function     Phead(props){
    return(
        <>
        <div style={{backgroundImage: `url(${props.bgimg})`}} className='phead'>
            <div className='row pt-4'>
                <div className='col-lg-6 headercontent'>
                    <h1 className='fw-b' >{props.name}</h1>
                    <h2>YOUR TRUSTED PROVIDER</h2>
                    <h5 className='mt-5'>{props.content}</h5>
                    <button className='headbtn'>BOOK NOW</button>
                </div>
            </div>       
        </div>    
        </>
    )
}
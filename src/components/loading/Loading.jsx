
import './Loading.css'
import loadimg from '../../assets/images/loading.gif'
export default function Loading(){
 return(

 
        <div className='loading'>
           <img className='loadimg' src={loadimg} alt="" />
           <h4 className='load'>Loading...</h4>
        </div>
 )
}

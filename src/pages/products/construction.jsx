
import Pdata from "../../components/product/productdata"
import Nav from '../../components/NavComponent/nav'
import Phead from '../../components/product/productheader'
import bgimg from '../../assets/images/pheader.jpeg'
import conslogo from '../../assets/logo\'s/GS-logo-construction.png'

export default function Construction(){
    const construction_data=[
        {
            _id: "1",
            img: '',
            location:'',
            price:''
        },
        {
            _id: "2",
            img: ' ',
            location:'',
            price:''
        },
        {
            _id: "3",
            img: '',
            location:'',
            price:''
        } 
        ]
    return(

        <>

            <Nav img={conslogo} w={150} />
            <Phead bgimg={bgimg} name={'GS BLUE METALS'} content={'we are the gs bluemetals we provide high quality bluemetals .we supply all kind of bluemetals'} />
            
            <div className="row">
                {construction_data.map((entry)=>(
                    
                        <div className="col-lg-6">
                            {entry._id}
                        </div>
                    
                ))}
            </div>

        </>
    )
}
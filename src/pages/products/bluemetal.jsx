
import Pdata from "../../components/product/productdata"
import Nav from '../../components/NavComponent/nav'
import Phead from '../../components/product/productheader'
import bluelogo from '../../assets/logo\'s/GS-logo-metal.png'
import bgimg from '../../assets/images/pheader.jpeg'
export default function Bluemetal() {
   const bluemetal_data=[
    {
        _id: "1",
        bname: 'dalmia',
        available: '',
        approxprice: '',
        img: ''
    },
    {
        _id: "2",
        bname: 'a',
        available: '',
        approxprice: '',
       
        img: ''
    },
    {
        _id: "3",
        bname: 's',
        available: '',
        approxprice: '',
       
        img: ''
    },
    {
        _id: "4",
        bname: 's',
        available: '',
        approxprice: '',
        
        img: ''
    },
    {
        _id: "5",
        bname: 's',
        available: '',
        approxprice: '',
        
        img: ''
    },
    {
        _id: "6",
        bname: 's',
        available: '',
        approxprice: '',
        
        img: ''
    }

    ]
    return (

        <>

            <Nav img={bluelogo} w={150} />
            <Phead bgimg={bgimg} name={'GS BLUE METALS'} content={'we are the gs bluemetals we provide high quality bluemetals .we supply all kind of bluemetals'} />
            <Pdata subproduct={'BLUE METALS'} subproduct2={''} productdata={bluemetal_data}  />

        </>
    )
}
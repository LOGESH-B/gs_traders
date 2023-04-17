
import ProductCard from "../../components/product/product_card/ProductCard"
import Nav from '../../components/NavComponent/nav'
import ProductBanner from '../../components/product/product_banner/ProductBanner'
import bgimg from '../../assets/images/pheader.jpeg'
import bricklogo from '../../assets/logo/GS-logo-brick.png'

export default function Bricks(){
    const bricks_data=[
         {
            _id: "1",
            bname: 'dalmia1',
            available: 'true',
            approxprice: '5000',
            img: bricklogo
        },
        {
            _id: "2",
            bname: 'dalmia2',
            available: 'true',
            approxprice: '5000',
            img: bricklogo
        },
        {
            _id: "3",
            bname: 'dalmia3',
            available: 'true',
            approxprice: '5000',
            img: bricklogo
        },
        {
            _id: "4",
            bname: 'dalmia4',
            available: 'true',
            approxprice: '5000',
            img: bricklogo
        },
        {
            _id: "5",
            bname: 'dalmia5',
            available: 'true',
            approxprice: '5000',
            img: bricklogo
        },
        {
            _id: "6",
            bname: 'dalmia6',
            available: 'true',
            approxprice: '5000',
            img: bricklogo
        }
        ]
    return(

        <>
            <Nav img={bricklogo} w={150} />
            <ProductBanner bgimg={bgimg} name={'Bricks'} content={'we are the gs bluemetals we provide high quality bluemetals .we supply all kind of bluemetals'} />
            <ProductCard subproduct={'Bricks'} subproduct2={''} productdata={bricks_data}  />
        

        </>
    )
}
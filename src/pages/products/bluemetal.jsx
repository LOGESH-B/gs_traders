
import ProductCard from "../../components/product/product_card/ProductCard"
import Nav from '../../components/NavComponent/nav'
import ProductBanner from '../../components/product/product_banner/ProductBanner'
import bluelogo from '../../assets/logo/GS-logo-metal.png'
import bgimg from '../../assets/images/pheader.jpeg'
export default function Bluemetal() {
   const bluemetal_data=[
    {
       _id: "1",
       bname: 'dalmia1',
       available: 'true',
       approxprice: '5000',
       img: bluelogo
   },
   {
       _id: "2",
       bname: 'dalmia2',
       available: 'true',
       approxprice: '5000',
       img: bluelogo
   },
   {
       _id: "3",
       bname: 'dalmia3',
       available: 'true',
       approxprice: '5000',
       img: bluelogo
   },
   {
       _id: "4",
       bname: 'dalmia4',
       available: 'true',
       approxprice: '5000',
       img: bluelogo
   },
   {
       _id: "5",
       bname: 'dalmia5',
       available: 'true',
       approxprice: '5000',
       img: bluelogo
   },
   {
       _id: "6",
       bname: 'dalmia6',
       available: 'true',
       approxprice: '5000',
       img: bluelogo
   }
   ]
    return (

        <>

            <Nav img={bluelogo} w={150} />
            <ProductBanner bgimg={bgimg} name={'GS BLUE METALS'} content={'we are the gs bluemetals we provide high quality bluemetals .we supply all kind of bluemetals'} />
            <ProductCard subproduct={'BLUE METALS'} subproduct2={''} productdata={bluemetal_data}  />

        </>
    )
}
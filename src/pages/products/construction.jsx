
import ProductCard from "../../components/product/product_card/ProductCard"
import Nav from '../../components/nav_component/Nav'
import ProductBanner from '../../components/product/product_banner/ProductBanner'
import bgimg from '../../assets/images/pheader.jpeg'
import conslogo from '../../assets/logo/GS-logo-construction.png'
import { useEffect } from "react"


export default function Construction() {
    const construction_data = [
        {
            _id: "1",
            img: '',
            location: '',
            price: ''
        },
        {
            _id: "2",
            img: ' ',
            location: '',
            price: ''
        },
        {
            _id: "3",
            img: '',
            location: '',
            price: ''
        }]

    useEffect(() => {
        // document.getElementsByClassName("flipster").flipster();
    })
    return (

        <>

            <Nav img={conslogo} w={150} />
            <ProductBanner bgimg={bgimg} name={'Construction'} content={'we are the gs bluemetals we provide high quality bluemetals .we supply all kind of bluemetals'} />

            <div >
                <ul>
                    <li><img src="http://localhost:3000/static/media/GS-logo-brick.83a652b3c7c632e6dd8e.png" alt="no img" /></li>
                    <li><img src="http://localhost:3000/static/media/GS-logo-brick.83a652b3c7c632e6dd8e.png" alt="no img" /></li>
                    <li><img src="http://localhost:3000/static/media/GS-logo-brick.83a652b3c7c632e6dd8e.png" alt="no img" /></li>
                    <li><img src="http://localhost:3000/static/media/GS-logo-brick.83a652b3c7c632e6dd8e.png" alt="no img" /></li>
                    <li><img src="http://localhost:3000/static/media/GS-logo-brick.83a652b3c7c632e6dd8e.png" alt="no img" /></li>
                    <li><img src="http://localhost:3000/static/media/GS-logo-brick.83a652b3c7c632e6dd8e.png" alt="no img" /></li>
                    <li><img src="http://localhost:3000/static/media/GS-logo-brick.83a652b3c7c632e6dd8e.png" alt="no img" /></li>
                    <li><img src="http://localhost:3000/static/media/GS-logo-brick.83a652b3c7c632e6dd8e.png" alt="no img" /></li>
                    <li><img src="http://localhost:3000/static/media/GS-logo-brick.83a652b3c7c632e6dd8e.png" alt="no img" /></li>
                    <li><img src="http://localhost:3000/static/media/GS-logo-brick.83a652b3c7c632e6dd8e.png" alt="no img" /></li>
                    <li><img src="http://localhost:3000/static/media/GS-logo-brick.83a652b3c7c632e6dd8e.png" alt="no img" /></li>
                </ul>
            </div>

        </>
    )
}
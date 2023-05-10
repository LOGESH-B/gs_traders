
import ProductCard from "../../components/product/product_card/ProductCard"
import Nav from '../../components/nav_component/Nav'
import ProductBanner from '../../components/product/product_banner/ProductBanner'
import bgimg from '../../assets/images/pheader.jpeg'
import conslogo from '../../assets/logo/GS-logo-construction.png'
import { useEffect } from "react"
import './Construction.css'
export default function Construction() {
    const construction_data = [
        {
            _id: "1",
            title: "",
            img: '',
            location: '',
            service: '',
            price: '',

        },
        {
            _id: "2",
            title: "",
            img: '',
            location: '',
            service: '',
            price: ''
        },
        {
            _id: "3",
            title: "",
            img: '',
            location: '',
            service: '',
            price: '',
        }]

    useEffect(() => {
        // document.getElementsByClassName("flipster").flipster();
    })
    return (

        <>

            <Nav img={conslogo} w={150} />
            <ProductBanner bgimg={bgimg} name={'Construction'} content={'we are the gs bluemetals we provide high quality bluemetals .we supply all kind of bluemetals'} />

            {/* <div >
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
            </div> */}



            <div>

                {construction_data.map((entry) => (

                    <div className="construction">
                        <div className="row">

                            <div className="col-lg-3">
                                <img className="conimg" src="https://media1.popsugar-assets.com/files/thumbor/mAVULQjJtIDsyVj7A9sj53zQ0uU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/02/21/912/n/29590734/42eba984fc82543f_GettyImages-922246082_master/i/Anne-Marie.jpg" alt="" />


                            </div>
                            <div className="col-lg-6 p-4">

                                <div>
                                    <h1 className="fw-b" style={{ color: 'orangered' }}>Commercial Building </h1>

                                </div>
                                <div className="pt-3 data">
                                    <table>
                                        <tr>
                                           
                                            <td>
                                                <h5 className="datas">Location</h5>

                                            </td>
                                            <td>
                                            <h5 className="datas">:</h5>
                                                
                                            </td>
                                            <td>
                                            <h5 className="datas">erode</h5>

                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <h5 className="datas">Price</h5>

                                            </td>
                                            <td>
                                            <h5 className="datas">:</h5>

                                            </td>
                                            <td>
                                            <h5 className="datas">19,00,000</h5>

                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <h5 className="datas">Service</h5>

                                            </td>
                                            <td>
                                            <h5 className="datas">:</h5>

                                            </td>
                                            <td>
                                            <h5 className="datas">Home Service</h5>

                                            </td>
                                        </tr>
                                    </table>


                                </div>

                            </div>

                        </div>

                    </div>

                ))
                }

            </div>

        </>
    )
}

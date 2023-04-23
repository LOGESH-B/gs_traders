import './ProductCard.css'
import Modal from "../../modal/modal_product/Modal";
import ModalForm from "../../modal/modal_form/ModalForm";
import AddBtn from '../../add_btn/AddBtn';
export default function ProductCard(props) {
    // const [modalOpen, setModalOpen] = useState(0);

    const setModalOpen = (id) => {
        var model = document.getElementById(id);
        document.body.style.overflow = 'hidden';
        model.style.display = "block";
    }

    const setModalClose = (id) => {
        document.body.style.overflow = 'visible';
        var model = document.getElementById(id);
        model.style.display = "none"
        console.log(model)
    }

    return (
        <>
            <div className='d-flex justify-content-between align-items-center dataheader'>
                <h1 id='products' className=" fs-2 fw-bold">{props.subproduct}</h1>
                <div className='addbtn' onClick={() => {
                    setModalOpen("form_addproduct");
                }}>
                    <AddBtn s="40px" clr="rgb(255,127,7)" />
                </div>
                <ModalForm id="form_addproduct" name="Add Product" setCloseModal={setModalClose} />

            </div>
            <div className="row datacards">
                {props.productdata.map((entry) => (
                    <div className=" col-lg-3 datacard hover">
                        <p className='fs-5 fw-bold text-center'>{entry.name}</p>
                        <div className="d-flex">
                            <div className='productimg ' style={{ backgroundImage: `url(${entry.img})` }}>
                            </div>

                            {/* <img src={entry.img} className="productimg img-responsive" alt="noppe" /> */}

                            <div className="p-4 mt-3 text-center"><h5 className="fw-bold" style={{ color: 'orangered', textTransform: 'capitalize' }}>{entry.bname}</h5>

                                <h5
                                    className="openModalBtn mb-0"
                                    onClick={() => {
                                        setModalOpen(entry._id);
                                    }}
                                    style={{ fontSize: 15, color: 'orange' }}
                                >
                                    View
                                </h5>
                                <p>&rarr;</p>
                            </div>
                        </div>



                        <Modal data={entry} id={entry._id} setCloseModal={setModalClose} />

                    </div>

                ))}

            </div>

            {props.subproduct2 && <div >


                <h1 id='products' className="dataheader fs-2 fw-bold">{props.subproduct2}</h1>
                <div className="row datacards">
                    {props.productdata2.map((entry) => (
                        <div className=" col-lg-3 datacard hover">

                            <img src={entry.img} className="productimg " alt="noppe" />

                            <div className="p-4 mt-3"><h5 className="fw-bold" style={{ color: 'orangered', textTransform: 'capitalize' }}>{entry.bname}</h5>

                                <h5
                                    className="openModalBtn"
                                    onClick={() => {
                                        setModalOpen(entry._id);
                                    }}
                                    style={{ fontSize: 15, color: 'orange' }}
                                >
                                    see details
                                </h5>
                            </div>


                            <Modal data={entry} id={entry._id} setCloseModal={setModalClose} />

                        </div>

                    ))}

                </div>

            </div>}

        </>
    )
}
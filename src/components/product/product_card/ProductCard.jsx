import './ProductCard.css'
import Modal from "../../modal/modal";
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
        model.style.display = "none";
    }

    return (
        <>
            <h1 id='products' className="dataheader fs-2 fw-bold">{props.subproduct}</h1>
            <div  className="row datacards">
                {props.productdata.map((entry) => (
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


           {props.subproduct2 &&  <div >


                <h1 id='products' className="dataheader fs-2 fw-bold">{props.subproduct2}</h1>
                <div  className="row datacards">
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
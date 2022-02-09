import { Fragment } from "react";
import { useNavigate } from "react-router";
import swal from "sweetalert";

const Gallery = () => {

    const navigate = useNavigate();

    const moreInfo = () => {
        swal(`Hi this section is for more information of this card...`);
    };

    return (
        <Fragment>
            <h4 className="text-center HeaderPage mt-5 mb-0">Gallery</h4>
            <div className="container mt-4 p-5">
                <div className="d-flex justify-content-end mb-5">
                    <button className="btn btn-danger marginR90" onClick={()=>navigate(-1)}>Back</button>
                </div>
                <div className="row text-justify">
                    <div className="col col-md-6 col-lg-3 mt-2">
                        <div className="card">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                                className="card-img-top"
                                alt="Sunset Over the Sea"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </p>
                                <a href="#!" className="btn btn-dark" onClick={moreInfo}>More Info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6 col-lg-3 mt-2">
                        <div className="card">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                                className="card-img-top"
                                alt="Sunset Over the Sea"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </p>
                                <a href="#!" className="btn btn-dark" onClick={moreInfo}>More Info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6 col-lg-3 mt-2">
                        <div className="card">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                                className="card-img-top"
                                alt="Sunset Over the Sea"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </p>
                                <a href="#!" className="btn btn-dark" onClick={moreInfo}>More Info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6 col-lg-3 mt-2">
                        <div className="card">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                                className="card-img-top"
                                alt="Sunset Over the Sea"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </p>
                                <a href="#!" className="btn btn-dark" onClick={moreInfo}>More Info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6 col-lg-3 mt-2">
                        <div className="card">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/185.webp"
                                className="card-img-top"
                                alt="Sunset Over the Sea"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </p>
                                <a href="#!" className="btn btn-dark" onClick={moreInfo}>More Info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6 col-lg-3 mt-2">
                        <div className="card">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/180.webp"
                                className="card-img-top"
                                alt="Sunset Over the Sea"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </p>
                                <a href="#!" className="btn btn-dark" onClick={moreInfo}>More Info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6 col-lg-3 mt-2">
                        <div className="card">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/186.webp"
                                className="card-img-top"
                                alt="Sunset Over the Sea"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </p>
                                <a href="#!" className="btn btn-dark" onClick={moreInfo}>More Info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6 col-lg-3 mt-2">
                        <div className="card">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/230.webp"
                                className="card-img-top"
                                alt="Sunset Over the Sea"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </p>
                                <a href="#!" className="btn btn-dark" onClick={moreInfo}>More Info</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mt-5">
                        <video className="img-fluid" autoPlay loop muted>
                            <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Gallery;
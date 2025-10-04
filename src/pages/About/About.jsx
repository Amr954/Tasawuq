import React from "react";
import './about.css'
import Footer from "../../components/Footer";


const About = () => {

    return (
        <>
            <div className="container">
                <h1 className="text">About Us</h1>
                <hr />
                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                    facere doloremque veritatis odit similique sequi. Odit amet fuga nam
                    quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
                    totam vero quas provident ipsam, veritatis nostrum velit quos
                    recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
                    earum unde eligendi autem praesentium, doloremque distinctio nesciunt
                    porro tempore quis eaque labore voluptatibus ea necessitatibus
                    exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
                    tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
                    quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
                    delectus expedita a alias nam recusandae illo debitis repellat libero,
                    quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
                    dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
                </p>
            </div>

            <div className="container2">
                <h1 className="text">Our Famous Products</h1>
                <hr />
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img className="card-img-top" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <h5 className="text-center">Men's Clothing</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img className="card-img-top" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <h5 className="text-center">Women's Clothing</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img className="card-img-top" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <h5 className="text-center">Jewelery</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img className="card-img-top" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <h5 className="text-center">Electronics</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default About
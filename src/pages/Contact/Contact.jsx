import React from 'react'
import Footer from '../../components/Footer'

function Contact() {
    return (
        <>
            <div className="container my-5 py-3">
                <h1 className="text">Contact Us</h1>
                <hr />
                <div className="row-content">
                    <div className="col-content">
                        <form>
                            <div className="content">
                                <label htmlFor="display-5">Name</label>
                                <input
                                    type="text"
                                    className="form-control border-2"
                                    id="display-5"
                                    placeholder="Enter Your Name"
                                />
                            </div>

                            <div className="content">
                                <label htmlFor="display-4">Email</label>
                                <input
                                    type="email"
                                    className="form-control border-2"
                                    id="display-4"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div className="content">
                                <label htmlFor="floatingmessage" >Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Enter your message"
                                    id="floatingmessage"
                                    className="form-control"
                                />
                            </div>
                            <div className="text-center">
                                <button className="btn-2" type="submit" disabled>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contact
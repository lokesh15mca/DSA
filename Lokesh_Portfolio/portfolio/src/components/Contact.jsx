import React from "react";
import "./Contact.css";
import gitlogo from "../Img/git-new.png";
import linkdin from "../Img/ldin.png";
// import contactImg from "../Img/roundedpic.png";
// import git_logo from "../Img/git-new.png";
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                {/* <div className="col__2"> */}
                <div className="contact__box">
                    <div className="contact__meta">
                        <h1 className="hire__text">Contact me.</h1>
                        <p className="hire__text white">Have an idea?</p>
                        <p className="hire__text white">Let's make something great!</p>

                        {/* <p className="hire__text white">Connect with me via phone:</p> */}
                        <p className="hire__text white">Connect with me via phone:
                            <strong>+91-8302880785</strong> or email{" "}
                            <strong>lokesh15mca@gmail.com</strong>
                        </p>
                        <div style={{marginLeft:"40%"}}>
                        <a href="https://github.com/lokesh15mca">
                            <img
                                src={gitlogo}
                                alt="no-img"
                                className="footer__img pointer"
                                style={{ height: "40px" }}
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/lokesh-singh-4bb1b6126/">
                            <img
                                src={linkdin}
                                alt=""
                                className="footer__img pointer"
                                style={{ height: "40px" }}
                            />
                        </a>
                        </div>
                    </div>
                    {/* <div>
                        <a href="https://github.com/lokesh15mca">
          <img
            src={git_logo}
            alt="no-img"
            className="footer__img pointer"
            style={{ height: "20px" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/lokesh-singh-4bb1b6126/">
          <img
            src={linkdin}
            alt=""
            className="footer__img pointer"
            style={{ height: "20px" }}
          />
        </a>
                        </div> */}
                </div>
            </div>
        </div>
    );
}

export default Contact;

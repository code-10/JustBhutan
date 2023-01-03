import logo from "../../../assets/logo.svg"

import ginger from "../../../assets/Ginger2.png"
import mint from "../../../assets/Mint2.png"
import tulsi from "../../../assets/Tulsi2.png"
import turmeric from "../../../assets/Tumeric2.png"

export default function FooterSection () {
    return(
        <div className="position-relative mt-7 mt-xl-8">
            <div className="position-absolute start-50 top-0 translate-middle w-100">
                <div className="d-flex flex-row justify-content-around px-4">
                    <img src={turmeric}  className="footer-image-fix"/>
                    <img src={mint}  className="footer-image-fix"/>
                    <img src={ginger}  className="footer-image-fix"/>
                    <img src={tulsi}  className="footer-image-fix"/>
                </div>
            </div>
            <div className="bg-footer-black text-light px-5 pt-6 pb-7 px-xl-6 position-relative">
                <div className="d-flex flex-row flex-wrap justify-content-between">
                    <div className="">
                        <div className="d-flex flex-column align-items-center">
                            <div className="align-self-start">
                                <h6 className="pb-2 fs-5 text-heading">
                                    Customer Support
                                </h6>
                                <p className="text-secondary">
                                    support@justbhutan.in |+91 8073263514
                                </p>
                            </div>
                            <div className="pb-5">
                                <h6 className="pb-2 fs-5 text-heading pt-lg-6 pt-5">
                                    For Distribution Rights
                                </h6>
                                <p className="text-secondary">
                                    international@justbhutan.in | +91 8073263514
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="d-flex flex-column justify-items-center gap-5">
                            <div>
                                <h6 className="pb-2 fs-5 text-heading">
                                    Address
                                </h6>
                                <p>
                                    <b>Sourced:</b> Bhutan Farms
                                </p>
                                <br/>
                                <p>
                                    <b>Head Office:</b> H No 8-2-684/1/9, Road No. 12 , Banjara Hills,<br/>
                                    Hyderabad, Telangana, India 500034
                                </p>
                            </div>
                            <div className="align-self-start">
                                <img src={logo} width={150}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
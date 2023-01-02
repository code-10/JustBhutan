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
            <div className="bg-footer-black text-light pt-6 pb-7 px-md-1 px-xl-6 position-relative">
                <div className="d-flex flex-row flex-wrap justify-content-between">
                    <div className="px-3">
                        <div className="d-flex flex-column align-items-center gap-6">
                            <div>
                                <h6 className="pb-2 fs-5 text-heading">
                                    Customer Support
                                </h6>
                                <p className="text-secondary">
                                    You'll call us, just to tell us how good our teas are
                                </p>
                            </div>
                            <div>
                                <h6 className="pb-2 fs-5 text-heading">
                                    For Distribution Rights
                                </h6>
                                <p className="text-secondary">
                                    You'll call us, just to tell us how good our teas are
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 pt-5 pt-lg-0">
                        <div className="d-flex flex-column align-items-center gap-6">
                            <div>
                                <h6 className="pb-2 fs-5 text-heading">
                                    Address
                                </h6>
                                <p>
                                    H No 8-2-684/1/9, Road No. 12 Bhavani Nagar,<br/>
                                    Banjara Hills, Hyderabad, Telangana, India 500034
                                </p>
                            </div>
                            <div className="align-self-start">
                                <img src={logo} className="w-100"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
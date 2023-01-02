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
            <div className="bg-footer-black text-light pt-6 pb-7 px-md-1 px-xl-5 position-relative">
                <div className="d-flex flex-row flex-wrap justify-content-around">
                    <div className="px-3">
                        <div className="d-flex flex-column align-items-center gap-6">
                            <div>
                                <h4 className="pb-2">
                                    Customer Support
                                </h4>
                                <h6 className="text-secondary">
                                    You'll call us, just to tell us how good our teas are
                                </h6>
                            </div>
                            <div>
                                <h4 className="pb-2">
                                    For Distribution Rights
                                </h4>
                                <h6 className="text-secondary">
                                    You'll call us, just to tell us how good our teas are
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 pt-5 pt-lg-0">
                        <div className="d-flex flex-column align-items-center gap-6">
                            <div>
                                <h4 className="pb-2">
                                    Address
                                </h4>
                                <h6>
                                    H No 8-2-684/1/9, Road No. 12 Bhavani Nagar,<br/>
                                    Banjara Hills, Hyderabad, Telangana, India 500034
                                </h6>
                            </div>
                            <div className="align-self-start">
                                <img src={logo} className="w-75"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
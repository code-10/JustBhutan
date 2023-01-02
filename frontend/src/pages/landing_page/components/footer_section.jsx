import logo from "../../../assets/logo.svg"

import ginger from "../../../assets/Ginger2.png"
import mint from "../../../assets/Mint2.png"
import tulsi from "../../../assets/Tulsi2.png"
import turmeric from "../../../assets/Tumeric2.png"

export default function FooterSection () {
    return(
        <div className="position-relative mt-7 mt-xl-8">
            <div className="d-none d-xl-flex flex-row justify-content-around bottom-0 start-50 translate-middle position-absolute">
                <img src={turmeric} className="img-fluid"/>
                <img src={mint} className="img-fluid"/>
                <img src={ginger} className="img-fluid"/>
                <img src={tulsi} className="img-fluid"/>
            </div>
            <div className="bg-footer-black text-light py-6 px-md-5 px-xl-6 pb-7 position-relative">
                <div className="row row-cols-lg-2 row-cols-1">
                    <div className="col">
                        <div className="d-flex flex-column align-items-center gap-6">
                            <div>
                                <h3>
                                    Customer Support
                                </h3>
                                <h5 className="text-secondary">
                                    You'll call us, just to tell us how good our teas are
                                </h5>
                            </div>
                            <div>
                                <h3>
                                    For Distribution Rights
                                </h3>
                                <h5 className="text-secondary">
                                    You'll call us, just to tell us how good our teas are
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-5 mt-md-0">
                        <div className="d-flex flex-column align-items-center gap-5">
                            <div>
                                <h3>
                                    Address
                                </h3>
                                <h5>
                                    H No 8-2-684/1/9, Road No. 12 Bhavani Nagar,<br/>
                                    Banjara Hills, Hyderabad, Telangana, India 500034
                                </h5>
                            </div>
                            <div>
                                <img src={logo}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
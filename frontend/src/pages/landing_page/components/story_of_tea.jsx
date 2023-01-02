import teacup_image from "../../../assets/tea_cup.png"
import story1 from "../../../assets/story1.png"
import story2 from "../../../assets/story2.png"
import story3 from "../../../assets/story3.png"



export default function StoryOfTeaSection(){
    return(
        <div className="container-fluid text-center position-relative">
            <img src={teacup_image} className="w-25 position-absolute start-50 top-0 translate-middle" alt="teacup image"/>
            <div className="pt-5 mt-5"></div>
            <div className=" mt-5"></div>
            <h1 className="text-primary text-center"> The Story Of Our Teas </h1>
            <h3> Which can soon be yours  </h3>
            <div className="d-flex flex-md-row flex-column justify-content-md-evenly gap-5 align-items-center align-items-md-end mt-5">
                <div>
                    <img src={story1} alt="story1" width={241} />
                    <p className="mt-4 h5">Sourced From Farmers</p>
                </div>
                <div>
                    <img src={story2} alt="story2" width={241}/>
                    <p className="mt-4 h5">Sourced From Farmers</p>
                </div>
                <div>
                    <img src={story3} alt="story3" width={241}/>
                    <p className="mt-4 h5">Sourced From Farmers</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-12 col-xl-10 col-lg-8">
                    <div className="row mt-5 flex-column flex-md-row text-center">
                        <div className="col d-flex flex-column gap-3 border-end border-dark opacity-25 text-md-end pe-md-5">

                            <h1 className="pt-5"><span className="text-primary">What You</span> Won't <span className="text-primary">Get</span></h1>
                            <h5>Pesticide infused tea</h5>
                            <h5>Heavy metal laden tea</h5>
                            <h5 className="pb-md-6">Air pollution absorbing herbs</h5>
                        </div>
                        <div className="col d-flex flex-column gap-3  text-md-start ps-md-5">

                            <h1 className="pt-5">What You <span className="text-primary">Will</span> Get</h1>
                            <h5>Non GMO, 100% organic herbs</h5>
                            <h5>A refreshingly strong taste & aroma</h5>
                            <h5>Teas grown in the healthiest of soils</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
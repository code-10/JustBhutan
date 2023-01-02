import teacup_image from "../../../assets/tea_cup.png"
import story1 from "../../../assets/story1.png"
import story2 from "../../../assets/story2.png"
import story3 from "../../../assets/story3.png"



export default function StoryOfTeaSection(){
    return(
        <div className="container-fluid text-center position-relative" >
            <img src={teacup_image} className=" tea-image position-absolute start-50 top-0 translate-middle" alt="teacup image"/>
            <div className="mt-lg-7 mt-6 "></div>
            <h3 className="text-primary text-center text-heading"> The Story Of Our Teas </h3>
            <p> Which can soon be yours  </p>
            <div className="d-flex flex-md-row flex-wrap flex-column justify-content-md-evenly gx-6 gy-5 align-items-md-end align-items-center my-5 my-lg-6 story-image-block">
                <div>
                    <img src={story1} alt="story1"  />
                    <p className=" mt-4 ">Sourced From Farmers</p>
                </div>
                <div className="d-lg-none d-block w-100"></div>
                <div>
                    <img src={story2} alt="story2" />
                    <p className="mt-4 ">Processed Traditionally</p>
                </div>
                <div>
                    <img src={story3} alt="story3" />
                    <p className="mt-4 ">From Bhutan, To You</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-11 col">
                    <div className="row flex-column flex-md-row text-center">
                        <div className="col d-flex flex-column gap-3  opacity-25 text-md-end pe-md-5">
                            <h3 className="pt-5"><span className="text-primary">What You</span> Won't <span className="text-primary">Get</span></h3>
                            <p>Pesticide infused tea</p>
                            <p>Heavy metal laden tea</p>
                            <p className="pb-md-6">Air pollution absorbing herbs</p>
                        </div>
                        <div className="col d-flex flex-column gap-3 border-start border-3 border-dark  text-md-start ps-md-5">
                            <h3 className="pt-5">What You <span className="text-primary">Will</span> Get</h3>
                            <p>Non GMO, 100% organic herbs</p>
                            <p>A refreshingly strong taste & aroma</p>
                            <p className="pb-md-6">Teas grown in the healthiest of soils</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
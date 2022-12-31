const story_elements = [
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},

]
export default function ForestSection () {
    return(
        <div className="text-center mt-5 ">
            <div className="position-relative">
                <img src={forest_image} className="img-fluid" alt="forest image"/>
                <div className="position-absolute top-50 start-0 text-center w-100 text-light translucent-black-background">
                    <h2 className="text-heading pt-4">
                        Our Solution: Herbal Teas From Bhutan.
                    </h2>
                    <h5>
                        The last truly organic country
                    </h5>
                </div>
                <img src={teacup_image} className="w-25 position-absolute top-100 start-50 translate-middle" alt="teacup image"/>
            </div>
        </div>
    )
}
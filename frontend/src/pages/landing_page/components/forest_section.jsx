import forest_image from "../../../assets/tea_field_something.png"

export default function ForestSection () {
    return(
        <div className="text-center">
            <div className="position-relative">
                <img src={forest_image} className="img-fluid ratio ratio-16x9" alt="forest image"/>
                <div className="position-absolute py-3 py-md-5 w-75 top-50 start-50 text-center translate-middle text-light translucent-black-background">
                    <h1 className="text-heading mb-3">
                        Our Solution: Herbal Teas From Bhutan.
                    </h1>
                    <h5 className="text-subheading-rfs">
                        The last truly organic country
                    </h5>
                </div>
            </div>
        </div>
    )
}
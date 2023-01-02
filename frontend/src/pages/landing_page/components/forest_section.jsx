import forest_image from "../../../assets/tea_field_something.png"

export default function ForestSection () {
    return(
        <div className="text-center" id="forest">
            <div className="position-relative">
                <img src={forest_image} className="ratio ratio-16x9 forest-image" alt="forest image"/>
                <div className="position-absolute py-3 py-md-5 w-75 top-50 start-50 text-center translate-middle text-light translucent-black-background">
                    <h3 className="text-heading mb-3">
                        Our Solution: Herbal Teas From Bhutan.
                    </h3>
                    <h6 className="">
                        The last truly organic country
                    </h6>
                </div>
            </div>
        </div>
    )
}
const plant_image = "https://uploads-ssl.webflow.com/63a80885ac4e7cdae577faf0/63a97c0ad2940d8fb08cfa5b_Plant%20Drawing.svg"

const plant_labels = [
    {
        url:"https://www.fhi.no/en/news/2021/heavy-metals-pregnancy-adhd/#:~:text=Several%20heavy%20metals%20such%20as,the%20fetus%20through%20the%20placenta.", 
        text:"Cancer Causer", 
        align:"text-end",
        position:"top-0 end-0", 
        image:"https://uploads-ssl.webflow.com/63a80885ac4e7cdae577faf0/63a97c0a0bd1f400b43495e7_Line%201.svg"},
    {
        url:"https://www.fhi.no/en/news/2021/heavy-metals-pregnancy-adhd/#:~:text=Several%20heavy%20metals%20such%20as,the%20fetus%20through%20the%20placenta.", 
        text:"Birth Defects", 
        align:"text-start", 
        position:"top-50 start-0", 
        image:"https://uploads-ssl.webflow.com/63a80885ac4e7cdae577faf0/63a97c0a90b0ca026bcc608f_Line3.svg"},
    {
        url:"https://rezilirhealth.com/brain-health-heavy-metal-toxic-exposure/#:~:text=Exposure%20to%20high%20levels%20of,or%20hearing%2C%20and%20memory%20problems.", 
        text:"Decreases Brain Activity", 
        align:"text-end",
        position:"bottom-0 end-0", 
        image:"https://uploads-ssl.webflow.com/63a80885ac4e7cdae577faf0/63a97c0af3ba37bb86f6fafb_Line2.svg"},
] 

export default function PlantSection () {
    return(
        <div className="container-sm text-center mt-sm-5 pt-sm-5">
            <h1 className="text-heading">
            <span className="text-primary">"Organic"</span> Herbal Teas From India? 
            </h1>
            <h4>
                Busting the myth, with concrete facts
            </h4>
            <div className="row">
                <div className="mt-5 position-relative col-md-12 col-lg-10 mx-auto">

                    <img src={plant_image} className="" width={180} alt="tea plant"/>
                    
                    {/* add labels to plant image using absolute positioning */}
                    { plant_labels.map( (plant_label, i) =>
                        <div className={`position-absolute ${plant_label.position} d-md-inline-block d-none`}>
                            <div className={`position-relative ${plant_label.align}`}>
                                <a href={plant_label.url} className={`text-dark position-absolute z-2 ${ plant_label.align === "text-end" ? 'top-0 end-0' : 'top-0 start-0'}`}>
                                    {plant_label.text}
                                </a>
                                { plant_label.align === "text-end" && i === 0 && <br/>}
                                <img src={plant_label.image} alt="plant label" className=""/>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}
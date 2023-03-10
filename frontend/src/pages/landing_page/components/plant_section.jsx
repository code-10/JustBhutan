const plant_image = "https://uploads-ssl.webflow.com/63a80885ac4e7cdae577faf0/63a97c0ad2940d8fb08cfa5b_Plant%20Drawing.svg"

const plant_labels = [
    {
        url:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4699750/", 
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
        <div className="container-sm px-xxl-7 px-xl-6 text-center pt-5" id='plant'>
            <h3 className="text-heading">
                <span className="text-primary">"Organic"</span> Herbal Teas From India? 
            </h3>
            <p>
                Click each one to know more
            </p>
            <div className="row my-5 py-1 my-lg-6 justify-content-center">
                <div className="position-relative col-md-10">

                    <img src={plant_image} className="some-plant"  alt="tea plant"/>
                    
                    {/* add labels to plant image using absolute positioning */}
                    { plant_labels.map( (plant_label, i) =>
                        <div key={i} className={`position-absolute ${plant_label.position} d-lg-inline-block d-none `}>
                            <div className={`position-relative ${plant_label.align}`}>
                                <a href={plant_label.url} target="_blank" className={`text-dark fw-bold fs-7 text-decoration-none position-absolute z-2 text-nowrap my-0 ${ plant_label.align === "text-end" && i === 0 && "mb-4 "} ${ plant_label.align === "text-end" ? 'bottom-0 end-0 pb-2' : 'top-0 start-0'}`}>
                                    {`${i+1}. `} {plant_label.text}
                                </a>
                                { plant_label.align === "text-end" && i === 0 && <br/>}
                                <img src={plant_label.image} alt="plant label" className="w-59"/>
                            </div>
                        </div>
                    )}

                    <div className="d-lg-none d-flex flex-column gap-2 mt-4">
                        { plant_labels.map ( (lbl, i) => <a key={i} href={lbl.url} className="text-dark fw-bold fs-75 text-decoration-none text-nowrap">{lbl.text}</a>)}
                    </div>

                </div>
            </div>
        </div>
    )
}
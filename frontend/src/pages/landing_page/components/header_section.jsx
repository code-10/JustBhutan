import video from "../../../assets/header_video.mp4"

const teapot_png = "https://uploads-ssl.webflow.com/63a80885ac4e7cdae577faf0/63a99d1dcefc0f2a1dc87cea_Tea%20kettle%202.png"

const articles = [
    { url:'https://timesofindia.indiatimes.com/city/varanasi/heavy-metal-toxicity-increasing-in-herbal-products/articleshow/7564346.cms', image:'https://uploads-ssl.webflow.com/63a80885ac4e7cdae577faf0/63a95377a014a552850d7a92_News%201.png'},
    { url:'https://indianexpress.com/article/business/world-market/high-pesticides-indian-tea-7951300/', image:'https://uploads-ssl.webflow.com/63a80885ac4e7cdae577faf0/63a94e24860562a7e12543c7_new2.png'},
    { url:'https://www.livemint.com/news/india/heres-why-indian-tea-is-being-rejected-by-global-buyers-11654256327500.html', image:'https://uploads-ssl.webflow.com/63a80885ac4e7cdae577faf0/63a9544fa014a501690d876a_News3.png'},
    { url:'https://www.hindustantimes.com/india-news/high-in-pesticides-many-countries-send-back-indian-tea-101654255985929.html', image:'https://uploads-ssl.webflow.com/63a80885ac4e7cdae577faf0/63a94e05860562b607254380_News%204.png'},
]

export default function HeaderSection(){
    return(
        <div className=" text-center py-1 py-sm-5">
            <video src={video} className="header-video" autoPlay loop muted></video>
        </div>
    )
}
const teapot_png = "https://uploads-ssl.webflow.com/63a80885ac4e7cdae577faf0/63a99d1dcefc0f2a1dc87cea_Tea%20kettle%202.png"

const articles = [
    { url:'https://timesofindia.indiatimes.com/city/varanasi/heavy-metal-toxicity-increasing-in-herbal-products/articleshow/7564346.cms', image:'https://uploads-ssl.webflow.com/63a80885ac4e7cdae577faf0/63a95377a014a552850d7a92_News%201.png'},
    { url:'https://indianexpress.com/article/business/world-market/high-pesticides-indian-tea-7951300/', image:'https://uploads-ssl.webflow.com/63a80885ac4e7cdae577faf0/63a94e24860562a7e12543c7_new2.png'},
    { url:'https://www.livemint.com/news/india/heres-why-indian-tea-is-being-rejected-by-global-buyers-11654256327500.html', image:'https://uploads-ssl.webflow.com/63a80885ac4e7cdae577faf0/63a9544fa014a501690d876a_News3.png'},
    { url:'https://www.hindustantimes.com/india-news/high-in-pesticides-many-countries-send-back-indian-tea-101654255985929.html', image:'https://uploads-ssl.webflow.com/63a80885ac4e7cdae577faf0/63a94e05860562b607254380_News%204.png'},
]

export default function HeaderSection(){
    return(
        <div className="container-xxl mt-5">
            <div className="row row-cols-2">

                {/* Column 1 */}
                <div className="col-sm vstack gap-5 ">
                    <h1 className="text-heading">
                        Are You Happy With Your <br/><span className="text-primary">Green Tea ?</span>
                    </h1>
                    <img src={teapot_png} alt="teapot" className="img-fluid" width={400}/>
                </div>

                {/* Columns 2 */}
                <div className="col-sm vstack gap-5">
                    {articles.map( article => 
                    <a href={article.url}>
                        <img className="img-fluid" alt="article image" src={article.image}/>
                    </a>)}
                    <a href="https://drive.google.com/file/d/1OxPi52AXl431KEZXvzfBrMdd_88ht0yH/view?usp=share_link" className="h4 text-dark">
                        More Articles
                    </a>
                </div>
                
            </div>
        </div>
    )
}
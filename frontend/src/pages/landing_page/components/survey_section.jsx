import { useState } from "react";
import { useEffect } from "react";
import fake_product_data from "../../../common/fakedata/product_data";
import { useFormik } from 'formik';

export default function SurveySection() {
    const [productData, setProductData] = useState([]);
    console.log(fake_product_data)
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            phone:'',
            city:'',
        },
        onSubmit: values => {
            alert(JSON.stringify(values))
        }
    }) 

    useEffect(() => {
        setProductData(fake_product_data)
    }, [])

    return(
        <div className="mt-md-7 mt-6 container-sm">
            <div className="text-center">
                <h1>
                    <span className="text-primary"> Your Choice </span> Matters
                </h1>
                <h4>
                    Your interest helps us launch the flavours you want!
                </h4>
            </div>
            <form className="mt-sm-6" onSubmit={formik.handleSubmit}>
                <div className="row row-cols-lg-4 row-cols-md-2 justify-content-center">
                    {productData.map( sub_category_data => 
                        <div className="">
                            <h2 className=""> {sub_category_data.sub_category_name} </h2>
                            <div className="ps-4">
                                {sub_category_data.products.map( product_data => 
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox"/>
                                        <label class="form-check-label">
                                            {product_data.product_name}
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className="row justify-content-center">
                    <div className="d-flex flex-column col-8 col-md-7 col-lg-6 col-xl-5 py-md-5 py-4  gap-5 ">
                        <div class="form-group">
                            <p for="" className="h6 text-center">Your Name</p>
                            <input type="text" size="129" required class="form-control bg-lightgray rounded-pill py-2" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} aria-describedby="" placeholder=""/>
                        </div>
                        <div class="form-group">
                            <p for="" className="h6 text-center">Email</p>
                            <input type="email" required class="form-control bg-lightgray rounded-pill py-2" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} aria-describedby="" placeholder=""/>
                        </div>
                        <div class="form-group">
                            <p for="" className="h6 text-center">Phone</p>
                            <input type="tel" minLength={10} maxLength={10} required class="form-control bg-lightgray rounded-pill py-2" id="phone" name="phone" onChange={formik.handleChange} value={formik.values.phone} aria-describedby="" placeholder=""/>
                        </div>
                        <div class="form-group">
                            <p for="" className="h6 text-center">City</p>
                            <input type="tel" minLength={10} maxLength={10} required class="form-control bg-lightgray rounded-pill py-2" id="city" name="city" onChange={formik.handleChange} value={formik.values.phone} aria-describedby="" placeholder=""/>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row justify-content-center mt-5">
                    <button className="btn btn-primary btn-lg text-light fw-senibold px-5  rounded-pill">Submit</button>
                </div>
            </form>
        </div>
    )
}
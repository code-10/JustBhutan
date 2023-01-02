import { useState } from "react";
import { useEffect } from "react";
import fake_product_data from "../../../common/fakedata/product_data";
import { useFormik } from 'formik';
import product from "../../../common/services/product"
import survey from "../../../common/services/survey";

export default function SurveySection() {
    const [productData, setProductData] = useState([]);
    const [origProductKV, setOrigProductKV] = useState({})
    const [productKV, setProductKV] = useState({});
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            phone:'',
            city:'',
        },
        onSubmit: (values, {setSubmitting, setErrors, setStatus, resetForm}) => {
            const product_preference = []
            Object.keys(productKV).forEach( sub_cat_id => {
                const pref_prod  = Object.keys(productKV[sub_cat_id]).filter( product_id => productKV[sub_cat_id][product_id].selected )
                product_preference.push(...pref_prod);
            })
            if(product_preference.length === 0){
                alert("No Product Selected")
                setStatus({success: false})
                setSubmitting(false)
                setErrors({submit: "No Product Selected"})
                return
            }
            survey.postSurvey(values.name, values.email, values.phone, values.city, product_preference)
                .then( d => {
                    console.log(d);
                    alert("Submitted");
                    resetForm({})
                    setStatus({success: true})
                    setProductKV(origProductKV);
                })
                .catch(d =>{
                     alert("error", d)
                     setStatus({success: false})
                     setSubmitting(false)
                     setErrors({submit: "No Product Selected"})
                    })
        }
    }) 

    useEffect(() => {
        product.getProducts('')
            .then( data => {
                setProductData(data)
                const proccessedProductData = {}
                data.forEach( sub_cat => {
                    const sub_cat_id = sub_cat.sub_category_id;
                    proccessedProductData[sub_cat_id] = {}
                    sub_cat.products.forEach(product => {
                        proccessedProductData[sub_cat_id][product.product_id] = { selected: false }
                    });
                });  
                console.log(proccessedProductData);
                setProductKV(proccessedProductData);
                setOrigProductKV(JSON.parse(JSON.stringify(proccessedProductData)));
                setProductData(data);                
            })
    }, [])

    const handleCheckbox = (a, sub_cat_id, prod_id) => {
        console.log(a, sub_cat_id, prod_id)
        const prevProductKV = JSON.parse(JSON.stringify(productKV))
        prevProductKV[sub_cat_id][prod_id].selected = a.target.checked
        setProductKV(prevProductKV)
    }
    return(
        <div className=" mt-6 vstack">
            <div className="text-center">
                <h1>
                    <span className="text-primary"> Your Choice </span> Matters
                </h1>
                <h4>
                    Your interest helps us launch the flavours you want!
                </h4>
            </div>
            <form className="mt-6" onSubmit={formik.handleSubmit} id='survey'>
                <div className="container-sm mx-auto row row-cols-xxl-4 row-cols-sm-2 row-cols-1">
                        {productData.map( (sub_category_data, i) =>
                            <div key={i} className="col">
                                <div className="d-flex flex-column align-items-center p-3">
                                    <div>
                                        <div className="py-2 "> 
                                            <h4 className="ps-1 fw-bold">
                                                {sub_category_data.sub_category_name}
                                            </h4>
                                            <div className="rounded-pill bg-primary div-line"></div>
                                        </div>
                                        <div className="d-flex flex-column gap-3">
                                            <div className=""></div>
                                            {sub_category_data.products.map( (product_data, i) => 
                                                <div key={i} className="d-flex flex-row gap-4">
                                                    <input className="form-check-input" type="checkbox" checked={productKV[sub_category_data.sub_category_id][product_data.product_id].selected} onChange={(e) => handleCheckbox(e, sub_category_data.sub_category_id, product_data.product_id)}/>
                                                    <h6 className="form-check-label d-inline">
                                                        {product_data.product_name}
                                                    </h6>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
                <h3 className="text-primary text-center mt-6"> We will not spam you, Promise</h3>
                <div className="survey-form-center mx-auto px-4">
                        <div className="d-flex flex-column py-5 pt-sm-6 pb-5 gap-5 ">
                            <div className="form-group">
                                <p  className="h5 text-center">Your Name</p>
                                <input type="text" size="129" required className="form-control bg-lightgray rounded-pill py-2" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} aria-describedby="" placeholder=""/>
                            </div>
                            <div className="form-group">
                                <p  className="h5 text-center">Email</p>
                                <input type="email" required className="form-control bg-lightgray rounded-pill py-2" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} aria-describedby="" placeholder=""/>
                            </div>
                            <div className="form-group">
                                <p  className="h5 text-center">Phone</p>
                                <input type="tel" minLength={10} maxLength={10} pattern="[0-9]{10}" required className="form-control bg-lightgray rounded-pill py-2" id="phone" name="phone" onChange={formik.handleChange} value={formik.values.phone} aria-describedby="" placeholder=""/>
                            </div>
                            <div className="form-group">
                                <p  className="h5 text-center">City</p>
                                <input type="tel" required className="form-control bg-lightgray rounded-pill py-2" id="city" name="city" onChange={formik.handleChange} value={formik.values.city} aria-describedby="" placeholder=""/>
                            </div>
                        </div>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <button type="submit" className="btn btn-primary btn-lg text-light fw-senibold px-5  rounded-pill">Submit</button>
                </div>
            </form>
        </div>
    )
}
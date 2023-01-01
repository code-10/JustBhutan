import { useState } from "react";
import { useEffect } from "react";
import fake_product_data from "../../../common/fakedata/product_data";
import { useFormik } from 'formik';

export default function SurveySection() {
    const [productData, setProductData] = useState({});
    
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            phone:'',
            zipcode:'',
        },
        onSubmit: values => {
            alert(JSON.stringify(values))
        }
    }) 

    useEffect(() => {
        setProductData(fake_product_data)
    }, [])

    return(
        <div className="mt-6">
            <div className="text-center">
                <h1>
                    <span className="text-primary"> Your Choice </span> Matters
                </h1>
                <h4>
                    Your interest helps us launch the flavours you want!
                </h4>
            </div>
            <form className="mt-sm-6">
                <div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-4 d-flex flex-column py-md-0 py-5  gap-5 pt-4">
                        <div class="form-group">
                            <p for="" className="h6 text-center">Your Name</p>
                            <input type="" class="form-control bg-lightgray rounded-pill py-2" id="name" name="name" aria-describedby="" placeholder=""/>
                        </div>
                        <div class="form-group">
                            <p for="" className="h6 text-center">Email</p>
                            <input type="" class="form-control bg-lightgray rounded-pill py-2" id="email" name="email" aria-describedby="" placeholder=""/>
                        </div>
                        <div class="form-group">
                            <p for="" className="h6 text-center">Phone</p>
                            <input type="" class="form-control bg-lightgray rounded-pill py-2" id="phone" name="phone" aria-describedby="" placeholder=""/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
import { useEffect, useState } from 'react';
import Navbar from '../component/navbar/navbar';
import './lp.css';
import { AxiosInstance } from '../util/axiosss';

const Landingpage = () => {
    //const data=['All Products','Electronics','Sports','Kitchenware']

    const [categories, setCategories] = useState([])

    const ca = async () => {
        try {
            const res = await AxiosInstance.get('/products/categories');
            console.log(res);
            setCategories(res.data)
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        ca();
    }, [])
}
    const rendercomponent = () => {
        return (
            <>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="home-title">
                                <h2>Welcome to Online Shopping...</h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="category-list">
                                <div className="category-item">
                                    All Products
                                </div>
                                {/*
                <div className="category-item">
                <a href="/products">All Products</a>
                </div>
                <div className="category-item">
                <a href="/products">Electronics</a>
                </div>
                */}
                                {
                                    categories.map((cate) => (
                                        <div className="category-item" key={cate.id}>
                                            {cate}

                                        </div>
                                    )
                                    )

                                }
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );

    }
    return (
        rendercomponent()
    );


export default Landingpage;
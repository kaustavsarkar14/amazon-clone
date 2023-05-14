import React from 'react'
import "./Home.css"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Product from './Product'

export default function Home() {
    return (
        <div className="home_bg">
            <div className="home">
                <Carousel className='carousel' showIndicators={false} showStatus={false} showThumbs={false} >
                    <div className="home_imageDiv">
                        <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/Mothers_day_3000x1200_Unrec._CB590261646_.jpg" />
                    </div>
                    <div className="home_imageDiv">
                        <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/MAYGTM2022/2023/D11_HeroPC_3000x1200_rev._CB589422742_.jpg" />
                    </div>
                </Carousel>

                <div className="home_row">
                    <Product
                        id="123"
                        title="Energize Your Mind: Learn the Art of Mastering Your Thoughts, Feelings and Emotions "
                        price={11.23}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/41RwQlo446L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                    />
                    <Product
                        id="123"
                        title="Energize Your Mind: Learn the Art of Mastering Your Thoughts, Feelings and Emotions "
                        price={11.23}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/41RwQlo446L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                    />

                </div>
                <div className="home_row">
                    <Product
                        id="123"
                        title="Energize Your Mind: Learn the Art of Mastering Your Thoughts, Feelings and Emotions "
                        price={11.23}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/41RwQlo446L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                    />
                    <Product
                        id="123"
                        title="Energize Your Mind: Learn the Art of Mastering Your Thoughts, Feelings and Emotions "
                        price={11.23}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/41RwQlo446L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                    />
                    <Product
                        id="123"
                        title="Energize Your Mind: Learn the Art of Mastering Your Thoughts, Feelings and Emotions "
                        price={11.23}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/41RwQlo446L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                    />

                </div>
                <div className="home_row">
                    <Product
                        id="123"
                        title="Energize Your Mind: Learn the Art of Mastering Your Thoughts, Feelings and Emotions "
                        price={11.23}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/41RwQlo446L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

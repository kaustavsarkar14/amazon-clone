import React from 'react'
import "./Home.css"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Product from './Product'

export default function Home() {
    return (
        <div className="home_bg">
            <div className="home">
                <Carousel className='carousel' emulateTouch={true} infiniteLoop={true} transitionTime={3} autoPlay={true}  showIndicators={false} showStatus={false} showThumbs={false} >
                    <div className="home_imageDiv">
                        <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/Mothers_day_3000x1200_Unrec._CB590261646_.jpg" />
                    </div>
                    <div className="home_imageDiv">
                        <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/MAYGTM2022/2023/D11_HeroPC_3000x1200_rev._CB589422742_.jpg" />
                    </div>
                    <div className="home_imageDiv">
                        <img className='home_image' src="https://m.media-amazon.com/images/I/71FdkjqVLyL._SX3000_.jpg" />
                    </div>
                    <div className="home_imageDiv">
                        <img className='home_image' src="https://m.media-amazon.com/images/I/71Vipccc6FL._SX3000_.jpg" />
                    </div>
                </Carousel>

                <div className="home_row">
                    <Product
                        id="123"
                        title="SAMSUNG Galaxy S23 Ultra Cell Phone, Factory Unlocked Android Smartphone, 256GB Storage, 200MP Camera, Night Mode, Long Battery Life, S Pen, US Version, 2023, Phantom Black"
                        price={1199}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71Sa3dqTqzL._AC_SX425_.jpg"
                    />
                    <Product
                        id="124"
                        title='Sony Alpha 7R III Mirrorless Camera with 42.4MP Full-Frame High Resolution Sensor, Camera with Front End LSI Image Processor, 4K HDR Video and 3" LCD Screen'
                        price={1998}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/81UWYKspnVL._AC_SX425_.jpg"
                    />

                </div>
                <div className="home_row">
                    <Product
                        id="125"
                        title="Energize Your Mind: Learn the Art of Mastering Your Thoughts, Feelings and Emotions "
                        price={11.23}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/41RwQlo446L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                    />
                    <Product
                        id="126"
                        title='Lenovo Flex 5 Laptop, 14.0" FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 512GB Storage, AMD Radeon Graphics, Windows 11 Home, Storm Grey'
                        price={649}
                        rating={3}
                        image="https://www.jiomart.com/images/product/420x420/493177181/lenovo-ideapad-flex-5-convertible-laptop-amd-ryzen-5-5500u-16-gb-512-gb-ssd-windows-11-home-mso-wuxga-35-56-cm-14-inch-digital-o493177181-p593411538-4-202208122112.jpeg"
                    />
                    <Product
                        id="127"
                        title="PlayStation PS5 Console – God of War Ragnarök Bundle "
                        price={509}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71zCErCYVXL._SX522_.jpg"
                    />

                </div>
                <div className="home_row">
                    <Product
                        id="128"
                        title='GIGABYTE G34WQC A 34" 144Hz Ultra-Wide Curved Gaming Monitor, 3440 x 1440 VA 1500R Display, 1ms (MPRT) Response Time, 90% DCI-P3, VESA Display HDR400, FreeSync Premium, (G34WQC A)'
                        price={540}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61mzM7JeQ2L._SY450_.jpg"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="125"
                        title="RBD Machine 75CC Powerful Woodcutting Saw for Farm, 2 Stroke Handed Petrol Chain Saw, Garden and Ranch with Tool Kit"
                        price={115}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/61ZvUqp1m2L._SX522_.jpg"
                    />
                    <Product
                        id="126"
                        title='Fastrack New Limitless FS1 Smart Watch|Biggest 1.95" Horizon Curve Display|SingleSync BT Calling v5.3|Built-in Alexa|Upto 5 Day Battery|ATS Chipset with Zero Lag|100+ Sports Modes|150+ Watchfaces'
                        price={30}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71KpoPUzJ2L._UX679_.jpg"
                    />
                    <Product
                        id="127"
                        title="Journey to the Moon : An incredible adventure story."
                        price={690}
                        rating={5}
                        image="https://cdn.discordapp.com/attachments/750764661980397598/1107348260261208104/dc.jpg"
                    />

                </div>
            </div>
        </div>
    )
}

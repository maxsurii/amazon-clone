import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Hush/Eventspage/GW/Prime_GW_Day_of_1500x600_main_StartsMidnight._CB408193077_.jpg"
          alt="Banner"
        />
        {/** Product Id, title, price, rating, image */}
        <div className="home__row">
          <Product
            id="1234512"
            title="POCO X2 (Matrix Purple, 64 GB)  (6 GB RAM)"
            price={499.99}
            rating={5}
            image="https://rukminim1.flixcart.com/image/312/312/k65d18w0/mobile/w/u/h/poco-x2-mzb9013in-original-imafzz2hdysz9njg.jpeg"
          />

          <Product
            id="1234513"
            title="Nilkamal Hero Engineered Wood Queen Bed  (Finish Color - Wenge)"
            price={499.99}
            rating={5}
            image="https://rukminim1.flixcart.com/image/416/416/k9re3rk0/bed/s/x/z/queen-na-particle-board-fiqbherobrqbwge-home-by-nilkamal-wenge-original-imafrhf9wvrze9yg.jpeg"
          />
          {/** Product */}
        </div>
        <div className="home__row">
          <Product
            id="1234514"
            title="Slim Men Light Blue Jeans"
            price={499.99}
            rating={5}
            image="https://rukminim1.flixcart.com/image/800/960/jh6l2fk0/jean/4/a/z/30-lj183a-lzard-original-imaf5883mb8vchhb.jpeg"
          />

          <Product
            id="1234515"
            title="Solid Men V Neck Black, Grey T-Shirt  (Pack of 3)"
            price={499.99}
            rating={5}
            image="https://rukminim1.flixcart.com/image/800/960/k6s82vk0/t-shirt/7/n/p/m-bss20vnpk09-billion-original-imafp5wjtuuhessx.jpeg"
          />

          <Product
            id="1234516"
            title="Fast look (Expandable) super premium quality polyester light weight duffel bag (sea green) Duffel Strolley Bag  (Blue)"
            price={499.99}
            rating={5}
            image="https://rukminim1.flixcart.com/image/800/960/k48rwcw0/duffel-bag/2/j/h/expandable-polyester-lightweight-40-l-luggage-travel-duffel-bag-original-imafmz4mxs5agmvu.jpeg"
          />
          {/** Product */}
        </div>

        <div className="home__row">
          <Product
            id="1234517"
            title="Mi 4A PRO 80 cm (32) HD Ready LED Smart Android TV With Google Data Saver"
            price={499.99}
            rating={5}
            image="https://rukminim1.flixcart.com/image/416/416/kc54ivk0/television/r/q/g/mi-l43m4-4ain-original-imaftc5fy6bfmhyb.jpeg"
          />
          {/** Product */}
        </div>
      </div>
    );
}

export default Home

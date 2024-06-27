import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import SectionHeading from '../components/section-heading'
import CategoryCard from '../components/category-card'
import BlogPostCard from '../components/blog-post-card'
import Footer from '../components/footer'
import './home.css'
import ImageSlider from '../components/ImageSlider'


const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Mobillio Online Store</title>
        <meta property="og:title" content="Mobillio Online Store" />
      </Helmet>
      <Navbar></Navbar>
      <div className="home-main">

        <div className="home-hero section-container">
          <div className="home-max-width max-width-container">
            <div className="home-hero1">
              <div className="home-container1">
                <div className="home-info">
                  <img
                    alt="Rectangle43271305"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMicgaGVpZ2h0PSc1Micgdmlld0JveD0nMCAwIDIgNTInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHdpZHRoPScyJyBoZWlnaHQ9JzUyJyBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScwLjUnLz4KPC9zdmc+Cg=="
                    className="home-image"
                  />
                  <span className="home-text">
                    <span>furniture</span>
                    <br></br>
                    <span>trends - 2022</span>
                  </span>
                </div>
                <h1 className="home-text04 Heading-1">Yellowstone</h1>
                <div className="home-container2">
                  <span className="home-text05">FROM</span>
                  <span className="home-text06">$339</span>
                </div>
                <div className="home-btn-group">
                  <button className="home-button button">
                    Explore the collection
                  </button>
                </div>
              </div>

              <div className='slider-container'>
                <ImageSlider />
              </div>

            </div>
          </div>
        </div>


        <div className="section-container column">
          <div className="home-max-width1 max-width-container">
            <SectionHeading
              heading="SHOP BY CATEGORIES"
              subtitle="Start shopping based on the categories you are interested in"
            ></SectionHeading>
            <div className="home-cards-container">
              <CategoryCard
                name="Arts and Crafts &amp; Stationery"
                categoryImg="/images/Arts.png"
                onClick={() => console.log("buton apasat")}
              ></CategoryCard>
              <CategoryCard
                name="Automotive &amp; Tools"
                categoryImg="/images/Automotive.png"
                rootClassName="category-card-root-class-name1"
                onClick={() => console.log("buton apasat")}
              ></CategoryCard>
              <CategoryCard
                name="Beauty &amp; Personal Care"
                categoryImg="/images/Beauty.png"
                onClick={() => console.log("buton apasat")}
              ></CategoryCard>
              <CategoryCard
                name="Electronics"
                categoryImg="/images/Electronics.png"
                onClick={() => console.log("buton apasat")}
              ></CategoryCard>
              <CategoryCard
                name="Fashion"
                categoryImg="/images/Fashion.png"
                onClick={() => console.log("buton apasat")}
              ></CategoryCard>
              <CategoryCard
                name="Food &amp; Beverages"
                categoryImg="/images/Food.png"
                onClick={() => console.log("buton apasat")}
              ></CategoryCard>
              <CategoryCard
                name="Furniture &amp; Decor"
                categoryImg="/images/Furniture.png"
                onClick={() => console.log("buton apasat")}
              ></CategoryCard>
              <CategoryCard
                name="Games &amp; Books"
                categoryImg="/images/Games.png"
                onClick={() => console.log("buton apasat")}
              ></CategoryCard>
              <CategoryCard
                name="Hobbies"
                categoryImg="/images/Hobbies.png"
                onClick={() => console.log("buton apasat")}
              ></CategoryCard>
              <CategoryCard
                name="Home &amp; Kitchen"
                categoryImg="/images/kitchen.png"
                onClick={() => console.log("buton apasat")}
              ></CategoryCard>
              <CategoryCard
                name="Sports &amp; Travel"
                categoryImg="/images/Sports_Travel.png"
                onClick={() => console.log("buton apasat")}
              ></CategoryCard>
            </div>
          </div>
          <div id="about" className="home-banner"></div>
          <div className="home-banner1">
            <div className="home-container3">
              <h3 id="H3Heading" className="home-text07 Heading-3">
                MOBILLIO
              </h3>
              <span className="home-text08">
                <span></span>
                <span>furniture</span>
              </span>
            </div>
          </div>
          <div className="home-container4 max-width-container">
            <div className="home-container5">
              <span className="home-text11">
                <span>
                  Mobilio Stores Inc. are unique reseller of modern furnitors,
                  designer-made,
                </span>
                <br></br>
                <span>home-decoration items, since 1997.</span>
                <br></br>
                <span>
                  Our legacy guarantees exceptional product quality, unique
                  designs and special prices for all of our product line-up.
                  Lorem ipsum, consectetur adipiscing elit duis tristique
                  sollicitudin nibh sit amet commodo nulla facilisi nullam
                  vehicula ipsum a arcu cursus vitae congue. Consectetur
                  adipiscing elit duis tristique sollicitudin nibh sit amet
                  commodo nulla facilisi nullam vehicula ipsum a arcu cursus
                  vitae congue
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <img
                alt="M3271427"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTk5JyBoZWlnaHQ9JzIwMCcgdmlld0JveD0nMCAwIDE5OSAyMDAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00zNy4zMDI2IDcxLjI5MjVMOTkuMzgyNyAxODIuMzEzTDE2MS40NjMgNzEuMjkyNUwxNzUuNjIyIDIwMEgxOTguNzY1TDE3NS42MjIgMEw5OS4zODI3IDEzNy45NTlMMjMuMTQzOSAwTDAgMjAwSDIzLjE0MzlMMzcuMzAyNiA3MS4yOTI1WicgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMC4wNicvPgo8L3N2Zz4K"
                className="home-svg"
              />
              <button className="button">Read more</button>
            </div>
          </div>
        </div>
        <div id="blog" className="home-banner2"></div>
        <div className="home-blog section-container">
          <div id="Blog" className="home-max-width2 max-width-container">
            <SectionHeading
              heading="Our Technologies"
              subtitle="Discover our latest and gratest technologies"
              rootClassName="section-heading-root-class-name"
            ></SectionHeading>
            <div className="home-container6">
              <BlogPostCard
                imageSrc="https://images.unsplash.com/photo-1630585308572-f53438fc684f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxzb2ZhfGVufDB8fHx8MTY2Njc4MDYxMQ&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="blog-post-card-root-class-name"
              ></BlogPostCard>
              <BlogPostCard
                title="Unique natural color combinations"
                newProp="Unique natural color combinations"
                imageSrc="https://images.unsplash.com/photo-1550254478-ead40cc54513?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxzb2ZhfGVufDB8fHx8MTY2Njc4MDYxMQ&amp;ixlib=rb-4.0.3&amp;w=1500"
              ></BlogPostCard>
              <BlogPostCard
                title="Special combinations for nature lovers"
                newProp="Special combinations for nature lovers"
                imageSrc="https://images.unsplash.com/photo-1615800002234-05c4d488696c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMwfHxzb2ZhfGVufDB8fHx8MTY2Njc4MDYzOQ&amp;ixlib=rb-4.0.3&amp;w=1500"
              ></BlogPostCard>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home

import React, { Component } from "react";
import Slider from "react-slick";

// const Card = ({ title, imgSrc, imgAlt}) => (
//     <div className="bg-background space-x-1.5 shadow-lg rounded-lg lg:p-8 pb-8 m-4">
//       <img className="object-top h-76 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" src={imgSrc} alt={imgAlt} />
//       <div className="p-2">
//         <div className="text-center text-xl text-mtitle font-title">{title}</div>
//       </div>
//     </div>
//   );

export default class Recommendations extends Component {


    constructor(props) {
        super(props)
          this.state = {
            data:  [
              { image: "https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/06/u3jyD55Tdbj4hCgDhvRyOK9nFsH-200x300.jpg", title: "10 Things I-hate about you" },
              { image: "https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/05/z4A6mFOLTMZAhCSPRyrtzG0SPbd-200x300.jpg", title: "A Rainy Day in NewYork" },
              { image: "https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/07/4SafxuMKQiw4reBiWKVZJpJn80I-200x300.jpg", title: "All the Bright Places" },
              { image: "https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/03/4jU64i4kAEtQUlsYsQPAdfpI7aP-200x300.jpg", title: "Love & Other Drugs" },
              { image: "https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/03/wc9MgFWuBl3VS72w6VtiZXTgN79-202x300.jpg", title: "All I see is You" },
              { image: "https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/03/zSuh8dGwqpsWR7ccvYbfxbSZ37o-200x300.jpg", title: "About Time" },
              { image: "https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/06/8Ov2IhfW3vKCpcLoQ5NpnNqqG7p-200x300.jpg", title: "Blue Jay" },
              { image: "https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/06/7CWdmxafzSVEUv4mMlOpw89NKXE-200x300.jpg", title: "Barefoot" },
              { image: "https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/03/cPVdrpMuFffG44WclMDEGmIp37h-200x300.jpg", title: "Crazy, Stupid Love" },
              { image: "https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/03/nKhhDFCdzxeJ3GUunQ570LDpUkz-200x300.jpg", title: "Friends with Benefits" },
              { image: "https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/04/q0dsNZOuSKzAdZod9ohPXJ4GQUs-200x300.jpg", title: "La La Land" },
              { image: "https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/05/4wBG5kbfagTQclETblPRRGihk0I-200x300.jpg", title: "Midnight in Paris" },
              { image: "https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/06/sZEXhhnEKh9hjzoiIi9XgHGqtYm-200x300.jpg", title: "Pride & Prejuice" },
              { image: "https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/03/rlWRvkApEUM33yOPmzULJwUnAZI-200x300.jpg", title: "Remember Me" },
              { image: "https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/03/21AacCArwM5hQ8fYPRA0WKZviiN-200x300.jpg", title: "The Good Girl" },
              { image: "https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/04/kJuL37NTE51zVP3eG5aGMyKAIlh-200x300.jpg", title: "The Theory of Everything" },
              { image: "https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/03/qHNjcjKa6VHJsa0Eu0DHl2BaYw3-200x300.jpg", title: "The Vow" },
              { image: "https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/03/kHXEpyfl6zqn8a6YuozZUujufXf-200x300.jpg", title: "Titanic" },   
            ],
            visible: 4,
            
                  };
            this.loadMore = this.loadMore.bind(this);
          }
          loadMore() {
            this.setState((prev) => {
              return {visible: prev.visible + 4};
            });
          }


    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
          };


            return (
                <div className="m-10 lg:ml-20 lg:mr-20">
                    <div className="bg-backgrounddark shadow-lg rounded-lg p-6 mb-4">
                        <h2 className="text-2xl mb-8 text-mtitle font-title border-b pb-4">Top Recommendations</h2>
                        <div className="slider-wrapper margin: 0 10px;">
                            <Slider {...settings}>
                                <div className="bg-background space-x-1.5 shadow-lg rounded-lg lg:p-8 pb-8 m-4">
                                    <div className=" w-10px h-60px shadow-md mb-6">
                                    <img 
                                        width="460" 
                                        height="215" 
                                        src="https://www.culturewhisper.com/images/uploads/cw-24849.jpg" 
                                        title="Midnight Sun" 
                                        frameborder="0" 
                                        className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"></img>
                                    </div>
                                    <div>
                                        <h1 className="text-center mb-2 text-xl text-mtitle font-title">Midnight Sun</h1>
                                        <p class="text-center text-text ml-2 font-text"> Romantic | Life </p>
                                    </div>
                                </div>
                                <div className="bg-background shadow-lg rounded-lg lg:p-8 pb-8 m-4">
                                    <div className=" w-10px h-60px shadow-md mb-6">
                                    <img 
                                        width="460" 
                                        height="215" 
                                        src="https://film-grab.com/wp-content/uploads/photo-gallery/26%20(133).jpg?bwg=1547149532" 
                                        title="Before Sunset" 
                                        frameborder="0" 
                                        className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"></img>
                                    </div>
                                    <div>
                                        <h1 className="text-center mb-2 text-xl text-mtitle font-title">Before Sunset</h1>
                                        <p class="text-center text-text ml-2 font-text"> Romantic | Life   </p>
                                    </div>
                                </div>
                                <div className="bg-background shadow-lg rounded-lg lg:p-8 pb-8 m-4">
                                    <div className=" w-10px h-60px shadow-md mb-6">
                                    <img 
                                        width="460" 
                                        height="215" 
                                        src="https://filmdaze.net/wp-content/uploads/2019/01/500-days-summer-1200-1200-675-675-crop-000000.jpg" 
                                        title="500 days of Summer" 
                                        frameborder="0" 
                                        className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"></img>
                                    </div>
                                    <div>
                                        <h1 className="text-center mb-2 text-2xl text-mtitle font-title">500 days of summer</h1>
                                        <p class="text-center text-text ml-2 font-text"> Romantic | Real-Life  </p>
                                    </div>
                                </div>
                                <div className="bg-background shadow-lg rounded-lg lg:p-8 pb-8 m-4">
                                    <div className=" w-10px h-60px shadow-md mb-6">
                                    <img 
                                        width="460" 
                                        height="215" 
                                        src="https://image.tmdb.org/t/p/original/A8EzeMnCrQfnNZVpULItCbYlK7C.jpg" 
                                        title="Little Women" 
                                        frameborder="0" 
                                        className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"></img>
                                    </div>
                                    <div>
                                        <h1 className="text-center mb-2 text-2xl text-mtitle font-title">Little Women</h1>
                                        <p class="text-center text-text ml-2 font-text">  Family | Life  </p>
                                    </div>
                                </div>
                                <div className="bg-background shadow-lg rounded-lg lg:p-8 pb-8 m-4">
                                    <div className=" w-10px h-60px shadow-md mb-6">
                                    <img 
                                        width="460" 
                                        height="215" 
                                        src="http://fanart.tv/fanart/movies/2028/moviebackground/say-anything-51005678f0677.jpg" 
                                        title="Say Anything" 
                                        frameborder="0" 
                                        className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"></img>
                                    </div>
                                    <div>
                                        <h1 className="text-center mb-2 text-2xl text-mtitle font-title">Say Anything</h1>
                                        <p class=" text-center text-text ml-2 font-text">   Romantic  </p>
                                    </div>
                                </div>
                                <div className="bg-background shadow-lg rounded-lg lg:p-8 pb-8 m-4">
                                    <div className=" w-10px h-60px shadow-md mb-6">
                                    <img 
                                        width="460" 
                                        height="215" 
                                        src="https://3.bp.blogspot.com/-PT3RV-lKYkk/UrvgFOLArZI/AAAAAAAABg0/nVCALn75fGc/s1600/screenshot1.jpg" 
                                        title="Eternal Sunshine of the Spotless Mind" 
                                        frameborder="0" 
                                        className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"></img>
                                    </div>
                                    <div>
                                        <h1 className="text-center mb-2 text-2xl text-mtitle font-title">ESOTSM</h1>
                                        <p class=" text-center text-text ml-2 font-text"> Romantic | si-fi   </p>
                                    </div>
                                </div>
                            </Slider>
                            </div>
                    </div>
                    <div className="bg-backgrounddark shadow-lg rounded-lg p-6 mb-10 mt-10">
                        <h2 className="text-2xl mb-8 text-mtitle font-title border-b pb-4">The Best Romance Movies</h2>
                        <div class="container mx-auto">
                            <div className="row mb-5 mt-5">
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">  
                                        
                                        {this.state.data.slice(0, this.state.visible).map((result) => {
                                        return (
                                            <div class="text-center col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 bg-background shadow-lg rounded-lg lg:p-8 pb-8 m-4">
                                                
                                                <div class="imgDiv">
                                                    <img className="object-top h-76 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" src={result.image} alt={result.title} />
                                                </div>
                                                <a  className="text-center text-xl text-mtitle font-title" href="#">{result.title}</a>   
                                            </div>
                                              )
                                            })}
                                        {this.state.visible < this.state.data.length &&
                                            <div className="ml-6">
                                                <button onClick={this.loadMore} type="button" 
                                                className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-title text-lg font-medium rounded-full text-text px-8 py-3 cursor-pointer">Load more</button>
                                            </div>
                                            }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              );
    }
}

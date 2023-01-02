import { Carousel } from "react-responsive-carousel"; //importamos desde react un componente para el banner que se mueve
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function Banner(){
    return(
        <div className="relative">
        {/*Ponemos en la parte inferior con un difuminado*/} 
        <div className="absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20"/>
        {/*Personalizamos el banner con un bucle para que se muestren las fotos y con un intervalo de tiempo*/}
            <Carousel autoplay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
                <div>
                    <img loading="lazy" src="https://links.papareact.com/gi1" alt=""/>
                </div>
                <div>
                    <img loading="lazy" src="https://links.papareact.com/6ff" alt=""/>
                </div>
                <div>
                    <img loading="lazy" src="https://links.papareact.com/7ma" alt=""/>
                </div>
            </Carousel>

        </div>
    )
}
export default Banner;
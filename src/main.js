const feather = require('feather-icons');
import Carousel from 'react-bootstrap/Carousel';

feather.replace();
setTimeout(() => {
    feather.replace();
}, 100);
const Main = () => {
    return <main>
        <Carousel>
            <Carousel.Item>
                <img src="img1.jpg"></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src="img2.jpg"></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src="img3.jpg" ></img>
            </Carousel.Item>
        </Carousel>
    </main>;
}

export default Main;
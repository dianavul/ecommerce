import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import ProductPage from "../pages/ProductPage";
import "./Carou.style.css";
import Category from "./Category";
import TrendingProducts from "./TrendingProducts";

function Carou() {
	const carouStyle = {
		width: "75vw",
	};

	return (
		<>
			<div className='carous ms-5  ps-5'>
				<MDBCarousel
					className='car'
					showIndicators
					showControls
					fade
					style={carouStyle}>
					<MDBCarouselItem
						className='w-100 '
						itemId={1}
						src={`https://picsum.photos/1125/497?random=` + 1}
						alt='...'>
						<h1>Easter SALE</h1>
						<p>Get your 40% OFF </p>
						<Button style={{ backgroundColor: "#00000000" }}>
							<Link
								to='/products'
								style={{ textDecoration: "none", color: "white" }}>
								Discover NOW
							</Link>
						</Button>
					</MDBCarouselItem>

					<MDBCarouselItem
						className='w-100 '
						itemId={2}
						src={`https://picsum.photos/1125/497?random=` + 2}
						alt='...'>
						<h1>Special Offer</h1>
						<p>This weekend only April 01 - 02 </p>
						<Button style={{ backgroundColor: "#00000000" }}>
							<Link
								to='/products'
								style={{ textDecoration: "none", color: "white" }}>
								Discover NOW
							</Link>
						</Button>
					</MDBCarouselItem>

					<MDBCarouselItem
						className='w-100'
						itemId={3}
						src={`https://picsum.photos/1125/497?random=` + 3}
						alt='...'>
						<h1>Free GIFTS for you</h1>
						<p>A free gift for you with any purchase 🎁</p>
						<Button style={{ backgroundColor: "#00000000" }}>
							<Link
								to='/products'
								style={{ textDecoration: "none", color: "white" }}>
								Discover NOW
							</Link>
						</Button>
					</MDBCarouselItem>
				</MDBCarousel>
			</div>
		</>
	);
}
export default Carou;

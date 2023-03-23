import { Card, CardBody, CardTitle, CardText, Button, Media } from "reactstrap";
import { Link } from "react-router-dom";
import "./Categ.style.css";

function CategComponent({ category }) {
	const cardStyle = {
		color: "black",
		fontWeight: "bold",
		textDecoration: "none",
		border: "none",
		height: "20vh",
		borderRadius: "0",
		display: "flex ",
		flexDirection: "column",
		justifyContent: "space-around",
	};

	const cartStyle = {
		color: "#a8a8aa",
		textDecoration: "none",
		padding: "0 ",
		backgroundColor: "#f8f9fa",
		border: "none",
	};
	const imgStyle = {
		height: "15vh",
	};
	return (
		<>
			<div className='cont'>
				<Card color='light' style={cardStyle} className='cards m-2 '>
					<CardBody style={cardStyle}>
						<div className='d-flex flex-row '>
							<div className='d-flex flex-column align-items-start justify-content-evenly'>
								<CardTitle className='p-2'>
									<h3>{category}</h3>
								</CardTitle>
								<Link to='/products'>
									<Button style={cartStyle}>Discover NOW</Button>
								</Link>
							</div>
							<div className='d-flex flex-column'>
								<img
									className='pic'
									alt='Card cap'
									src={`https://picsum.photos/300/200?random=` + category}
									style={imgStyle}
								/>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	);
}
export default CategComponent;

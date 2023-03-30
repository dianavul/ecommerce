import { Nav } from "reactstrap";

import {
	FaFacebookSquare,
	FaTwitterSquare,
	FaLinkedin,
	FaGithubSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Foot() {
	const iconStyle = { height: "30px", width: "50px", textDecoration: "none" };
	const cardStyle = {
		width: "100vw",
		backgroundColor: "#2d3032",
		border: "none",
		color: "white",
		fontWeight: "bold",
		borderRadius: "0",
		position: "relative",
		bottom: "0",
		margin: "0",
	};

	return (
		<>
			<div
				className='  d-flex flex-wrap pt-3 justify-content-around '
				style={cardStyle}>
				<div className='d-flex align-items-start flex-wrap flex-column '>
					<div className='d-flex align-items-start flex-row'>
						<Link
							to='/'
							className='m-2 row'
							style={{ textDecoration: "none", color: "white" }}>
							Home
						</Link>
						<span> _ </span>
						<Link
							to='/products'
							className='m-2 row'
							style={{ textDecoration: "none", color: "white" }}>
							Products
						</Link>
					</div>
					<Nav
						className='d-flex flex-wrap col p-2 pb-5'
						style={{ color: "grey" }}>
						Diana © 2023
					</Nav>
				</div>
				<div className='d-flex ms-auto p-2 mb-3 flex-wrap flex-row align-self-center '>
					<Link
						to='https://www.facebook.com/'
						className='m-2 row'
						style={{ textDecoration: "none", color: "white" }}>
						<FaFacebookSquare
							style={iconStyle}
							href='facebook.com'></FaFacebookSquare>
					</Link>
					<Link
						to='https://twitter.com/home'
						className='m-2 row'
						style={{ textDecoration: "none", color: "white" }}>
						<FaTwitterSquare style={iconStyle}></FaTwitterSquare>
					</Link>
					<Link
						to='https://ro.linkedin.com/'
						className='m-2 row'
						style={{ textDecoration: "none", color: "white" }}>
						<FaLinkedin style={iconStyle}></FaLinkedin>
					</Link>
					<Link
						to='https://github.com/'
						className='m-2 row'
						style={{ textDecoration: "none", color: "white" }}>
						<FaGithubSquare style={iconStyle}></FaGithubSquare>
					</Link>
				</div>
			</div>
		</>
	);
}
export default Foot;

import { Card, CardFooter, NavItem, NavLink, Nav } from "reactstrap";

import {
	FaFacebookSquare,
	FaTwitterSquare,
	FaLinkedin,
	FaGithubSquare,
} from "react-icons/fa";

function Foot() {
	const iconStyle = { height: "30px", width: "50px" };
	const cardStyle = {
		backgroundColor: "#2d3032",
		border: "none",
		color: "white",
		fontWeight: "bold",
		borderRadius: "0",
	};
	return (
		<>
			<div className='d-flex ml-auto flex-wrap ps-5 col mt-5' style={cardStyle}>
				<div className='d-flex align-items-start flex-column'>
					<NavLink href='#' className='m-2 row'>
						Home - Products
					</NavLink>
					<Nav className='m-2' style={{ color: "grey" }}>
						Diana © 2020
					</Nav>
				</div>
				<div className='ms-auto row align-self-center justify-content-around '>
					<FaFacebookSquare
						className='m-2 row'
						style={iconStyle}
						href='facebook.com'></FaFacebookSquare>
					<FaTwitterSquare
						className='m-2 row'
						style={iconStyle}></FaTwitterSquare>
					<FaLinkedin className='m-2 row' style={iconStyle}></FaLinkedin>
					<FaGithubSquare
						className='m-2 row'
						style={iconStyle}></FaGithubSquare>
				</div>
			</div>
		</>
	);
}
export default Foot;

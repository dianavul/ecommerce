import React, { useState } from "react";
import {
	Nav,
	NavItem,
	Dropdown,
	DropdownItem,
	DropdownToggle,
	DropdownMenu,
	NavLink,
	NavbarBrand,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "/CURS/magazin/imgs/logo.png";
import "./Navi.style.css";

function Navi() {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen(!dropdownOpen);
	const divStyles = {
		boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
		fontWeight: "bold",
	};

	const navigate = useNavigate();
	const wishlist = () => {
		navigate("/wish");
	};

	return (
		<Nav
			tabs
			className='navi d-flex justify-content-around align-items-center  '
			color='secondary'
			fixed='top'
			style={divStyles}>
			<Nav color='#2d3032'>
				<NavLink href='/' active className='one' style={{ padding: "4px 8px" }}>
					<img
						src='https://www.freeiconspng.com/thumbs/house-png/home-icon-png-home-house-icon-24.png'
						style={{ maxHeight: "15px", padding: "1px" }}
					/>
					Home
				</NavLink>

				<Dropdown
					nav
					isOpen={dropdownOpen}
					toggle={toggle}
					style={{ color: "#2d3032" }}>
					<DropdownToggle
						nav
						caret
						style={{ color: "#495057  ", padding: "4px 8px" }}
						className='two'>
						Products
					</DropdownToggle>
					<DropdownMenu color='#2d3032'>
						<Link to='/products' style={{ textDecoration: "none" }}>
							<DropdownItem>All</DropdownItem>
						</Link>
						<DropdownItem>Electronis</DropdownItem>
						<DropdownItem>Jewelery</DropdownItem>
						<DropdownItem>Men's clothing</DropdownItem>
						<DropdownItem>Womenen's clothing</DropdownItem>
						<DropdownItem divider />
						<DropdownItem>Sales</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</Nav>
			<NavbarBrand href='#'>
				<img
					className='logo  '
					alt='logos'
					src={logo}
					style={{
						height: "40px",
						width: "90px",
					}}
				/>
				<span
					className='trademark '
					style={{ margin: "-10px", color: "#495057" }}>
					&#x2122;
				</span>
			</NavbarBrand>
			<NavItem className='three'>
				<NavLink
					href='#'
					onClick={wishlist}
					style={{ color: "#2d3032", padding: "1px" }}>
					<img
						src='data:image/png;base64,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'
						style={{
							maxHeight: "20px",
							padding: "0 5px",
							backgroundColor: "white",
						}}
					/>
					Wish List
				</NavLink>
			</NavItem>
		</Nav>
	);
}

export default Navi;

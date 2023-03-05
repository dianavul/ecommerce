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
import { useNavigate } from "react-router-dom";
import logo from "/CURS/final/img/logo.png";

function Navi(props) {
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
			className='d-flex justify-content-around align-items-center text-black  '
			color='secondary'
			fixed='top'
			style={divStyles}>
			<Nav color='#2d3032'>
				<NavLink href='#' active>
					Home
				</NavLink>

				<Dropdown
					nav
					isOpen={dropdownOpen}
					toggle={toggle}
					style={{ color: "#2d3032" }}>
					<DropdownToggle nav caret style={{ color: "#495057  " }}>
						Products
					</DropdownToggle>
					<DropdownMenu color='#2d3032'>
						<DropdownItem>Furniture</DropdownItem>
						<DropdownItem>Fashion</DropdownItem>
						<DropdownItem>Electronis</DropdownItem>
						<DropdownItem divider />
						<DropdownItem>Sales</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</Nav>
			<NavbarBrand href='/'>
				<img
					className='mx-1'
					alt='logos'
					src={logo}
					style={{
						height: 40,
						width: 100,
					}}
				/>
			</NavbarBrand>
			<NavItem>
				<NavLink href='#' onClick={wishlist}>
					Wish List
				</NavLink>
			</NavItem>
		</Nav>
	);
}

export default Navi;

import { useState, useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { Button } from "reactstrap";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import ProductComponent from "../components/ProductComponent";
import { Link } from "react-router-dom";
import "./WishList.style.css";

function WishlistPage() {
	const [wishListProducts, setWishListProducts] = useState([]);
	const productPrice = wishListProducts.reduce((a, i) => a + i.price, 0);
	useEffect(() => {
		const prodsString = localStorage.getItem("prods");
		if (prodsString !== null) {
			const prods = JSON.parse(prodsString);
			console.log("prods", prods);
			setWishListProducts(prods);
		}
	}, []);
	const onDelete = (prodId) => {
		const filteredProducts = wishListProducts.filter(
			(prod) => prod.id !== prodId
		);
		localStorage.setItem("prods", JSON.stringify(filteredProducts));
		setWishListProducts(filteredProducts);
	};
	return (
		<>
			<div style={{ margin: "5%", textAlign: "center" }}>
				<img
					src='https://keoleny.files.wordpress.com/2011/04/wishlist1.png'
					style={{ height: "35%", width: "50%" }}
				/>
				<Button style={{ backgroundColor: "#00000000", border: "none" }}>
					<Link to='/' className='btn home'>
						Home
					</Link>
				</Button>
				<span>/</span>
				<Button style={{ backgroundColor: "#00000000", border: "none" }}>
					<Link to='/wish' className='btn wish'>
						Wish List
					</Link>
				</Button>
			</div>
			<div>
				{wishListProducts.length === 0 && (
					<div
						className='empty_cart'
						style={{ textAlign: "center", margin: "5%" }}>
						<MdOutlineRemoveShoppingCart
							style={{
								height: "25%",
								width: "25%",
							}}></MdOutlineRemoveShoppingCart>
						<h1> Go. Go fill it up with all your fashion hopes and dreams!</h1>
					</div>
				)}
			</div>

			<MDBTable>
				<MDBTableBody>
					{wishListProducts.map((prod, index) => {
						return (
							<tr key={index}>
								<th scope='row'>{index + 1}</th>
								<td>
									<img
										alt='Card cap'
										src={`${prod.image}`}
										style={{
											width: "70px",
											height: "70px",
											padding: "0",
											margin: "0",
										}}
										className='p-1'
									/>
								</td>
								<td className='titlu_prod'>{prod.title}</td>
								<td>{prod.price}$</td>
								<td className='p-0'>
									<Button
										color='danger'
										className='mt-2 ms-4'
										onClick={() => {
											onDelete(prod.id);
										}}>
										DELETE
									</Button>
								</td>
							</tr>
						);
					})}
				</MDBTableBody>
			</MDBTable>
			{wishListProducts.length !== 0 && (
				<div className='d-flex p-0'>
					<hr></hr>
					<h3 className='col-8 total'>Total:</h3>
					<h3>${productPrice}</h3>
				</div>
			)}
		</>
	);
}
export default WishlistPage;

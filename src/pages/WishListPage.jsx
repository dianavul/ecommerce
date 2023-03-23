import { useState, useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { Button } from "reactstrap";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import ProductComponent from "../components/ProductComponent";
import { Link } from "react-router-dom";
import "./WishList.style.css";

function WishlistPage() {
	const [wishListProducts, setWishListProducts] = useState([]);

	useEffect(() => {
		const prodsString = localStorage.getItem("products");
		if (prodsString !== null) {
			const prods = JSON.parse(prodsString);
			setWishListProducts(prods);
		}
	}, []);
	const onDelete = (prodId) => {
		const filteredProducts = wishListProducts.filter(
			(prod) => prod.id !== prodId
		);
		localStorage.setItem("products", JSON.stringify(filteredProducts));
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

			<h2>Wishlist</h2>

			{wishListProducts.map((prod, index) => {
				<div
					className='empty_cart'
					style={{ textAlign: "center", margin: "5%" }}>
					<MdOutlineRemoveShoppingCart
						style={{
							height: "25%",
							width: "25%",
						}}></MdOutlineRemoveShoppingCart>
					<h1> OOPS! Your Wish List is empty!</h1>
				</div>;
				return (
					<MDBTable>
						<MDBTableBody>
							<tr key={index}>
								<th scope='row'>{index}</th>
								<td></td>
								<td></td>
								<td>
									<Button
										color='danger'
										className='mt-2 ms-4'
										onClick={() => {
											onDelete(prod);
										}}>
										DELETE
									</Button>
								</td>
							</tr>
						</MDBTableBody>
					</MDBTable>
				);
			})}
		</>
	);
}
export default WishlistPage;

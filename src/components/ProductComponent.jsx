import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./ProductComponent.style.css";

function ProductComponent({ product }) {
	const cardStyle = {
		color: "#2d3032",
		textDecoration: "none",
		borderRadius: "none",
	};

	const cartStyle = {
		backgroundColor: "#f8f9fa",
		textDecoration: "none",
		borderRadius: "0",
		color: "black",
		width: "90%",
	};

	const addToWishList = () => {
		const prodsString = localStorage.getItem("prods");

		if (prodsString !== null) {
			const prods = JSON.parse(prodsString);
			const number = prods.find((prodElement) => {
				return prodElement.id === product.id;
			});

			if (number === undefined) {
				prods.push(product);
			}
			localStorage.setItem("prods", JSON.stringify(prods));
		} else {
			const newProducts = [];
			newProducts.push(product);
			localStorage.setItem("prods", JSON.stringify(newProducts));
		}
	};

	return (
		<div className='divs d-flex flex-wrap'>
			<Card
				className='prod_card  ms-1 mt-2 mb-2'
				color='light'
				style={{
					border: "none",
					borderRadius: "0",
					width: "100%",
					maxheight: "660px",
				}}>
				<div style={{ height: "100%", width: "100%" }}>
					<img
						alt='Card cap'
						src={`${product.image}`}
						style={{
							width: "100%",
							height: "380px",
							padding: "0",
							margin: "0",
						}}
						className='p-1'
					/>

					<CardBody>
						<Link to={`/product/${product.id}`} style={cardStyle}>
							<CardTitle tag='h5'>{product.title}</CardTitle>
						</Link>
					</CardBody>

					<CardBody style={cardStyle}>
						<CardText>{product.price}$</CardText>
						<CardText>{product.category}</CardText>

						<Button
							style={cartStyle}
							onClick={() => {
								addToWishList();
							}}>
							Add to wishlist
						</Button>
					</CardBody>
				</div>
			</Card>
		</div>
	);
}
export default ProductComponent;

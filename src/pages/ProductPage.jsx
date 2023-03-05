import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductComponent from "../components/ProductComponent";
import { Col, Row, Container } from "reactstrap";

function ProductPage() {
	let { id } = useParams();
	const [prod, setProd] = useState(null);

	useEffect(() => {
		if (prod === null || id !== undefined) {
			fetch(`https://fakestoreapi.com/products/`)
				.then((response) => response.json())
				.then((prodData) => {
					console.log(prodData);
					setProd(prodData);
				});
		}
	}, [id]);

	return (
		<Container className='d-flex justify-content-center '>
			<Row className='row-cols-4 mt-4 '>
				<>
					{prod !== null ? (
						<>
							{prod.map((prod, i) => (
								<ProductComponent
									title={prod.title}
									key={i}
									price={prod.price}
									image={prod.image}
								/>
							))}
							;
						</>
					) : (
						<>Loading...</>
					)}
				</>
			</Row>
		</Container>
	);
}
export default ProductPage;

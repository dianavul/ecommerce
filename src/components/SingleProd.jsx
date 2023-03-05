import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductComponent from "./ProductComponent";
function SingleProd() {
	let { id } = useParams();
	const [prod, setProd] = useState(null);
	useEffect(() => {
		if (prod === null || id !== undefined) {
			fetch(`https://fakestoreapi.com/products/${id}`)
				.then((response) => response.json())
				.then((prodData) => {
					console.log(prodData);
					setProd(prodData);
				});
		}
	}, [id]);

	return (
		<>
			{prod !== null ? (
				<>
					<ProductComponent
						title={prod.title}
						price={prod.price}
						image={prod.image}
						description={prod.description}
						ration={prod.rating}
						key={prod.id}
						category={prod.category}
					/>
				</>
			) : (
				<>Loading...</>
			)}
		</>
	);
}
export default SingleProd;

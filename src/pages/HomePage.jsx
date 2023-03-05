import Navi from "../components/Navi";
import ProductComponent from "../components/ProductComponent";
import ProductPage from "./ProductPage";
import { useState } from "react";
import { Col } from "reactstrap";
function HomePage() {
	const [prod, setProd] = useState([null]);
	return (
		<>
			{prod.map((p, i) => {
				return (
					<Col key={"prod" + i} className='mt-3'>
						<ProductPage prod={p} />
					</Col>
				);
			})}
		</>
	);
}
export default HomePage;

import Link from "next/link";
import { RecoilRoot, useRecoilValue } from "recoil";
import { noOfItemInCart } from "./States";

const Menu = () => {
	const no_of_item_in_cart = useRecoilValue(noOfItemInCart)

	return (
		<RecoilRoot>
			<div className="flex flex-row max-w-xl mx-auto my-6 justify-center gap-4 p-4 border-b border-gray 300">
				<Link href="/" passHref>
					<div className="text-lg text-gray-600 hover:text-gray-400 cursor-pointer">Home</div>
				</Link>
				<Link href="/products" passHref>
					<div className="text-lg text-gray-600 hover:text-gray-400 cursor-pointer">Products</div>
				</Link>
				<Link href="/cart" passHref>
					<div className="text-lg text-gray-600 hover:text-gray-400 cursor-pointer">Cart ({no_of_item_in_cart})</div>
				</Link>
			</div>
		</RecoilRoot>
	);
};

export default Menu;
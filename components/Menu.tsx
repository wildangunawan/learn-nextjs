import Link from "next/link";

const Menu = () => {
	return (
		<div className="flex flex-row max-w-xl mx-auto my-6 justify-center gap-4 p-4 border-b border-gray 300">
			<Link href="/" passHref>
				<div className="text-lg text-gray-600 hover:text-gray-400 cursor-pointer">Home</div>
			</Link>
			<Link href="/products" passHref>
				<div className="text-lg text-gray-600 hover:text-gray-400 cursor-pointer">Products</div>
			</Link>
			<Link href="/contact" passHref>
				<div className="text-lg text-gray-600 hover:text-gray-400 cursor-pointer">Contact</div>
			</Link>
		</div>
	);
};

export default Menu;
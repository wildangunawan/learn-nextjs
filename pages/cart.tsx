import { useRecoilState, useRecoilValue } from 'recoil'
import { cartState, noOfItemInCart } from '../components/States'
import Image from 'next/image'
import Menu from '../components/Menu'
import { Key } from 'react';

interface IProduct {
	id: Number,
	title: string,
	price: Number,
	description: string,
	category: string,
	image: string
}

const Show = () => {
	const [cartItem, setCartItem] = useRecoilState(cartState)

	return (
		<>
			{cartItem.map((item: IProduct, idx: Key) => {
				return (
					<>
						<div key={idx} className="flex flex-row justify-between items-center gap-4 p-4 border-b border-gray-500">
							<div className="justify-self-center">
								<Image src={item.image} width={150} height={150} alt={item.title} />
							</div>
							<h2 className="text-xl">{item.title}</h2>
							<div>
								<p className="text-gray-500">Price</p>
								<p className="font-semibold">${item.price}</p>
							</div>
						</div>

					</>
				)
			})}
			<button className="border border-gray-300 rounded-xl font-medium text-gray-600 p-4 hover:bg-gray-200" onClick={(_) => setCartItem([])}>Checkout</button>
		</>
	)
}

const Cart = () => {
	const no_of_item_in_cart = useRecoilValue(noOfItemInCart)

	return (
		<>
			<div>
				<Menu />
				<div className="container mx-auto my-4 max-w-5xl border border-gray-400 rounded-lg p-4 flex flex-col gap-8">
					{no_of_item_in_cart > 0 ? <Show /> : <p className="text-center">No item in cart</p>}
				</div>
			</div>
		</>
	);
};

export default Cart;
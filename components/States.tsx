import { atom, selector } from 'recoil';

interface Product {
	id: Number,
	title: string,
	price: Number,
	description: string,
	category: string,
	image: string
}

interface Products extends Array<Product> { }

const cartState = atom({
	key: 'cart',
	default: [] as Products
})

const noOfItemInCart = selector({
	key: 'no_of_item_in_cart',
	get: ({ get }) => {
		const cart = get(cartState)
		return cart.length
	}
})

export { cartState, noOfItemInCart }
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

import Link from 'next/link'
import Image from 'next/image'

import Menu from '../../components/Menu'
import { cartState } from '../../components/States'

interface Product {
	id: Number,
	title: string,
	price: Number,
	description: string,
	category: string,
	image: string
}

interface Products extends Array<Product> { }


const ProductIndex = () => {
	const [loading, setLoading] = useState(true)
	const [products, setProducts] = useState([] as Products)
	const [cartItem, setCartItem] = useRecoilState(cartState)

	useEffect(() => {
		async function fetchData() {
			const resp = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products`)
			const products: Products = await resp.json()

			setProducts(products)
			setLoading(false)
		}

		fetchData()
	}, [])

	return (
		<>
			<Menu />
			{loading !== true
				? <div className="container mx-auto grid grid-cols-3 gap-4 m-4 max-w-4xl">
					{products.map((product, idx) => {
						return (
							<div key={idx} className="flex flex-col gap-8 p-4 justify-around border border-gray-300 rounded-md">
								<div className="flex justify-center">
									<Image
										src={product.image}
										alt={product.title}
										height={200}
										width={200}
									/>
								</div>
								<div className="flex flex-col gap-2">
									<Link href={`/products/${product.id}`} passHref>
										<h2 className="text-lg font-bold cursor-pointer hover:text-gray-700">{product.title}</h2>
									</Link>
									<div className="flex flex-row gap-2 justify-between">
										<div>
											<p className="text-gray-500">Price</p>
											<p className="font-semibold">${product.price}</p>
										</div>
										<button className="border border-gray-300 rounded-xl font-medium text-gray-600 p-4 hover:bg-gray-200" onClick={(e) => setCartItem([...cartItem, product])}>Add to cart</button>
									</div>
								</div>
							</div>
						)
					})}
				</div>
				: <p>Loading data ...</p>}
		</>
	);
};



export default ProductIndex;
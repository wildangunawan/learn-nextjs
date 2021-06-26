import { useRecoilState } from 'recoil'
import { useEffect, useState } from 'react';

import Image from 'next/image'
import { useRouter } from 'next/router'

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

const ProductDetail = () => {
	const router = useRouter()
	const page_id = router.query.id

	const [loading, setLoading] = useState(true)
	const [product, setProduct] = useState([] as unknown as Product)
	const [cartItem, setCartItem] = useRecoilState(cartState)


	useEffect(() => {
		async function fetchData() {
			const resp = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products/${page_id}`)
			const product: Product = await resp.json()

			setProduct(product)
			setLoading(false)
		}

		fetchData()
	}, [page_id])

	return (
		<>
			<Menu />
			{loading !== true
				? <div>
					<div className="container mx-auto my-4 max-w-5xl border border-gray-400 rounded-lg p-4 flex flex-col md:flex-row gap-8 justify-around items-center">
						<div className="">
							<Image src={product.image} width={300} height={300} alt={product.title} />
						</div>
						<div className="flex flex-col justify-around gap-4">
							<div className="flex flex-col gap-6">
								<h2 className="font-bold text-3xl">{product.title}</h2>
								<p>{product.description}</p>
							</div>
							<div className="flex flex-row justify-between">
								<div>
									<p className="text-gray-500">Price</p>
									<p className="font-semibold">${product.price}</p>
								</div>
								<button className="border border-gray-300 rounded-xl font-medium text-gray-600 p-4 hover:bg-gray-200" onClick={(e) => setCartItem([...cartItem, product])}>Add to cart</button>
							</div>
						</div>
					</div>
				</div>
				: <p>Loading data ...</p>}

		</>
	);
};

export default ProductDetail;
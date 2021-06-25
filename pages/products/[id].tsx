import { InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Menu from '../../components/Menu'

interface Product {
	id: Number,
	title: string,
	price: Number,
	description: string,
	category: string,
	image: string
}

export const getServerSideProps = async (context: any) => {
	const resp = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products/${context.params.id}`)
	const product: Product = await resp.json()

	return {
		props: {
			product
		}
	}
}

const ProductDetail = ({ product }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Document</title>
			</Head>
			<div>
				<Menu />
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
							<button className="border border-gray-300 rounded-xl font-medium text-gray-600 p-4 hover:bg-gray-200">Add to cart</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetail;
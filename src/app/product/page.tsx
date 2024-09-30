import { getData } from "@/services/products";
import Link from "next/link";
type ProductPageProps = { params: { slug: string[] } }


export default async function ProductPage(props: ProductPageProps) {
    const { params } = props;
    const products = await getData("http://localhost:3000/api/product");
    console.log(products);

    return (
        <div className="grid grid-cols-3 pt-2 pb-2 my-3 place-items-center">
            {products.data.length > 0 && (
                products.data.map((product: any) => (
                    <Link
                    href={`/product/detail/${product.id}`}
                        key={product.id}
                        className="w-full max-w-sm mx-2 my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                            <img className="w-full p-8 rounded-t-lg h-96"
                                src={product.image}
                                alt="product image" />
                        <div className="px-5 pb-5">
                            <Link href="#"><h5 className="text-xl font-semibold tracking-tight text-gray-900 truncate dark:text-white">{product.title}</h5></Link>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                <button
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                            </div>
                        </div>
                    </Link>

                ))
            )}
            {params.slug && (
                <>
                    <p>Category: {params.slug[0]}</p>
                    <p>Gender: {params.slug[1]}</p>
                    <p>Code: {params.slug[2]}</p>
                </>
            )}
        </div>
    );
}
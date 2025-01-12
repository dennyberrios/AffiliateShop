import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    id?: number,
    name?: string,
    description?: string,
    price?: string,
    image?: string,
};

const ProductCard: React.FC<ProductCardProps> = ({
    id = 0,
    name = "Produto Padrão",
    description = "Descrição padrão do produto.",
    price = "$0,00",
    image = "/NotFound/404-error-with-tired-person-concept-illustration/6325257.jpg"
}) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src={image} alt={name} width={400} height={224} className="w-full h-56 object-contain" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <p className="text-lg font-bold text-yellow-600">{price}</p>
                <Link href={`/product/${id}`} passHref>
                    <span className="mt-4 block text-center text-white bg-yellow-500 py-2 rounded hover:bg-yellow-600">
                        Comprar Agora
                    </span>
                </Link>

            </div>
        </div>
    );
};

export default ProductCard;
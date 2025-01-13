"use client"

import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { usePathname } from "next/navigation";

import React from "react";

// Defina o tipo para o produto
interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    features: string[];
    specifications: { label: string; value: string }[];
}

// Função simulada para buscar o produto usando o ID
const fetchProductById = async (id: string): Promise<Product> => {
    // Simulação de dados. Você pode usar Axios ou fetch para buscar os dados reais.
    return {
        id,
        name: 'Produto 1',
        description:
            'Descrição detalhada sobre o Produto 1. Este é um produto de alta qualidade, com as melhores características de sua categoria, perfeito para quem busca inovação e confiabilidade.',
        price: 199.99,
        image: '/NotFound/404-error-with-tired-person-concept-illustration/6325257.jpg',
        features: [
            'Alta performance',
            'Design moderno e robusto',
            'Garantia de 2 anos',
            'Compatível com os principais sistemas operacionais',
        ],
        specifications: [
            { label: 'Cor', value: 'Preto' },
            { label: 'Peso', value: '1.2kg' },
            { label: 'Dimensões', value: '30cm x 20cm x 10cm' },
            { label: 'Modelo', value: 'XPRO 2025' },
            { label: 'Garantia', value: '2 anos' },
        ],
    };
};

const ProductDetailPage = () => {

    const id = usePathname();

    // Define o estado do produto com o tipo correto
    const [product, setProduct] = React.useState<Product | null>(null);

    React.useEffect(() => {
        if (id) {
            fetchProductById(id as string).then((data) => setProduct(data));
        }
    }, [id]);

    if (!product) {
        return <div>Carregando...</div>;
    }

    return (
        <>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Imagem do Produto */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={800}
                        height={600}
                        className="w-full h-96 object-cover"
                    />
                </div>

                {/* Informações do Produto */}
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h2>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <p className="text-lg font-bold text-yellow-600 mb-4">R${product.price.toFixed(2)}</p>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800">Características principais:</h3>
                        <ul className="list-disc pl-6 text-gray-600">
                            {product.features.map((feature: string, index: number) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800">Especificações:</h3>
                        <ul className="space-y-2 text-gray-600">
                            {product.specifications.map((spec: { label: string, value: string }, index: number) => (
                                <li key={index}><strong>{spec.label}:</strong> {spec.value}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex space-x-6 mb-8">
                        <button className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 w-full">
                            Comprar Agora
                        </button>
                        <a
                            href="#!"
                            className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 w-full flex justify-center items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="w-5 h-5 mr-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                            Adicionar ao Carrinho
                        </a>
                    </div>

                    <div className="mt-8 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Compartilhar:</h3>
                        <div className="flex justify-center space-x-4">
                            <a href="#!" className="text-blue-600 hover:text-blue-700">
                                Facebook
                            </a>
                            <a href="#!" className="text-yellow-600 hover:text-yellow-700">
                                Twitter
                            </a>
                            <a href="#!" className="text-red-600 hover:text-red-700">
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Produtos Relacionados */}
            <section className="container mx-auto px-6 py-12">
                <div className="flex space-x-6">
                    <div className="w-1/4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Filtrar por Categoria</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-yellow-500">tecnologia</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-yellow-500">moda</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-yellow-500">utensílios domésticos</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-yellow-500">Ebocks</a></li>
                        </ul>
                    </div>
                    <div className="w-3/4">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Todos os Produtos</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Aqui, adicione os produtos restantes */}
                            {/* Produto 7 */}
                            <ProductCard
                                id={7}
                                name={"Produto 1"}
                                description={"Uma breve descrição do produto."}
                                price={"$199,99"}
                            />
                            <ProductCard
                                id={8}
                                name={"Produto 1"}
                                description={"Uma breve descrição do produto."}
                                price={"$199,99"}
                            />
                            <ProductCard
                                id={9}
                                name={"Produto 1"}
                                description={"Uma breve descrição do produto."}
                                price={"$199,99"}
                            />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ProductDetailPage;

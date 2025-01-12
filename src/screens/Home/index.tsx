import ProductCard from "@/components/ProductCard";

const HomePage = () => {
    return (
        <>
            <section className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Produtos em Destaque</h2>
                <p className="text-gray-600">Descubra as melhores ofertas selecionadas para você!</p>
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProductCard
                    id={1}
                    name={"Produto 1"}
                    description={"Uma breve descrição do produto."}
                    price={"$199,99"}
                />
                <ProductCard
                    id={2}
                    name={"Produto 2"}
                    description={"Uma breve descrição do produto."}
                    price={"$199,99"}
                />
                <ProductCard
                    id={3}
                    name={"Produto 3"}
                    description={"Uma breve descrição do produto."}
                    price={"$199,99"}
                />
                <ProductCard
                    id={4}
                    name={"Produto 4"}
                    description={"Uma breve descrição do produto."}
                    price={"$199,99"}
                />
                <ProductCard
                    id={5}
                    name={"Produto 5"}
                    description={"Uma breve descrição do produto."}
                    price={"$199,99"}
                />
                <ProductCard
                    id={6}
                    name={"Produto 6"}
                    description={"Uma breve descrição do produto."}
                    price={"$199,99"}
                />
            </section>

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
}

export default HomePage;
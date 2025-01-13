'use client'

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-blue-800 text-white py-4 px-6 flex justify-between items-center">
            {/* Logo e navegação */}
            <div className="flex items-center space-x-4">
                <Link href="/" className="text-2xl font-bold">AffiliateShop</Link>
                <nav className={`space-x-6 md:flex ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <Link href="/" className="hover:text-yellow-300">Produtos</Link>
                    <Link href="/reviews" className="hover:text-yellow-300">Resenhas</Link>
                    <Link href="/offers" className="hover:text-yellow-300">Ofertas</Link>
                    <Link href="/contact" className="hover:text-yellow-300">Contato</Link>
                </nav>
            </div>

            {/* Barra de busca */}
            <div className="hidden md:block">
                <input
                    type="text"
                    placeholder="Buscar produtos..."
                    className="px-4 py-2 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
            </div>

            {/* Botão do menu móvel */}
            <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 bg-yellow-500 text-white rounded-md"
            >
                {isMobileMenuOpen ? 'Fechar Menu' : 'Menu'}
            </button>
        </header>
    );
};

export default Header;
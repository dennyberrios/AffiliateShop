import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 px-6 lg:px-12">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
                
                {/* Logo */}
                <div className="flex flex-col items-start space-y-6">
                    <a href="/" className="text-3xl font-semibold text-yellow-500 hover:text-yellow-400 transition-colors">AffiliateShop</a>
                </div>

                {/* Políticas e Termos */}
                <div className="space-y-4 lg:col-span-2">
                    <h3 className="font-bold text-lg text-yellow-500 mb-2">Políticas</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/privacy" className="text-gray-400 hover:text-yellow-300 transition-colors">Política de Privacidade</Link>
                        </li>
                        <li>
                            <Link href="/terms" className="text-gray-400 hover:text-yellow-300 transition-colors">Termos de Serviço</Link>
                        </li>
                        <li>
                            <Link href="/affiliates" className="text-gray-400 hover:text-yellow-300 transition-colors">Divulgação de Afiliados</Link>
                        </li>
                    </ul>
                </div>

                {/* Seção de Redes Sociais - Siga-nos no canto superior direito */}
                <div className="flex flex-col items-end space-y-4">
                    <h3 className="font-bold text-lg text-yellow-500 mb-2">Siga-nos</h3>
                    <div className="flex space-x-6">
                        <Link href="https://facebook.com" target="_blank" className="hover:text-yellow-300 transition-colors">
                            <FaFacebook size={28} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" className="hover:text-yellow-300 transition-colors">
                            <FaInstagram size={28} />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" className="hover:text-yellow-300 transition-colors">
                            <FaTwitter size={28} />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="hover:text-yellow-300 transition-colors">
                            <FaLinkedin size={28} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Links úteis centralizados acima do Copyright */}
            <div className="max-w-screen-xl mx-auto mt-8">
                <h3 className="font-bold text-lg text-yellow-500 mb-2 text-center">Links Úteis</h3>
                <ul className="flex justify-center space-x-6">
                    <li>
                        <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
                    </li>
                    <li>
                        <Link href="/products" className="hover:text-yellow-300 transition-colors">Produtos</Link>
                    </li>
                    <li>
                        <Link href="/reviews" className="hover:text-yellow-300 transition-colors">Resenhas</Link>
                    </li>
                    <li>
                        <Link href="/offers" className="hover:text-yellow-300 transition-colors">Ofertas</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-yellow-300 transition-colors">Contato</Link>
                    </li>
                </ul>
            </div>

            {/* Copyright */}
            <div className="text-center mt-6">
                <p className="text-gray-400 text-sm">© {new Date().getFullYear()} AffiliateShop. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	output: 'export',
	images: {
	    unoptimized: true,
	    domains: ['www.eao.ru', 'upload.wikimedia.org'],
	},
};

module.exports = nextConfig;

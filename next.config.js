/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	output: 'export',
	basePath: process.env.NODE_ENV === 'production' ? '/vizitka' : '',
	images: {
	    unoptimized: true,
	    domains: ['www.eao.ru', 'upload.wikimedia.org'],
	},
};

module.exports = nextConfig;

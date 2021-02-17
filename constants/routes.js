const INDEX = {
	href: '/index.vue',
	route: '/',
	url: '/',
}

const PRODUCT = {
	PRODUCT_LIST: {
		href: '/product/index.vue',
		route: '/product',
		url: '/product',
	},
	PRODUCT_DETAIL: {
		href: '/product/detail.vue',
		route: '/product/detail/:slug',
		url: '/product/detail',
	},
}

const ORDER = {
	CART: {
		href: '/order/cart.vue',
		route: '/order/cart',
		url: '/order/cart',
	},
	DELIVERY: {
		href: '/order/delivery.vue',
		route: '/order/delivery',
		url: '/order/delivery',
	},
}

module.exports = {
	INDEX,
	...PRODUCT,
	...ORDER,
}

import IMAGES from '~/constants/images'
import ROUTES from '~/constants/routes'

export default {
	components: {
		// Compnent
		SpinnerRing: () => import('~/views/components/Loader/SpinnerRing'),

		// UI
		Row: () => import('~/views/ui/Row'),
	},
	data() {
		return {
			images: {
				splashScreen: IMAGES.SPLASH_SCREEN,
			},
			isWelcomePageShow: false,
		}
	},
	mounted() {
		const isWelcomePageShow = localStorage.getItem('isWelcomePageShow')

		setTimeout(() => {
			if (!isWelcomePageShow) {
				this.isWelcomePageShow = true
			} else {
				this.onChangePage()
			}
		}, 3000)
	},
	methods: {
		onChangePage() {
			localStorage.setItem('isWelcomePageShow', true)
			this.$router.push(ROUTES.PRODUCT_LIST.url)
		},
	},
}

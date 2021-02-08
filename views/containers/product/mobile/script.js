import IMAGES from '~/constants/images'

export default {
	components: {
		Row: () => import('~/views/ui/Row'),
	},
	data() {
		return {
			images: {
				splashScreen: IMAGES.SPLASH_SCREEN,
			},
		}
	},
}

import ICONS from '~/constants/icons'
// import IMAGES from '~/constants/images'

export default {
	components: {
		// UI
		Row: () => import('~/views/ui/Row'),
		Column: () => import('~/views/ui/Column'),
		TextView: () => import('~/views/ui/TextView'),
	},
	data() {
		return {
			icons: {
				leftArrowIcon: ICONS.LEFT_ARROW_ICON,
			},
		}
	},
	methods: {
		onPageChange() {
			this.$router.back()
		},
	},
}

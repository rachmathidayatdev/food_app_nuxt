<template>
	<PageContainer />
</template>

<script>
import { initMobileDevice } from '~/helpers/general'

export default {
	transition: 'slide-left',
	components: {
		PageContainer: () => import('~/views/containers/order/list'),
	},
	mounted() {
		window.addEventListener('resize', this.screenResize)
	},
	methods: {
		screenResize(e) {
			const {
				$store: { dispatch },
			} = this

			initMobileDevice({ dispatch, userAgent: navigator.userAgent })
		},
	},
}
</script>

<style></style>

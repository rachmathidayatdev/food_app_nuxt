<template>
	<div class="splash-screen">
		<Row v-if="!isWelcomePageShow" custom-class="splash-screen--item">
			<div class="spinner-container">
				<SpinnerRing
					height="25px"
					width="25px"
					color="#FF240C"
					border-size="2px"
				/>
			</div>
		</Row>
		<Row v-else custom-class="welcome-screen--item">
			<button class="btn-started" type="button" @click="onChangePage">
				Get started
			</button>
		</Row>
	</div>
</template>

<!-- Scripts -->
<script src="./script.js" />

<!-- Styles -->
<style lang="scss">
@import './style';
</style>

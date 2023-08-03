<template>
	<footer class="footer">
		<p class="footer__text">FOOTER</p>
		<p class="footer__copy">Copyright © {{ year }}</p>
	</footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped lang="scss">
.footer {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-size: 13px;
	color: #ebebeb99;
	gap: 5px;
	height: 55px;
	border-bottom: 1px solid #363636;
	border-top: 1px solid #363636;
}
</style>
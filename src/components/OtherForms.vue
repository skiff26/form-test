<template>
	<section class="main__other other">
		<h3>Inne ankiety</h3>
		<article class="other__form" v-for="form in otherForms" :key="form">
			<h4>№ {{ form }}</h4>
			<router-link :to="{ name: 'form', params: { id: form } }">Zobacz</router-link>
		</article>
	</section>
</template>

<script setup>
const otherForms = [1, 2, 3]
</script>

<style lang="scss" scoped>
.other {
	margin: 30px auto;
	max-width: 400px;
	background: #242424;
	border-radius: 8px;
	padding: 30px;
	h3 {
		font-size: 22px;
		text-align: center;
		margin-bottom: 10px;
	}
	&__form {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
		&:not(:last-child) {
			border-bottom: 1px solid #363636;
		}
		a {
			color: rgb(255, 255, 255, 0.87);
			transition: all 0.3s ease 0s;
			&:hover {
				color: #42b883;
			}
		}
	}
}
</style>
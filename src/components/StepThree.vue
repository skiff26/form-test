<template>
	<div class="form__field">
		<label class="form__label">Oceń każdy kolor z pytania 2. w skali 1-5.</label>
		<div class="form__color-rating" v-for="color in form.colors" :key="color.val">
			<label :for="color.val">{{ color.name }} [{{ color.rating }} / 5]</label>
			<input type="range" :id="color.val" min="1" max="5" :disabled="$route.params.id !== ''" v-model="color.rating">
		</div>
	</div>
</template>
<script setup>
const props = defineProps({
	form: { type: Object }
})
</script>
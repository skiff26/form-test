<template>
	<div class="form__field">
		<label class="form__label" for="favColor">Wybierz swój ulubiony kolor:</label>
		<select class="form__select" id="favColor" :disabled="$route.params.id !== ''" v-model="form.color">
			<option value="base" disabled selected>Wybierz kolor</option>
			<option v-for="color in form.colors" :key="color.val" :value="color.val">{{ color.name }}</option>
		</select>
	</div>
</template>

<script setup>
const props = defineProps({
	form: { type: Object }
})
</script>
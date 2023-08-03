<template>
	<div class="form__field">
		<label class="form__label" for="textarea">Z jakich źródeł korzystasz tworząc paletę kolorów?</label>
		<textarea :disabled="$route.params.id !== ''" v-model.trim="form.text" id="textarea" maxlength="500" class="form__textarea" placeholder="Z jakich źródeł korzystasz tworząc paletę kolorów?"></textarea>
	</div>
</template>
<script setup>
const props = defineProps({
	form: { type: Object }
})
</script>
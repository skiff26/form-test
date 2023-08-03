<template>
	<section class="main__form form">
		<div class="form__page">Strona: {{ pageNumber }} / 3</div>
		<StepOne :form="form" v-if="pageNumber === 1"/>
		<StepTwo :form="form" v-else-if="pageNumber === 2"/>
		<StepThree :form="form" v-else-if="pageNumber === 3"/>
		<div class="form__buttons">
			<button class="form__prev" :disabled="pageNumber === 1" @click="prevStep()">Poprzednie</button>
			<button class="form__next" :disabled="isText || isColor" @click="nextStep()" v-if="pageNumber !== 3">Następne</button>
			<button class="form__next" :disabled="validation" @click="submit()" v-else-if="pageNumber === 3 && !route.params.id">Wysłać</button>
			<button class="form__next" :disabled="validation" @click="$router.push({ name: 'result' })" v-else>Do wyników</button>
		</div>
	</section>
</template>

<script setup>
import { forms } from '@/forms'
import { useRoute } from 'vue-router';
import { ref, computed, watch, onMounted } from 'vue';
import StepOne from './StepOne.vue';
import StepTwo from './StepTwo.vue';
import StepThree from './StepThree.vue';

const route = useRoute()
const emit = defineEmits(['completed'])
const pageNumber = ref(JSON.parse(localStorage.getItem("pageNumber")) || 1)
const form = ref(JSON.parse(localStorage.getItem("form")) || {
	text: '',
	color: 'base',
	colors: [
		{ val: 'red', name: 'Czerwony', rating: 0 },
		{ val: 'yellow', name: 'Żółty', rating: 0 },
		{ val: 'orange', name: 'Pomarańczowy', rating: 0 },
		{ val: 'green', name: 'Zielony', rating: 0 },
		{ val: 'blue', name: 'Niebieski', rating: 0 },
		{ val: 'violet', name: 'Fioletowy', rating: 0 }
	]
})

const validation = computed(() => {
	if (form.value.text.length > 1 && form.value.color !== 'base' && form.value.colors.every((i) => i.rating !== 0)) {
		return false
	} 
	return true
})

onMounted(() => {
	if (route.params.id) {
		const number = route.params.id - 1
		form.value = {...forms[number]}
	}
})

const isText = computed(() => form.value.text.length < 2 ? true : false)
const isColor = computed(() => pageNumber.value > 1 && form.value.color === 'base' ? true : false)

watch(pageNumber, (newVal) => {
	if (!route.params.id) {
		localStorage.setItem("pageNumber", JSON.stringify(newVal))
		localStorage.setItem("form", JSON.stringify(form.value))
	}
})

const prevStep = () => pageNumber.value -= 1
const nextStep = () => pageNumber.value += 1

const submit = () => {
	try {
		console.log(form.value)
		localStorage.removeItem("pageNumber")
		localStorage.setItem("form", JSON.stringify(form.value))
		emit('completed')
	} catch(err) {
		console.log(err)
	}
}
</script>
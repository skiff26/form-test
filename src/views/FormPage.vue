<template>
	<MainForm @completed="completed()" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import MainForm from '@/components/MainForm.vue';
const isCompleted = ref(JSON.parse(localStorage.getItem("isCompleted")) || false)
const router = useRouter()
const route = useRoute()

onMounted(() => {
	if (route.params.id === "" && isCompleted.value) {
		router.push({ name: "result" })
	}
})

const completed = () => {
	isCompleted.value = true
	localStorage.setItem("isCompleted", JSON.stringify(isCompleted.value))
	router.push({ name: "result" })
}
</script>
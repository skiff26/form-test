<template>
	<SuccessMessage />
	<OtherForms />
</template>

<script setup>
import OtherForms from '@/components/OtherForms.vue';
import SuccessMessage from '@/components/SuccessMessage.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

onMounted(() => {
	if (!JSON.parse(localStorage.getItem("isCompleted"))) {
		router.push({ name: 'form' })
	}
})
</script>
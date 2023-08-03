<script setup>
import { RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
</script>

<template>
	<div class="wrapper">
		<Header />
		<main class="main">
			<div class="main__container">
				<h1 class="main__title">Ankieta</h1>
				<RouterView />
			</div>
		</main>
		<Footer />
	</div>
</template>
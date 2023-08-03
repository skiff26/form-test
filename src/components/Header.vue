<template>
	<header class="header">
		<div class="header__container">
			<div class="header__logo">
				<a href="#"><img src="/logo.svg" alt="Logo"></a>
			</div>
			<nav class="header__nav nav">
				<ul class="nav__list">
					<li class="nav__item" v-for="item of navElements"><a :href="item.link">{{ item.name }}</a></li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script setup>
const navElements = [
	{ name: 'Główna', link: '#' },
	{ name: 'Usługi', link: '#' },
	{ name: 'Kontakt', link: '#' }
]
</script>

<style lang="scss" scoped>
.header {
	height: 55px;
	overflow: hidden;
	border-bottom: 1px solid #363636;
	border-top: 1px solid #363636;
	&__container {
		display: flex;
		height: inherit;
		align-items: center;
		justify-content: space-between;
	}

	&__logo {
		a img {
			width: 24px;
			height: 24px;
			user-select: none;
		}
	}
}
.nav {

	&__list {
		display: flex;
		gap: 30px;
		@media (max-width: 380px) {
			gap: 20px;
		}
	}

	&__item {
		a {
			color: #e1e1e1;
			transition: all 0.3s ease 0s;
			&:hover {
				color: #42b883;
			}
		}
	}
}

</style>
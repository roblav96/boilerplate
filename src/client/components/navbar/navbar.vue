<!--  -->
<script lang="ts" src="./navbar.ts"></script>

<style>
/**/

/**/

</style>

<template>
	<nav class="navbar">
		<div class="container">
			<div class="navbar-brand">
				<a class="navbar-item">
					<img class="is-png" src="@/assets/logo.png">
				</a>
				<template class="is-hidden-desktop">
					<div class="d-flex fx-fill"></div>
					<a class="navbar-item" v-on:click="showMenu = !showMenu">
						<b-icon icon="menu" />
					</a>
				</template>
			</div>
			<div class="navbar-menu" :class="{ 'is-active': showMenu }">
				<div class="navbar-end">
					<a class="navbar-item is-active">
						<b-icon class="mr-2" icon="home" />
						<span>Home</span>
					</a>
					<a class="navbar-item">
						<b-icon class="mr-2" icon="link" />
						<span>Link 1</span>
					</a>
					<a class="navbar-item">
						<b-icon class="mr-2" icon="link" />
						<span>Link 2</span>
					</a>
					<a class="navbar-item">
						<b-icon class="mr-2" icon="link" />
						<span>Link 3</span>
					</a>
				</div>
			</div>
		</div>
	</nav>
</template>

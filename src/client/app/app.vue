<!--  -->
<script lang="ts" src="./app.ts"></script>

<style lang="scss" src="@/client/styles/all.scss"></style>
<style src="@/client/styles/styles.css"></style>

<style>
/**/

/**/

</style>

<template>
	<div id="app">
		<v-navbar></v-navbar>

		<router-view></router-view>

		<footer class="footer">
			<div class="container">
				<div class="content has-text-centered">
					Footer
				</div>
			</div>
		</footer>
	</div>
</template>

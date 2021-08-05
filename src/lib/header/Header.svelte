<script lang="ts">
	import { page } from '$app/stores'
	import logo from './svelte-logo.svg'
</script>

<nav class="bg-blue-900 shadow-lg">
	<div class="container mx-auto">
		<div class="sm:flex">
			<!-- Menus -->
			<div class="ml-55 mt-4">
				<ul class="text-white sm:self-center text-xl">
					<li class="sm:inline-block">
						<a href="/about" class="p-3 hover:text-red-900">About</a>
					</li>
					<li class="sm:inline-block">
						<a href="/todos" class="p-3 hover:text-red-900">todos</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>

<style>
</style>

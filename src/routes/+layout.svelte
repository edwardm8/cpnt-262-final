<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton'
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar background="bg-primary-50-900-token">
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Everything Pub</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="hover:text-secondary-500 h3" href="/">Home</a>
				<a class="hover:text-secondary-500 h3" href="/products">Products</a>
				<a class="hover:text-secondary-500 h3" href="/about">About</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<AppBar background="bg-primary-50-900-token">
			<svelte:fragment slot="trail">
				<div class="flex flex-col text-center m-auto">
					<nav class="p-4 flex gap-4">
						<a class="hover:text-secondary-500 h3" href="/">Home</a>
						<a class="hover:text-secondary-500 h3" href="/products">Products</a>
						<a class="hover:text-secondary-500 h3" href="/about">About</a>
					</nav>
					<p>&copy; All Rights Resvered Everything Pub</p>
					<p>Edward Mah, Ashkie Esperanza</p>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
</AppShell>

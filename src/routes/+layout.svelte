<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "./layout.css";
	import { Button } from "$lib/components/ui/button";

	let { children } = $props();
</script>

<svelte:head>
	<title>DevSecOps Portfolio | Tom Mendy</title>
	<meta name="description" content="Professional portfolio of a DevSecOps Engineer focusing on automation, security, and cloud-native systems." />
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-background text-foreground flex flex-col font-sans">
	<header class="border-b sticky top-0 z-50 bg-background/95 backdrop-blur">
		<div class="container mx-auto px-4 h-16 flex items-center justify-between">
			<a href="/" class="font-bold text-lg tracking-tight">DEVSEC<span class="text-primary">OPS</span></a>
			<nav class="hidden md:flex items-center space-x-6">
				<a href="/projects" class="text-sm font-medium hover:text-primary transition-colors">Projects</a>
				<a href="/security-mindset" class="text-sm font-medium hover:text-primary transition-colors">Security Mindset</a>
				<a href="/ops" class="text-sm font-medium hover:text-primary transition-colors">Ops & Deployment</a>
			</nav>
			<div class="flex items-center space-x-4">
				<Button variant="outline" size="sm" href="https://github.com/Tom-Mendy" target="_blank">GitHub</Button>
			</div>
		</div>
	</header>

	<main class="flex-grow">
		{@render children()}
	</main>

	<footer class="border-t py-8 bg-muted/30">
		<div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
			<p class="text-sm text-muted-foreground">© 2026 DevSecOps Portfolio. Built with SvelteKit & Shadcn.</p>
			<div class="flex space-x-4 mt-4 md:mt-0">
				<a href="/robots.txt" class="text-xs text-muted-foreground hover:underline">Compliance</a>
				<a href="/ops" class="text-xs text-muted-foreground hover:underline">Deployment Info</a>
			</div>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
	}
</style>

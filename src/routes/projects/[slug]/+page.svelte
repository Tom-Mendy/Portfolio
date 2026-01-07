<script lang="ts">
	import { Badge } from "$lib/components/ui/badge";
	import { Separator } from "$lib/components/ui/separator";
	import { Calendar, Tag } from "@lucide/svelte";

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} | DevSecOps Portfolio</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<article class="container mx-auto px-4 py-12 max-w-4xl">
	<header class="mb-8 space-y-4">
		<h1 class="text-4xl font-extrabold tracking-tight md:text-5xl">{data.meta.title}</h1>

		<div class="flex flex-wrap items-center gap-4 text-muted-foreground">
			<div class="flex items-center gap-1 text-sm">
				<Calendar class="w-4 h-4" />
				<span>{new Date(data.meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
			</div>
			<div class="flex items-center gap-1 text-sm">
				<Tag class="w-4 h-4" />
				<div class="flex gap-2">
					{#each data.meta.tags as tag}
						<Badge variant="outline">{tag}</Badge>
					{/each}
				</div>
			</div>
		</div>

		<p class="text-xl text-muted-foreground italic">
			{data.meta.description}
		</p>
	</header>

	<Separator class="my-8" />

	<div class="prose prose-slate dark:prose-invert max-w-none
		prose-headings:scroll-m-20 prose-h2:border-b prose-h2:pb-2 prose-h2:text-3xl prose-h2:font-semibold
		prose-h3:text-2xl prose-h3:font-semibold
		prose-p:leading-7 prose-li:my-2">
		<data.content />
	</div>

	<div class="mt-16 p-8 border rounded-lg bg-muted/20">
		<h3 class="text-lg font-semibold mb-2">DevSecOps Note</h3>
		<p class="text-sm text-muted-foreground">
			This project follows the "Shift Left" security principle. All security scans are automated and integrated into the CI/CD pipeline.
			For a deeper dive into the specific security policies used in this project, check the <a href="/security-mindset" class="underline">Security Mindset</a> page.
		</p>
	</div>
</article>

<style>
	/* Basic markdown styling in case tailwind prose isn't installed */
	:global(.prose h2) {
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
	:global(.prose p) {
		margin-bottom: 1.25rem;
	}
	:global(.prose ul) {
		list-style-type: disc;
		padding-left: 1.5rem;
		margin-bottom: 1.25rem;
	}
</style>

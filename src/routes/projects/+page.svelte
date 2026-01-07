<script lang="ts">
	import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "$lib/components/ui/card";
	import { Badge } from "$lib/components/ui/badge";
	import { Button } from "$lib/components/ui/button";

	let { data } = $props();
</script>

<svelte:head>
	<title>Projects | DevSecOps Portfolio</title>
	<meta name="description" content="Explore my DevSecOps projects, architectural decisions, and security implementations." />
</svelte:head>

<div class="container mx-auto px-4 py-12">
	<header class="mb-12">
		<h1 class="text-3xl font-bold mb-4">Architecture & Projects</h1>
		<p class="text-muted-foreground max-w-2xl">
			Each project is presented as an engineering dossier. I focus on why decisions were made and how security is integrated at every layer.
		</p>
	</header>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		{#each data.projects as project}
			<Card class="flex flex-col">
				<CardHeader>
					<div class="flex justify-between items-start mb-2">
						{#each project.tags as tag}
							<Badge variant="secondary" class="mr-1">{tag}</Badge>
						{/each}
					</div>
					<CardTitle class="text-2xl">{project.title}</CardTitle>
					<CardDescription>{project.description}</CardDescription>
				</CardHeader>
				<CardFooter class="mt-auto pt-6">
					<Button variant="default" href="/projects/{project.slug}" class="w-full">Explore Dossier</Button>
				</CardFooter>
			</Card>
		{/each}
	</div>
</div>

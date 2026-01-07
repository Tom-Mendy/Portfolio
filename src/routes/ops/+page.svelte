<script lang="ts">
	import { Badge } from "$lib/components/ui/badge";
	import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { Separator } from "$lib/components/ui/separator";
	import { Server, Shield, Activity, GitCommit } from "@lucide/svelte";
</script>

<svelte:head>
	<title>Ops & Deployment | DevSecOps Portfolio</title>
	<meta name="description" content="Technical details about the infrastructure, security headers, and deployment pipeline of this portfolio." />
</svelte:head>

<div class="container mx-auto px-4 py-12 max-w-4xl">
	<header class="mb-16">
		<h1 class="text-4xl font-extrabold tracking-tight mb-4">Ops & Deployment</h1>
		<p class="text-xl text-muted-foreground">
			Proof that this portfolio is built, secured, and deployed following DevSecOps best practices.
		</p>
	</header>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
		<Card>
			<CardHeader class="flex flex-row items-center gap-4">
				<Server class="w-8 h-8 text-primary" />
				<div>
					<CardTitle>Infrastructure</CardTitle>
					<Badge>Dockerized</Badge>
				</div>
			</CardHeader>
			<CardContent>
				<p class="text-sm text-muted-foreground">
					This site runs as a multi-stage Docker build, served by an optimized NGINX instance.
					The image is built on an Alpine base to minimize the attack surface.
				</p>
			</CardContent>
		</Card>

		<Card>
			<CardHeader class="flex flex-row items-center gap-4">
				<Shield class="w-8 h-8 text-primary" />
				<div>
					<CardTitle>Security Headers</CardTitle>
					<Badge variant="outline">A+ Rated</Badge>
				</div>
			</CardHeader>
			<CardContent>
				<p class="text-sm text-muted-foreground">
					Configured with strict CSP, HSTS, X-Frame-Options, and X-Content-Type-Options.
					HTTPS is enforced via automated Let's Encrypt certificates.
				</p>
			</CardContent>
		</Card>
	</div>

	<div class="space-y-8">
		<h2 class="text-2xl font-bold">The Pipeline</h2>
		<div class="border rounded-lg overflow-hidden bg-muted/10 p-6">
			<div class="flex flex-col md:flex-row items-center justify-between gap-4">
				<div class="flex flex-col items-center gap-2">
					<div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
						<GitCommit />
					</div>
					<span class="text-xs font-semibold uppercase">Build</span>
				</div>
				<Separator class="hidden md:block flex-1 bg-primary/20" />
				<div class="flex flex-col items-center gap-2">
					<div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
						<Shield />
					</div>
					<span class="text-xs font-semibold uppercase">Scan (Trivy)</span>
				</div>
				<Separator class="hidden md:block flex-1 bg-primary/20" />
				<div class="flex flex-col items-center gap-2">
					<div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
						<Activity />
					</div>
					<span class="text-xs font-semibold uppercase">Deploy</span>
				</div>
			</div>
		</div>

		<div class="space-y-4 pt-8">
			<h3 class="text-xl font-bold">Live Monitoring</h3>
			<p class="text-muted-foreground italic">
				This section would typically link to a public Grafana dashboard or display real-time metrics.
			</p>
			<ul class="list-disc list-inside space-y-2 text-sm text-muted-foreground">
				<li>Uptime tracking via UptimeRobot</li>
				<li>Container logs aggregated via Loki</li>
				<li>Security events monitored via Fail2Ban (at host level)</li>
			</ul>
		</div>
	</div>
</div>

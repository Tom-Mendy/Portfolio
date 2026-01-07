<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { ShieldAlert, ShieldCheck, Zap, Scale } from "@lucide/svelte";
</script>

<svelte:head>
	<title>Security Mindset | DevSecOps Portfolio</title>
	<meta name="description" content="Philosophical approach to security, risk management, and the balance between security and delivery." />
</svelte:head>

<div class="container mx-auto px-4 py-12 max-w-4xl">
	<header class="mb-16">
		<h1 class="text-4xl font-extrabold tracking-tight mb-4">Security Mindset</h1>
		<p class="text-xl text-muted-foreground">
			How I reason face to risk, and how I balance security with delivery.
		</p>
	</header>

	<div class="space-y-12">
		<section class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<Card>
				<CardHeader>
					<Scale class="w-8 h-8 text-primary mb-2" />
					<CardTitle>Arbitrating Security vs Delivery</CardTitle>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground leading-relaxed">
						Security is not a blocker; it's a quality attribute. I prioritize vulnerabilities based on risk exposure and business impact.
						If a fix breaks a critical production flow, we implement temporary compensating controls while working on the long-term solution.
					</p>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<Zap class="w-8 h-8 text-primary mb-2" />
					<CardTitle>When NOT to block</CardTitle>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground leading-relaxed">
						Blocking every pipeline for every CVE-2024-xxxx leads to tool fatigue.
						I implement logic to ignore vulnerabilities that are not reachable in our specific runtime context, favoring "signal over noise".
					</p>
				</CardContent>
			</Card>
		</section>

		<section class="space-y-6">
			<h2 class="text-2xl font-bold">Why scanning isn't enough</h2>
			<div class="prose dark:prose-invert max-w-none">
				<p>
					Automated tools are essential but limited. A "clean" scan doesn't mean a secure application.
					My approach includes:
				</p>
				<ul>
					<li><strong>Threat Modeling</strong>: Thinking like an attacker before writing a single line of IaC.</li>
					<li><strong>Least Privilege</strong>: Reducing the blast radius by default (RBAC, IAM).</li>
					<li><strong>Observability</strong>: Because security is also about knowing when you are currently being attacked.</li>
				</ul>
			</div>
		</section>

		<section class="bg-primary/5 border border-primary/20 rounded-xl p-8 space-y-4">
			<div class="flex items-center gap-2">
				<ShieldAlert class="text-primary" />
				<h2 class="text-xl font-bold">Incident Response Mindset</h2>
			</div>
			<p class="text-muted-foreground">
				When an incident happens, the focus is 1. Containment, 2. Eradication, 3. Recovery, and 4. <strong>Blameless Post-mortem</strong>.
				Automation should help us recover faster, not just detect faster.
			</p>
		</section>
	</div>
</div>

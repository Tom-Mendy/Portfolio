<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { ShieldCheck, Terminal, HardDrive, GitBranch } from "@lucide/svelte";
</script>

<div class="container mx-auto px-4 py-12 md:py-24">
	<section class="max-w-3xl mx-auto text-center space-y-8 mb-24">
		<Badge variant="outline" class="px-4 py-1 border-primary/30 text-primary">Junior+ DevSecOps Engineer</Badge>
		<h1 class="text-4xl md:text-6xl font-extrabold tracking-tight">
			I design, secure and <span class="text-primary">automate</span> cloud-native systems.
		</h1>
		<p class="text-xl text-muted-foreground leading-relaxed">
			Bridging the gap between development, security, and operations. Focus on CI/CD security, infrastructure as code, and runtime protection for modern applications.
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<Button size="lg" href="/projects">View Projects</Button>
			<Button size="lg" variant="outline" href="/security-mindset">Security Philosophy</Button>
		</div>
	</section>

	<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
		<Card>
			<CardHeader>
				<Terminal class="w-10 h-10 text-primary mb-2" />
				<CardTitle>Automation</CardTitle>
				<CardDescription>CI/CD Pipelines</CardDescription>
			</CardHeader>
			<CardContent>
				<p class="text-sm text-muted-foreground">GitHub Actions, GitLab CI, Jenkins. Automating build, test, and deployment cycles with security gates.</p>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<ShieldCheck class="w-10 h-10 text-primary mb-2" />
				<CardTitle>Security</CardTitle>
				<CardDescription>Shift-Left Security</CardDescription>
			</CardHeader>
			<CardContent>
				<p class="text-sm text-muted-foreground">SAST/DAST, Container scanning (Trivy), Secrets management, and Runtime security monitoring.</p>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<HardDrive class="w-10 h-10 text-primary mb-2" />
				<CardTitle>Cloud Native</CardTitle>
				<CardDescription>Infrastructure & Orchestration</CardDescription>
			</CardHeader>
			<CardContent>
				<p class="text-sm text-muted-foreground">Docker, Kubernetes, Terraform, AWS/GCP. High availability and scalable architecture design.</p>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<GitBranch class="w-10 h-10 text-primary mb-2" />
				<CardTitle>Governance</CardTitle>
				<CardDescription>Compliance & Auditing</CardDescription>
			</CardHeader>
			<CardContent>
				<p class="text-sm text-muted-foreground">Policies as Code (OPA), auditing, and ensuring regulatory compliance through automated checks.</p>
			</CardContent>
		</Card>
	</section>

	<section class="bg-muted/30 border rounded-xl p-12 text-center">
		<h2 class="text-2xl font-bold mb-4">"If you delete the design, is your portfolio still interesting?"</h2>
		<p class="text-muted-foreground italic mb-0">The value is in the engineering choices, not the pixels.</p>
	</section>
</div>

<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { GitBranch, ShieldAlert, Cpu, Network, Info } from "lucide-svelte";

  const projects = [
    {
      title: "Hardened Web Stack POC",
      objective: "Deploy a secure-by-default Nginx/React stack on K8s.",
      context: "Self-study project to simulate a production environment for sensitive data.",
      architecture: {
        services: "Nginx (Reverse Proxy), React (Frontend), Node.js (API), Redis (Cache)",
        flow: "User -> Cloudflare -> LoadBalancer -> Nginx (WAF) -> App"
      },
      security: [
        "Rootless Docker images",
        "Trivy scanning on every build",
        "Secrets managed via HashiCorp Vault (not env vars)"
      ],
      cicd: {
        pipeline: "GitHub Actions: Lint -> Scan -> Build -> Test -> Deploy (ArgoCD)",
        policy: "Blocking on 'High' or 'Critical' vulnerabilities"
      },
      tags: ["K8s", "Docker", "Vault", "Trivy", "ArgoCD"],
      limits: "Currently lacks a production-grade HSM for Vault. In enterprise, I would use AWS KMS or Azure Key Vault."
    }
  ];
</script>

<section class="max-w-5xl mx-auto py-12 space-y-8">
  <div class="border-l-4 border-primary pl-4">
    <h2 class="text-3xl font-bold tracking-tight">Technical Projects</h2>
    <p class="text-muted-foreground text-sm">Documenting engineering decisions and security controls.</p>
  </div>

  {#each projects as project}
    <Card.Root class="overflow-hidden">
      <Card.Header class="bg-muted/30">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <Card.Title class="text-2xl">{project.title}</Card.Title>
          <div class="flex flex-wrap gap-2">
            {#each project.tags as tag}
              <Badge variant="secondary">{tag}</Badge>
            {/each}
          </div>
        </div>
      </Card.Header>

      <Card.Content class="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
        <div class="space-y-6">
          <div class="space-y-2">
            <h4 class="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              <Info class="w-4 h-4" /> Résumé
            </h4>
            <div class="text-muted-foreground text-sm space-y-1">
              <p><span class="font-semibold text-foreground">Objectif:</span> {project.objective}</p>
              <p><span class="font-semibold text-foreground">Contexte:</span> {project.context}</p>
            </div>
          </div>

          <div class="space-y-2">
            <h4 class="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              <Network class="w-4 h-4" /> Architecture
            </h4>
            <div class="text-muted-foreground text-sm space-y-1">
              <p><span class="font-semibold text-foreground">Services:</span> {project.architecture.services}</p>
              <p><span class="font-semibold text-foreground">Flux:</span> {project.architecture.flow}</p>
            </div>
          </div>

          <div class="space-y-2">
            <h4 class="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              <GitBranch class="w-4 h-4" /> CI/CD
            </h4>
            <div class="text-muted-foreground text-sm">
              <p>{project.cicd.pipeline}</p>
              <Badge variant="destructive" class="mt-2">Policy: {project.cicd.policy}</Badge>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="space-y-2">
            <h4 class="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              <ShieldAlert class="w-4 h-4" /> Sécurité Intégrée
            </h4>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              {#each project.security as item}
                <li>{item}</li>
              {/each}
            </ul>
          </div>

          <div class="space-y-2">
            <h4 class="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
               <Cpu class="w-4 h-4" /> Limites & améliorations
            </h4>
            <div class="p-4 bg-muted/50 rounded-lg text-xs italic text-muted-foreground border-l-2 border-primary">
              {project.limits}
            </div>
          </div>
        </div>
      </Card.Content>
    </Card.Root>
  {/each}
</section>

<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Box, Lock, Zap, Activity } from "lucide-svelte";
</script>

<section class="max-w-4xl mx-auto py-12 space-y-8">
  <div class="border-l-4 border-green-500 pl-4">
    <h2 class="text-3xl font-bold tracking-tight">Ops & Deployment</h2>
    <p class="text-muted-foreground">Ce portfolio est lui-même un projet DevSecOps. Voici son infrastructure.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card.Root>
      <Card.Header>
        <div class="flex items-center gap-3">
          <Box class="w-6 h-6 text-green-500" />
          <Card.Title>Containerization</Card.Title>
        </div>
      </Card.Header>
      <Card.Content>
        <p class="text-muted-foreground leading-relaxed text-sm">
          Utilisation d'images <code class="bg-muted px-1 rounded text-foreground">alpine-slim</code> pour minimiser la surface d'attaque. Multi-stage build pour séparer l'environnement de build et de runtime.
        </p>
      </Card.Content>
    </Card.Root>

    <Card.Root>
      <Card.Header>
        <div class="flex items-center gap-3">
          <Lock class="w-6 h-6 text-green-500" />
          <Card.Title>Nginx Hardening</Card.Title>
        </div>
      </Card.Header>
      <Card.Content>
        <ul class="list-disc list-inside space-y-1 text-muted-foreground text-sm">
          <li>Headers de sécurité : CSP, HSTS, X-Frame-Options.</li>
          <li>Exécution sous un utilisateur non-privilégié.</li>
          <li>Désactivation des Server Tokens.</li>
        </ul>
      </Card.Content>
    </Card.Root>

    <Card.Root>
      <Card.Header>
        <div class="flex items-center gap-3">
          <Zap class="w-6 h-6 text-green-500" />
          <Card.Title>CI/CD Pipeline</Card.Title>
        </div>
      </Card.Header>
      <Card.Content>
        <p class="text-muted-foreground text-sm">
          Chaque push sur <code class="bg-muted px-1 rounded text-foreground">main</code> déclenche un scan de vulnérabilités (Trivy), un build Docker, et un déploiement automatisé via GitHub Actions.
        </p>
      </Card.Content>
    </Card.Root>

    <Card.Root>
      <Card.Header>
        <div class="flex items-center gap-3">
          <Activity class="w-6 h-6 text-green-500" />
          <Card.Title>Observability</Card.Title>
        </div>
      </Card.Header>
      <Card.Content>
        <p class="text-muted-foreground text-sm">
          Endpoints <code class="bg-muted px-1 rounded text-foreground">/healthz</code> exposés pour le monitoring et l'orchestration Kubernetes (Liveness/Readiness probes).
        </p>
      </Card.Content>
    </Card.Root>
  </div>
</section>

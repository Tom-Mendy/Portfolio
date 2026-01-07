<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Shield, Cloud, Repeat, ShieldCheck } from "@lucide/svelte";
</script>

<section class="max-w-4xl mx-auto space-y-12 py-12">
  <div class="text-center space-y-4">
    <h1 class="text-5xl font-extrabold tracking-tight lg:text-6xl">
      DevSecOps Engineer
    </h1>
    <p class="text-2xl text-muted-foreground italic">
      "I design, secure and automate cloud-native systems."
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
    <Card.Root>
      <Card.Header>
        <div class="flex items-center gap-2 mb-2">
          <Cloud class="w-5 h-5 text-primary" />
          <Card.Title>Infrastructure</Card.Title>
        </div>
        <Card.Description>Cloud native & Automation</Card.Description>
      </Card.Header>
      <Card.Content>
        <p class="text-muted-foreground">Docker, Kubernetes, Terraform, Helm</p>
      </Card.Content>
    </Card.Root>

    <Card.Root>
      <Card.Header>
        <div class="flex items-center gap-2 mb-2">
          <Repeat class="w-5 h-5 text-primary" />
          <Card.Title>CI/CD</Card.Title>
        </div>
        <Card.Description>Pipelines as Code</Card.Description>
      </Card.Header>
      <Card.Content>
        <p class="text-muted-foreground">GitHub Actions, GitLab CI, Jenkins, ArgoCD</p>
      </Card.Content>
    </Card.Root>

    <Card.Root>
      <Card.Header>
        <div class="flex items-center gap-2 mb-2">
          <Shield class="w-5 h-5 text-primary" />
          <Card.Title>Security</Card.Title>
        </div>
        <Card.Description>Shifting Left</Card.Description>
      </Card.Header>
      <Card.Content>
        <p class="text-muted-foreground">Trivy, SonarQube, Snyk, Vault, Falco</p>
      </Card.Content>
    </Card.Root>

    <Card.Root>
      <Card.Header>
        <div class="flex items-center gap-2 mb-2">
          <ShieldCheck class="w-5 h-5 text-primary" />
          <Card.Title>Cloud</Card.Title>
        </div>
        <Card.Description>Providers & Compliance</Card.Description>
      </Card.Header>
      <Card.Content>
        <p class="text-muted-foreground">AWS (IAM, EKS), Azure, GCP</p>
      </Card.Content>
    </Card.Root>
  </div>
</section>

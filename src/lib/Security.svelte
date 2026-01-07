<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion";
  import { BrainCircuit } from "@lucide/svelte";
</script>

<section class="max-w-3xl mx-auto py-12 space-y-12">
  <div class="border-l-4 border-destructive pl-4">
    <h2 class="text-3xl font-bold tracking-tight">Security Mindset</h2>
    <p class="text-muted-foreground italic">"Security is not a checkbox, it's a culture."</p>
  </div>

  <div class="bg-muted/30 p-8 rounded-xl border flex flex-col items-center text-center space-y-4">
    <BrainCircuit class="w-12 h-12 text-destructive" />
    <h3 class="text-xl font-semibold">Risk & Engineering Trade-offs</h3>
    <p class="text-muted-foreground max-w-lg text-sm">
      Comment je raisonne face au risque et comment j'arbitre entre sécurité et rapidité de déploiement.
    </p>
  </div>

  <Accordion.Root class="w-full">
    <Accordion.Item value="item-1">
      <Accordion.Trigger class="text-left text-lg font-medium">
        Quand ne PAS bloquer un pipeline ?
      </Accordion.Trigger>
      <Accordion.Content class="text-muted-foreground leading-relaxed">
        La sécurité ne doit pas être un frein pour l'innovation. Si une vulnérabilité est identifiée mais que l'impact est faible et la correction longue, je préfère "warn" que "fail" pour maintenir le business continuity tout en créant un ticket de remédiation prioritaire.
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="item-2">
      <Accordion.Trigger class="text-left text-lg font-medium">
        Fail fast vs Business Continuity
      </Accordion.Trigger>
      <Accordion.Content class="text-muted-foreground leading-relaxed">
        En DevSecOps, échouer tôt est vital. Mais en production, la continuité prime. J'implémente des circuits-breakers et des mécanismes de fallback pour que la sécurité n'entraîne pas un déni de service involontaire.
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="item-3">
      <Accordion.Trigger class="text-left text-lg font-medium">
        Pourquoi tout scanner ne suffit pas
      </Accordion.Trigger>
      <Accordion.Content class="text-muted-foreground leading-relaxed">
        Les outils automatisés ratent les erreurs de logique ou les secrets mal protégés. Mon rôle est d'analyser le contexte et d'appliquer le principe du moindre privilège partout (IAM, Network, Apps).
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
</section>

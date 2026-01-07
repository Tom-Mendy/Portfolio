<script lang="ts">
  import "$lib/../app.css";
  import Home from '$lib/Home.svelte';
  import Projects from '$lib/Projects.svelte';
  import Security from '$lib/Security.svelte';
  import Ops from '$lib/Ops.svelte';
  import * as Tabs from "$lib/components/ui/tabs";

  let currentRoute = "home";
</script>

<div class="dark min-h-screen bg-background text-foreground flex flex-col">
  <header class="border-b">
    <div class="container mx-auto py-6">
      <Tabs.Root bind:value={currentRoute} class="w-full">
        <div class="flex flex-col items-center gap-6">
          <Tabs.List class="grid grid-cols-4 w-full max-w-lg">
            <Tabs.Trigger value="home">Home</Tabs.Trigger>
            <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
            <Tabs.Trigger value="security">Security</Tabs.Trigger>
            <Tabs.Trigger value="ops">Ops</Tabs.Trigger>
          </Tabs.List>
        </div>
      </Tabs.Root>
    </div>
  </header>

  <main class="flex-grow container mx-auto px-4">
    {#if currentRoute === 'home'}
      <Home />
    {:else if currentRoute === 'projects'}
      <Projects />
    {:else if currentRoute === 'security'}
      <Security />
    {:else if currentRoute === 'ops'}
      <Ops />
    {/if}
  </main>

  <footer class="border-t py-8 text-center text-muted-foreground text-sm">
    <div class="container mx-auto">
      <p>© 2026 - Designed for Security, Automated for Performance.</p>
      <p class="mt-1 flex items-center justify-center gap-1">
        Built with Svelte & Docker 🛡️
      </p>
    </div>
  </footer>
</div>

<style>
  :global(body) {
    margin: 0;
  }
</style>

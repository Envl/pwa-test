<script>
	import { browser, dev } from '$app/env';
</script>

<svelte:head>
	{#if !dev && browser}
		<link rel="manifest" href="/manifest.webmanifest" />
	{/if}
</svelte:head>
<slot><!-- optional fallback --></slot>

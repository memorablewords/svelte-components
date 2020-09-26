<script>
    export let element = 'span'
    export let display = 'body'
    export let dimmed = false
    export let stacked = false
</script>

<style>
    .dimmed {
        color: var(--color-text-dimmed);
    }
</style>

{#if element === 'h1'}
    <h1 class:dimmed class={display} class:stacked>
        <slot />
    </h1>
{:else if element === 'h2'}
    <h2 class:dimmed class={display} class:stacked>
        <slot />
    </h2>
{:else if element === 'h3'}
    <h3 class:dimmed class={display} class:stacked>
        <slot />
    </h3>
{:else if element === 'p'}
    <p class:dimmed class={display} class:stacked>
        <slot />
    </p>
{:else}
    <span class:dimmed class={display} class:stacked>
        <slot />
    </span>
{/if}

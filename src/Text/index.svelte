<script>
    export let element = 'span'
    export let display = 'body'
    export let dimmed = false
    export let stacked = false
</script>

<style>
    .stacked.body {
        display: inline-block;
        margin: 16px 0;
    }

    .stacked.header {
        display: block;
        margin: 24px 0 16px;
    }
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
{:else if element === 'p'}
    <p class:dimmed class={display} class:stacked>
        <slot />
    </p>
{:else}
    <span class:dimmed class={display} class:stacked>
        <slot />
    </span>
{/if}

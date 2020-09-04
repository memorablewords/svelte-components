<script>
    export let relaxed = false
    export let title
    export let onclick = () => {}
</script>

<style>
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: var(--button-size);
        min-width: var(--button-size);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Can be replaced by CSS gap when supported more widely. */
    button > * {
        margin: 0 calc(var(--button-gap) / 2);
    }

    button > *:first-child {
        margin-left: 0;
    }

    button > *:last-child {
        margin-right: 0;
    }

    .relaxed {
        padding: var(--button-padding);
    }
</style>

<button on:click={onclick} {title} type="button" class:relaxed>
    <slot />
</button>

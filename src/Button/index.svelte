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
        gap: var(--button-gap);
        min-height: var(--button-size);
        min-width: var(--button-size);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .relaxed {
        padding: var(--button-padding);
    }
</style>

<button on:click={onclick} {title} type="button" class:relaxed>
    <slot />
</button>

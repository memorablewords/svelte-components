<script>
    export let disabled = false
    export let relaxed = false
    export let title
    export let type = 'button'
    export let onclick = () => {}
</script>

<style>
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        /* Can replace the Spacer when more widely supported.
           See https://caniuse.com/#feat=flexbox-gap */
        /* gap: var(--button-gap); */
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

<button on:click={onclick} {title} {type} {disabled} class:relaxed>
    <slot />
</button>

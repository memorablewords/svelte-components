<script>
    export let disabled = false
    export let blown = false
    export let subtle = false
    export let border = false
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
        background-color: var(--second-color);
        border: 1px solid var(--second-color);
        color: var(--app-primary-color);
    }

    button:hover,
    button:focus {
        border-bottom-color: var(--app-primary-color);
        border-bottom-style: solid;
        border-bottom-width: 2px;
        padding-top: 1px;
        z-index: 2;
    }

    .disabled,
    .disabled:focus,
    .disabled:hover {
        border-bottom-width: 0;
        padding-top: 0;
    }

    button::-moz-focus-inner {
        border: none;
    }

    .disabled {
        color: var(--button-disabled-color);
    }
    .border.disabled,
    .border.disabled:focus,
    .border.disabled:hover {
        border-color: var(--button-disabled-color);
        border-bottom-width: 1px;
        padding-top: 0;
    }

    .border {
        border-color: var(--app-primary-color);
    }

    .blown {
        height: 100%;
        width: 100%;
    }

    .subtle,
    .subtle.disabled {
        border-style: dotted;
    }

    .relaxed {
        padding: 0 var(--button-padding);
    }
</style>

<button
    on:click={onclick}
    {title}
    {type}
    {disabled}
    class:disabled
    class:relaxed
    class:border
    class:subtle
    class:blown>
    <slot />
</button>

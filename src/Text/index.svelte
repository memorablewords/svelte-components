<script>
    export let element = 'span'
    export let display = 'body'
    export let dimmed = false
    export let stacked = false

    let body = display === 'body' || display === 'header'
    let header = display === 'header'
</script>

<style>
    /* See https://seek-oss.github.io/capsize */
    .body {
        font-size: 16.8791px;
        line-height: 24px;
        padding: 0.05px 0;
    }

    .body::before {
        content: '';
        display: block;
        height: 0;
        margin-top: -0.3448em;
    }

    .body::after {
        content: '';
        display: block;
        height: 0;
        margin-bottom: -0.3721em;
    }

    .header {
        text-transform: uppercase;
        font-weight: 700;
    }

    .stacked.body {
        display: inline-block;
        margin: 16px 0;
    }

    .stacked.header {
        display: block;
        margin: 24px 0 16px;
    }

    h1,
    h2,
    p,
    span {
        /* See https://polaris.shopify.com/design/typography#section-font-stack */
        font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI,
            Roboto, Helvetica Neue, sans-serif;
        font-weight: normal;
        margin: 0;
        padding: 0;
    }

    .dimmed {
        color: var(--color-text-dimmed);
    }
</style>

{#if element === 'h1'}
    <h1 class:body class:dimmed class:header class:stacked>
        <slot />
    </h1>
{:else if element === 'h2'}
    <h2 class:body class:dimmed class:header class:stacked>
        <slot />
    </h2>
{:else if element === 'p'}
    <p class:body class:dimmed class:header class:stacked>
        <slot />
    </p>
{:else}
    <span class:body class:dimmed class:header class:stacked>
        <slot />
    </span>
{/if}

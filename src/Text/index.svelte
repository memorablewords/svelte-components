<script>
    export let element = 'span'
    export let display = 'body'

    let body = display === 'body'
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
</style>

{#if element === 'h1'}
    <h1 class:body>
        <slot />
    </h1>
{:else if element === 'h2'}
    <h2 class:body>
        <slot />
    </h2>
{:else if element === 'p'}
    <p class:body>
        <slot />
    </p>
{:else}
    <span class:body>
        <slot />
    </span>
{/if}

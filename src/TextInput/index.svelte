<script>
    import Text from '../Text/index.svelte'

    export let hint
    export let id
    export let label
    export let name = id
    export let oninput = () => {}
    export let placeholder
    export let required = false
    export let value = ''
</script>

<style>
    /* See https://seek-oss.github.io/capsize */
    .body {
        font-size: 16.8791px;
        line-height: 24px;
        padding: 7.05px 7px;
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

    p {
        --space-xl: 32px;
        margin: var(--space-xl) 0;
        padding: 0;
        width: 100%;
    }

    input,
    label {
        display: block;
        box-sizing: border-box;
        width: 100%;
    }

    label {
        margin-bottom: 12px;
    }

    input {
        margin-bottom: 16px;
    }
    input:invalid {
        box-shadow: none;
    }
</style>

<p>
    <label for={name}>
        <Text>
            {@html label}
        </Text>
    </label>
    <input
        class="body"
        type="text"
        {name}
        {id}
        {placeholder}
        {required}
        on:input={oninput}
        bind:value />
    <Text dimmed>
        {@html hint}
    </Text>
</p>

<script>
    export let type
    export let size = 32
    export let illustrative = false
</script>

<svg
    role="img"
    aria-hidden={illustrative}
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round">
    <title>{type}</title>
    <use xlink:href="icons.svg#{type}" />
</svg>

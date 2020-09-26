<script>
    export let vertical = false
</script>

<div class={vertical ? 'vertical stack' : 'horizontal stack'}>
    <slot />
</div>

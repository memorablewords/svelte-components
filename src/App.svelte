<script>
    import Icon from './Icon/index.svelte'
</script>

<ul>
    <li>
        <a href="#icon">Icon</a>
    </li>
</ul>

<section section="icon">
    <h2>Icon</h2>

    <p>
        <strong>Important:</strong>
        this component depends on a source of icons being accessible (e.g.
        <code>public/icons.svg</code>
        ). The
        <a href="https://feathericons.com">Feather icons download file</a>
        can be used as a reference to create such a source of icons. The
        <code>type</code>
        of each icon matches the
        <code>id</code>
        of an SVG
        <code>symbol</code>
        inside that file.
    </p>

    <h3>Default</h3>
    <div id="icon-default">
        <Icon type="moon" />
    </div>

    <h3>Illustrative</h3>
    <div id="icon-illustrative">
        <Icon type="sun" illustrative={true} />
    </div>

    <h3>Custom size</h3>
    <div id="icon-small">
        <Icon type="moon" size={24} />
    </div>
</section>

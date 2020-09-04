<script>
    import Button from './Button/index.svelte'
    import Icon from './Icon/index.svelte'
    import Spacer from './Spacer/index.svelte'
    import Text from './Text/index.svelte'
</script>

<style>
    :root {
        --button-gap: 8px;
        --button-padding: 8px;
        --button-size: 48px;
        --spacer-size: var(--button-gap);
    }
</style>

<ul>
    <li>
        <a href="#button">Button</a>
    </li>
    <li>
        <a href="#icon">Icon</a>
    </li>
    <li>
        <a href="#spacer">Spacer</a>
    </li>
    <li>
        <a href="#text">Text</a>
    </li>
</ul>

<section section="button">
    <h2>Button</h2>

    <p>Depends on the following CSS variables:</p>
    <dl>
        <dt>
            <code>--button-gap</code>
        </dt>
        <dd>
            Gap between the different components inside the button, if there are
            multiple.
        </dd>
        <dt>
            <code>--button-padding</code>
        </dt>
        <dd>
            Space on both sides of the button's content when
            <code>relaxed</code>
            .
        </dd>
        <dt>
            <code>--button-size</code>
        </dt>
        <dd>Minimum size of the button.</dd>
    </dl>

    <h3>Default</h3>
    <div id="button-default">
        <Button title="Example button" onclick={() => alert('Example!')}>
            <Text>Example</Text>
        </Button>
    </div>

    <h3>With icons</h3>

    <p>
        <strong>Note:</strong>
        Until the CSS property
        <code>gap</code>
        for Flexbox is
        <a href="https://caniuse.com/#feat=flexbox-gap">better supported</a>
        , buttons with multiple elements rely on
        <a href="#spacer">
            <code>Spacer</code>
        </a>
        to separate them.
    </p>

    <div id="button-icon">
        <Button title="Example button" onclick={() => alert('Example!')}>
            <Icon type="sun" size={24} />
        </Button>
    </div>
    <div id="button-icon-text">
        <Button title="Example button" onclick={() => alert('Example!')}>
            <Icon type="moon" size={24} />
            <Spacer />
            <Text>Example</Text>
        </Button>
    </div>
    <div id="button-text-icon">
        <Button title="Example button" onclick={() => alert('Example!')}>
            <Text>Example</Text>
            <Spacer />
            <Icon type="sun" size={24} />
        </Button>
    </div>

    <h3>Relaxed</h3>
    <div id="button-relaxed">
        <Button
            title="Example button"
            onclick={() => alert('Example!')}
            relaxed>
            <Icon type="moon" size={24} />
            <Spacer />
            <Text>Example</Text>
        </Button>
    </div>
</section>

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

<section section="spacer">
    <h2>Spacer</h2>

    <p>
        Allows to insert a space between other components when they are used in
        another component `slot` and styling is not otherwise possible. Don't
        over-use it!
    </p>

    <p>Depends on the following CSS variable:</p>
    <dl>
        <dt>
            <code>--spacer-size</code>
        </dt>
        <dd>Width and height of the spacer.</dd>
    </dl>

    <h3>Default</h3>
    <div id="spacer-default">
        <Icon type="sun" />
        <Icon type="sun" />
        <Icon type="sun" />
        <Spacer />
        <Icon type="sun" />
    </div>
</section>

<section section="text">
    <h2>Text</h2>

    <h3>Default</h3>
    <div id="text-default">
        <Text>The quick brown fox jumps over the lazy dog.</Text>
    </div>

    <h3>
        Custom elements
        <code>p</code>
    </h3>
    <div id="text-h1">
        <Text element="h1">Quick brown fox</Text>
    </div>

    <div id="text-h2">
        <Text element="h2">Lazy dog</Text>
    </div>

    <div id="text-p">
        <Text element="p">The quick brown fox jumps over the lazy dog.</Text>
    </div>
</section>

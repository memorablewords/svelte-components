<script>
    import Button from './Button/index.svelte'
    import Icon from './Icon/index.svelte'
    import Spacer from './Spacer/index.svelte'
    import Text from './Text/index.svelte'
    import TextInput from './TextInput/index.svelte'

    let value = ''
</script>

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
    <li>
        <a href="#textinput">TextInput</a>
    </li>
</ul>

<section section="button">
    <a id="button">¶</a>
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
    <a id="icon">¶</a>
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
    <a id="spacer">¶</a>
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
    <a id="text">¶</a>
    <h2>Text</h2>

    <p>Depends on the following CSS variable:</p>
    <dl>
        <dt>
            <code>--color-text-dimmed</code>
        </dt>
        <dd>
            Color of the text when
            <code>dimmed</code>
            .
        </dd>
    </dl>

    <h3>Default</h3>
    <div id="text-default">
        <Text>The quick brown fox jumps over the lazy dog.</Text>
    </div>

    <h3>Dimmed</h3>
    <div id="text-dimmed">
        <Text dimmed>The quick brown fox jumps over the lazy dog.</Text>
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

    <h3>Typography</h3>

    <div id="text-body">
        <Text display="body">The quick brown fox jumps over the lazy dog.</Text>
    </div>

    <div id="text-caption">
        <Text display="caption">
            The quick brown fox jumps over the lazy dog.
        </Text>
    </div>

    <div id="text-display1">
        <Text display="display1">
            The quick brown fox jumps over the lazy dog.
        </Text>
    </div>

    <div id="text-display2">
        <Text display="display2">
            The quick brown fox jumps over the lazy dog.
        </Text>
    </div>

    <div id="text-display3">
        <Text display="display3">
            The quick brown fox jumps over the lazy dog.
        </Text>
    </div>

    <div id="text-display4">
        <Text display="display4">
            The quick brown fox jumps over the lazy dog.
        </Text>
    </div>

    <div id="text-display5">
        <Text display="display5">
            The quick brown fox jumps over the lazy dog.
        </Text>
    </div>

    <div id="text-display6">
        <Text display="display6">
            The quick brown fox jumps over the lazy dog.
        </Text>
    </div>
</section>

<section section="textinput">
    <a id="textinput">¶</a>
    <h2>TextInput</h2>

    <h3>Default</h3>
    <div id="textinput-default">
        <TextInput
            id="username"
            label="Username <small>(required)</small>"
            hint="This username is the one people will use to address messages
            to you."
            placeholder="dapper-drake"
            bind:value
            required />
    </div>
</section>

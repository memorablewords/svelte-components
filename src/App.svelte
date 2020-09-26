<script>
    import Button from './Button/index.svelte'
    import Icon from './Icon/index.svelte'
    import Spacer from './Spacer/index.svelte'
    import Stack from './Stack/index.svelte'
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
        <a href="#stack">Stack</a>
    </li>
    <li>
        <a href="#text">Text</a>
    </li>
    <li>
        <a href="#textinput">TextInput</a>
    </li>
</ul>

<section section="button">
    <Stack vertical>
        <Text element="h2" display="display2">
            <a id="button">Button</a>
        </Text>

        <Text element="p">Depends on the following CSS variables:</Text>
        <dl>
            <dt>
                <code>--button-gap</code>
            </dt>
            <dd>
                Gap between the different components inside the button, if there
                are multiple.
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

        <Text element="h3" display="display4">Default</Text>
        <div id="button-default">
            <Button title="Example button" onclick={() => alert('Example!')}>
                <Text>Example</Text>
            </Button>
        </div>

        <Text element="h3" display="display4">With icons</Text>

        <Text element="p">
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
        </Text>

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

        <Text element="h3" display="display4">Relaxed</Text>
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
    </Stack>
</section>

<section section="icon">
    <Stack vertical>
        <Text element="h2" display="display2">
            <a id="icon">Icon</a>
        </Text>

        <Text element="p">
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
        </Text>

        <Text element="h3" display="display4">Default</Text>
        <div id="icon-default">
            <Icon type="moon" />
        </div>

        <Text element="h3" display="display4">Illustrative</Text>
        <div id="icon-illustrative">
            <Icon type="sun" illustrative={true} />
        </div>

        <Text element="h3" display="display4">Custom size</Text>
        <div id="icon-small">
            <Icon type="moon" size={24} />
        </div>
    </Stack>
</section>

<section section="spacer">
    <Stack vertical>
        <Text element="h2" display="display2">
            <a id="spacer">Spacer</a>
        </Text>

        <Text element="p">
            Allows to insert a space between other components when they are used
            in another component `slot` and styling is not otherwise possible.
            Don't over-use it!
        </Text>

        <Text element="p">Depends on the following CSS variable:</Text>
        <dl>
            <dt>
                <code>--spacer-size</code>
            </dt>
            <dd>Width and height of the spacer.</dd>
        </dl>

        <Text element="h3" display="display4">Default</Text>
        <div id="spacer-default">
            <Icon type="sun" />
            <Icon type="sun" />
            <Icon type="sun" />
            <Spacer />
            <Icon type="sun" />
        </div>
    </Stack>
</section>

<section section="stack">
    <Stack vertical>
        <Text element="h2" display="display2">
            <a id="stack">Stack</a>
        </Text>
        <Text element="p">
            Allows to insert a space between stacked components.
        </Text>

        <Text element="h3" display="display4">Default</Text>
        <div id="stack-default">
            <Stack>
                <div>
                    <Button
                        title="Example button"
                        onclick={() => alert('Example!')}
                        relaxed>
                        <Text>Stack</Text>
                        <Spacer />
                        <Icon type="heart" size={24} />
                    </Button>
                </div>
                <div>
                    <Button
                        title="Example button"
                        onclick={() => alert('Example!')}>
                        <Text>of</Text>
                    </Button>
                </div>
                <Button
                    title="Example button"
                    onclick={() => alert('Example!')}>
                    <Text>buttons</Text>
                </Button>
            </Stack>
        </div>

        <Text element="h3" display="display4">Vertical</Text>
        <div id="stack-vertical">
            <Stack vertical>
                <Text element="h2" display="display6">
                    Vertically stacked text
                </Text>
                <Text element="p">
                    Illum sit nam corporis magni. Nostrum perspiciatis ipsa
                    repellendus porro, reprehenderit ipsam eum numquam aliquid
                    consequuntur aspernatur alias voluptas dolores omnis qui.
                </Text>
                <Text element="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
            </Stack>
        </div>
    </Stack>
</section>

<section section="text">
    <Stack vertical>
        <Text element="h2" display="display2">
            <a id="text">Text</a>
        </Text>

        <Text element="p">Depends on the following CSS variable:</Text>
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

        <Text element="h3" display="display4">Default</Text>
        <div id="text-default">
            <Text>The quick brown fox jumps over the lazy dog.</Text>
        </div>

        <Text element="h3" display="display4">Dimmed</Text>
        <div id="text-dimmed">
            <Text element="p" dimmed>
                The quick brown fox jumps over the lazy dog.
            </Text>
        </div>

        <Text element="h3" display="display4">
            Custom elements
            <code>p</code>
        </Text>

        <div id="text-h1">
            <Text element="h1">Quick brown fox</Text>
        </div>

        <div id="text-h2">
            <Text element="h2">Lazy dog</Text>
        </div>

        <div id="text-h3">
            <Text element="h3">Jump over</Text>
        </div>

        <div id="text-p">
            <Text element="p">
                The quick brown fox jumps over the lazy dog.
            </Text>
        </div>

        <Text element="h3" display="display4">Typography</Text>

        <div id="text-body">
            <Text element="p" display="body">
                The quick brown fox jumps over the lazy dog.
            </Text>
        </div>

        <div id="text-caption">
            <Text element="p" display="caption">
                The quick brown fox jumps over the lazy dog.
            </Text>
        </div>

        <div id="text-display1">
            <Text element="p" display="display1">
                The quick brown fox jumps over the lazy dog.
            </Text>
        </div>

        <div id="text-display2">
            <Text element="p" display="display2">
                The quick brown fox jumps over the lazy dog.
            </Text>
        </div>

        <div id="text-display3">
            <Text element="p" display="display3">
                The quick brown fox jumps over the lazy dog.
            </Text>
        </div>

        <div id="text-display4">
            <Text element="p" display="display4">
                The quick brown fox jumps over the lazy dog.
            </Text>
        </div>

        <div id="text-display5">
            <Text element="p" display="display5">
                The quick brown fox jumps over the lazy dog.
            </Text>
        </div>

        <div id="text-display6">
            <Text element="p" display="display6">
                The quick brown fox jumps over the lazy dog.
            </Text>
        </div>
    </Stack>
</section>

<section section="textinput">
    <Stack vertical>
        <Text element="h2" display="display2">
            <a id="textinput">TextInput</a>
        </Text>

        <Text element="h3" display="display4">Default</Text>
        <div id="textinput-default">
            <TextInput
                id="username"
                label="Username <small>(required)</small>"
                hint="This username is the one people will use to address
                messages to you."
                placeholder="dapper-drake"
                bind:value
                required />
        </div>
    </Stack>
</section>

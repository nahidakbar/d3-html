# d3-html

Verbose helper functions to make d3-selection bit less verbose for general
html creation and manipulation.

Include as script tag (after d3) or use require("d3-html"). Make sure
d3-selection is in nodepath if using the latter approach.

Then rock and roll:

<pre>
// use case 1: everyday elements
d3.select("body")
  .clear()
  .Div()
    .H1("d3-html HELLO WORLD");

// use case 2: wrapper for enter and exit
d3.select("body")
  .Table()
    .Tbody()
      .Children([... data rows ...], 'tr', element => {
        element.Td().Checkbox().Checked(row => row.enabled);
        element.Th(row => row.field);
        element.Td().Select().Options({key: val, ...}, row.value);
        element.each(...);
      })
</pre>

# Full API selection.*()
# Class

# Function

## `A(contents: string): *`

selection.A() creates &lt;a&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Abbr(contents: string): *`

selection.Abbr() creates &lt;abbr&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Accept(value: string): *`

selection.Accept() get or change accept attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Accesskey(value: string): *`

selection.Accesskey() get or change accesskey attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Action(value: string): *`

selection.Action() get or change action attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Address(contents: string): *`

selection.Address() creates &lt;address&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `AlignContent(value: string): *`

selection.AlignContent() get or change align-content style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `AlignItems(value: string): *`

selection.AlignItems() get or change align-items style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `AlignSelf(value: string): *`

selection.AlignSelf() get or change align-self style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Alt(value: string): *`

selection.Alt() get or change alt attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Area(contents: string): *`

selection.Area() creates &lt;area&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Article(contents: string): *`

selection.Article() creates &lt;article&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Aside(contents: string): *`

selection.Aside() creates &lt;aside&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Audio(contents: string): *`

selection.Audio() creates &lt;audio&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Autocomplete(value: string): *`

selection.Autocomplete() get or change autocomplete attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Autofocus(value: string): *`

selection.Autofocus() get or change autofocus attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `B(contents: string): *`

selection.B() creates &lt;b&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Background(value: string): *`

selection.Background() get or change background style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BackgroundAttachment(value: string): *`

selection.BackgroundAttachment() get or change background-attachment style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BackgroundBlendMode(value: string): *`

selection.BackgroundBlendMode() get or change background-blend-mode style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BackgroundClip(value: string): *`

selection.BackgroundClip() get or change background-clip style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BackgroundColor(value: string): *`

selection.BackgroundColor() get or change background-color style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BackgroundImage(value: string): *`

selection.BackgroundImage() get or change background-image style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BackgroundOrigin(value: string): *`

selection.BackgroundOrigin() get or change background-origin style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BackgroundPosition(value: string): *`

selection.BackgroundPosition() get or change background-position style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BackgroundRepeat(value: string): *`

selection.BackgroundRepeat() get or change background-repeat style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BackgroundSize(value: string): *`

selection.BackgroundSize() get or change background-size style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Base(contents: string): *`

selection.Base() creates &lt;base&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Bdi(contents: string): *`

selection.Bdi() creates &lt;bdi&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Bdo(contents: string): *`

selection.Bdo() creates &lt;bdo&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Blockquote(contents: string): *`

selection.Blockquote() creates &lt;blockquote&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Border(value: string): *`

selection.Border() get or change border style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderBottom(value: string): *`

selection.BorderBottom() get or change border-bottom style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderBottomColor(value: string): *`

selection.BorderBottomColor() get or change border-bottom-color style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderBottomLeftRadius(value: string): *`

selection.BorderBottomLeftRadius() get or change border-bottom-left-radius style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderBottomRightRadius(value: string): *`

selection.BorderBottomRightRadius() get or change border-bottom-right-radius style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderBottomStyle(value: string): *`

selection.BorderBottomStyle() get or change border-bottom-style style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderBottomWidth(value: string): *`

selection.BorderBottomWidth() get or change border-bottom-width style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderCollapse(value: string): *`

selection.BorderCollapse() get or change border-collapse style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderColor(value: string): *`

selection.BorderColor() get or change border-color style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderImage(value: string): *`

selection.BorderImage() get or change border-image style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderImageOutset(value: string): *`

selection.BorderImageOutset() get or change border-image-outset style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderImageRepeat(value: string): *`

selection.BorderImageRepeat() get or change border-image-repeat style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderImageSlice(value: string): *`

selection.BorderImageSlice() get or change border-image-slice style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderImageSource(value: string): *`

selection.BorderImageSource() get or change border-image-source style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderImageWidth(value: string): *`

selection.BorderImageWidth() get or change border-image-width style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderLeft(value: string): *`

selection.BorderLeft() get or change border-left style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderLeftColor(value: string): *`

selection.BorderLeftColor() get or change border-left-color style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderLeftStyle(value: string): *`

selection.BorderLeftStyle() get or change border-left-style style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderLeftWidth(value: string): *`

selection.BorderLeftWidth() get or change border-left-width style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderRadius(value: string): *`

selection.BorderRadius() get or change border-radius style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderRight(value: string): *`

selection.BorderRight() get or change border-right style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderRightColor(value: string): *`

selection.BorderRightColor() get or change border-right-color style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderRightStyle(value: string): *`

selection.BorderRightStyle() get or change border-right-style style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderRightWidth(value: string): *`

selection.BorderRightWidth() get or change border-right-width style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderSpacing(value: string): *`

selection.BorderSpacing() get or change border-spacing style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderStyle(value: string): *`

selection.BorderStyle() get or change border-style style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderTop(value: string): *`

selection.BorderTop() get or change border-top style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderTopColor(value: string): *`

selection.BorderTopColor() get or change border-top-color style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderTopLeftRadius(value: string): *`

selection.BorderTopLeftRadius() get or change border-top-left-radius style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderTopRightRadius(value: string): *`

selection.BorderTopRightRadius() get or change border-top-right-radius style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderTopStyle(value: string): *`

selection.BorderTopStyle() get or change border-top-style style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderTopWidth(value: string): *`

selection.BorderTopWidth() get or change border-top-width style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BorderWidth(value: string): *`

selection.BorderWidth() get or change border-width style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Bottom(value: string): *`

selection.Bottom() get or change bottom style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BoxDecorationBreak(value: string): *`

selection.BoxDecorationBreak() get or change box-decoration-break style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BoxShadow(value: string): *`

selection.BoxShadow() get or change box-shadow style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `BoxSizing(value: string): *`

selection.BoxSizing() get or change box-sizing style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Br(contents: string): *`

selection.Br() creates &lt;br&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Button(contents: string): *`

selection.Button() creates &lt;button&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Canvas(contents: string): *`

selection.Canvas() creates &lt;canvas&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Caption(contents: string): *`

selection.Caption() creates &lt;caption&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `CaptionSide(value: string): *`

selection.CaptionSide() get or change caption-side style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Checkbox(contents: string): *`

selection.Checkbox() creates &lt;input&gt; element of type checkbox

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Checked(value: string): *`

selection.Checked() get or change checked property value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Children(arrayData: string, childElementTagName: string, updateCallback: string): *`

selection.Children() syncs children of an element to array of data elements Basically, is a wrapper for d3-selection enter and exit pattern.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| arrayData | string | optional: true, default: '' | array of data |
| childElementTagName | string | optional: true, default: '' | top level tag name |
| updateCallback | string | optional: true, default: '' | callback called to build or update child element |

## `childNodesSelector()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `Cite(contents: string): *`

selection.Cite() creates &lt;cite&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Class(value: string): *`

selection.Class() get or change class attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Clear(value: string): *`

selection.Clear() get or change clear style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Clip(value: string): *`

selection.Clip() get or change clip style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Code(contents: string): *`

selection.Code() creates &lt;code&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Col(contents: string): *`

selection.Col() creates &lt;col&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Colgroup(contents: string): *`

selection.Colgroup() creates &lt;colgroup&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Color(value: string): *`

selection.Color() get or change color style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Cols(value: string): *`

selection.Cols() get or change cols attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Colspan(value: string): *`

selection.Colspan() get or change colspan attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Content(value: string): *`

selection.Content() get or change content style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `ContentEditable(value: string): *`

selection.ContentEditable() get or change contentEditable attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Cursor(value: string): *`

selection.Cursor() get or change cursor style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Data(contents: string): *`

selection.Data() creates &lt;data&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Datalist(contents: string): *`

selection.Datalist() creates &lt;datalist&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Date(contents: string): *`

selection.Date() creates &lt;input&gt; element of type date

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `DatetimeLocal(contents: string): *`

selection.DatetimeLocal() creates &lt;input&gt; element of type datetime-local

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Dd(contents: string): *`

selection.Dd() creates &lt;dd&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Del(contents: string): *`

selection.Del() creates &lt;del&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Details(contents: string): *`

selection.Details() creates &lt;details&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Dfn(contents: string): *`

selection.Dfn() creates &lt;dfn&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Disabled(value: string): *`

selection.Disabled() get or change disabled attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Display(value: string): *`

selection.Display() get or change display style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Div(contents: string): *`

selection.Div() creates &lt;div&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Dl(contents: string): *`

selection.Dl() creates &lt;dl&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Download(value: string): *`

selection.Download() get or change download attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Draggable(value: string): *`

selection.Draggable() get or change draggable attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Dropzone(value: string): *`

selection.Dropzone() get or change dropzone attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Dt(contents: string): *`

selection.Dt() creates &lt;dt&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Element(contents: string): *`

selection.Element() creates &lt;element&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Em(contents: string): *`

selection.Em() creates &lt;em&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Email(contents: string): *`

selection.Email() creates &lt;input&gt; element of type email

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Embed(contents: string): *`

selection.Embed() creates &lt;embed&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `EmptyCells(value: string): *`

selection.EmptyCells() get or change empty-cells style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Enctype(value: string): *`

selection.Enctype() get or change enctype attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Fieldset(contents: string): *`

selection.Fieldset() creates &lt;fieldset&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Figcaption(contents: string): *`

selection.Figcaption() creates &lt;figcaption&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Figure(contents: string): *`

selection.Figure() creates &lt;figure&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `File(contents: string): *`

selection.File() creates &lt;input&gt; element of type file

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Flex(value: string): *`

selection.Flex() get or change flex style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FlexBasis(value: string): *`

selection.FlexBasis() get or change flex-basis style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FlexDirection(value: string): *`

selection.FlexDirection() get or change flex-direction style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FlexFlow(value: string): *`

selection.FlexFlow() get or change flex-flow style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FlexGrow(value: string): *`

selection.FlexGrow() get or change flex-grow style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FlexShrink(value: string): *`

selection.FlexShrink() get or change flex-shrink style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FlexWrap(value: string): *`

selection.FlexWrap() get or change flex-wrap style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Float(value: string): *`

selection.Float() get or change float style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Font(value: string): *`

selection.Font() get or change font style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FontFamily(value: string): *`

selection.FontFamily() get or change font-family style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FontFeatureSettings(value: string): *`

selection.FontFeatureSettings() get or change font-feature-settings style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FontKerning(value: string): *`

selection.FontKerning() get or change font-kerning style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FontLanguageOverride(value: string): *`

selection.FontLanguageOverride() get or change font-language-override style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FontSize(value: string): *`

selection.FontSize() get or change font-size style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FontSizeAdjust(value: string): *`

selection.FontSizeAdjust() get or change font-size-adjust style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FontStretch(value: string): *`

selection.FontStretch() get or change font-stretch style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FontStyle(value: string): *`

selection.FontStyle() get or change font-style style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FontSynthesis(value: string): *`

selection.FontSynthesis() get or change font-synthesis style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FontVariant(value: string): *`

selection.FontVariant() get or change font-variant style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FontVariantAlternates(value: string): *`

selection.FontVariantAlternates() get or change font-variant-alternates style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FontVariantCaps(value: string): *`

selection.FontVariantCaps() get or change font-variant-caps style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FontVariantEastAsian(value: string): *`

selection.FontVariantEastAsian() get or change font-variant-east-asian style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FontVariantLigatures(value: string): *`

selection.FontVariantLigatures() get or change font-variant-ligatures style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FontVariantNumeric(value: string): *`

selection.FontVariantNumeric() get or change font-variant-numeric style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FontVariantPosition(value: string): *`

selection.FontVariantPosition() get or change font-variant-position style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `FontWeight(value: string): *`

selection.FontWeight() get or change font-weight style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Footer(contents: string): *`

selection.Footer() creates &lt;footer&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `For(value: string): *`

selection.For() get or change for attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Form(contents: string): *`

selection.Form() creates &lt;form&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Formaction(value: string): *`

selection.Formaction() get or change formaction attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `H1(contents: string): *`

selection.H1() creates &lt;h1&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `H2(contents: string): *`

selection.H2() creates &lt;h2&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `H3(contents: string): *`

selection.H3() creates &lt;h3&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `H4(contents: string): *`

selection.H4() creates &lt;h4&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `H5(contents: string): *`

selection.H5() creates &lt;h5&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `H6(contents: string): *`

selection.H6() creates &lt;h6&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `HangingPunctuation(value: string): *`

selection.HangingPunctuation() get or change hanging-punctuation style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `HashStateRouter(context: object, dontRun: boolean): *`

d3.HashStateRouter() Simple router that relies on window hash value. TODO: Document in more detail

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| context | object | optional: true, default: {} | configuration |
| dontRun | boolean | optional: true, default: false | dont start |

## `Header(contents: string): *`

selection.Header() creates &lt;header&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Height(value: string): *`

selection.Height() get or change height style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Hidden(contents: string): *`

selection.Hidden() creates &lt;input&gt; element of type hidden

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Hr(contents: string): *`

selection.Hr() creates &lt;hr&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Href(value: string): *`

selection.Href() get or change href attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Hyphens(value: string): *`

selection.Hyphens() get or change hyphens style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `I(contents: string): *`

selection.I() creates &lt;i&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Id(value: string): *`

selection.Id() get or change id attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Iframe(contents: string): *`

selection.Iframe() creates &lt;iframe&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Image(contents: string): *`

selection.Image() creates &lt;input&gt; element of type image

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `ImeMode(value: string): *`

selection.ImeMode() get or change ime-mode style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Img(contents: string): *`

selection.Img() creates &lt;img&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Input(contents: string): *`

selection.Input() creates &lt;input&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputCheckbox(contents: string): *`

selection.InputCheckbox() creates &lt;input&gt; element of type checkbox

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputColor(contents: string): *`

selection.InputColor() creates &lt;input&gt; element of type color

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputDate(contents: string): *`

selection.InputDate() creates &lt;input&gt; element of type date

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputDatetimeLocal(contents: string): *`

selection.InputDatetimeLocal() creates &lt;input&gt; element of type datetime-local

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputEmail(contents: string): *`

selection.InputEmail() creates &lt;input&gt; element of type email

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputFile(contents: string): *`

selection.InputFile() creates &lt;input&gt; element of type file

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputHidden(contents: string): *`

selection.InputHidden() creates &lt;input&gt; element of type hidden

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputImage(contents: string): *`

selection.InputImage() creates &lt;input&gt; element of type image

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputMonth(contents: string): *`

selection.InputMonth() creates &lt;input&gt; element of type month

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputNumber(contents: string): *`

selection.InputNumber() creates &lt;input&gt; element of type number

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputPassword(contents: string): *`

selection.InputPassword() creates &lt;input&gt; element of type password

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputRadio(contents: string): *`

selection.InputRadio() creates &lt;input&gt; element of type radio

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputRange(contents: string): *`

selection.InputRange() creates &lt;input&gt; element of type range

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputReset(contents: string): *`

selection.InputReset() creates &lt;input&gt; element of type reset

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputSearch(contents: string): *`

selection.InputSearch() creates &lt;input&gt; element of type search

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputSubmit(contents: string): *`

selection.InputSubmit() creates &lt;input&gt; element of type submit

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputTel(contents: string): *`

selection.InputTel() creates &lt;input&gt; element of type tel

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputText(contents: string): *`

selection.InputText() creates &lt;input&gt; element of type text

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputTime(contents: string): *`

selection.InputTime() creates &lt;input&gt; element of type time

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputUrl(contents: string): *`

selection.InputUrl() creates &lt;input&gt; element of type url

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `InputWeek(contents: string): *`

selection.InputWeek() creates &lt;input&gt; element of type week

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Ins(contents: string): *`

selection.Ins() creates &lt;ins&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `JustifyContent(value: string): *`

selection.JustifyContent() get or change justify-content style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Kbd(contents: string): *`

selection.Kbd() creates &lt;kbd&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Label(contents: string): *`

selection.Label() creates &lt;label&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Left(value: string): *`

selection.Left() get or change left style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Legend(contents: string): *`

selection.Legend() creates &lt;legend&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `LetterSpacing(value: string): *`

selection.LetterSpacing() get or change letter-spacing style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Li(contents: string): *`

selection.Li() creates &lt;li&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `LineBreak(value: string): *`

selection.LineBreak() get or change line-break style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `LineHeight(value: string): *`

selection.LineHeight() get or change line-height style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Link(contents: string): *`

selection.Link() creates &lt;link&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Main(contents: string): *`

selection.Main() creates &lt;main&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Map(contents: string): *`

selection.Map() creates &lt;map&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Margin(value: string): *`

selection.Margin() get or change margin style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `MarginBottom(value: string): *`

selection.MarginBottom() get or change margin-bottom style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `MarginLeft(value: string): *`

selection.MarginLeft() get or change margin-left style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `MarginRight(value: string): *`

selection.MarginRight() get or change margin-right style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `MarginTop(value: string): *`

selection.MarginTop() get or change margin-top style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Mark(contents: string): *`

selection.Mark() creates &lt;mark&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `MaxHeight(value: string): *`

selection.MaxHeight() get or change max-height style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `MaxWidth(value: string): *`

selection.MaxWidth() get or change max-width style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Media(value: string): *`

selection.Media() get or change media attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Meta(contents: string): *`

selection.Meta() creates &lt;meta&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Meter(contents: string): *`

selection.Meter() creates &lt;meter&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Method(value: string): *`

selection.Method() get or change method attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `MinHeight(value: string): *`

selection.MinHeight() get or change min-height style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `MinWidth(value: string): *`

selection.MinWidth() get or change min-width style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Month(contents: string): *`

selection.Month() creates &lt;input&gt; element of type month

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Name(value: string): *`

selection.Name() get or change name attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Nav(contents: string): *`

selection.Nav() creates &lt;nav&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `NavDown(value: string): *`

selection.NavDown() get or change nav-down style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `NavIndex(value: string): *`

selection.NavIndex() get or change nav-index style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `NavLeft(value: string): *`

selection.NavLeft() get or change nav-left style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `NavRight(value: string): *`

selection.NavRight() get or change nav-right style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `NavUp(value: string): *`

selection.NavUp() get or change nav-up style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Noframes(contents: string): *`

selection.Noframes() creates &lt;noframes&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Noscript(contents: string): *`

selection.Noscript() creates &lt;noscript&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Number(contents: string): *`

selection.Number() creates &lt;input&gt; element of type number

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Object(contents: string): *`

selection.Object() creates &lt;object&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Ol(contents: string): *`

selection.Ol() creates &lt;ol&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `OnAbort(callback: string, capture: boolean): *`

selection.OnAbort() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnAfterprint(callback: string, capture: boolean): *`

selection.OnAfterprint() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnBeforeprint(callback: string, capture: boolean): *`

selection.OnBeforeprint() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnBeforeunload(callback: string, capture: boolean): *`

selection.OnBeforeunload() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnBlur(callback: string, capture: boolean): *`

selection.OnBlur() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnCanplay(callback: string, capture: boolean): *`

selection.OnCanplay() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnCanplaythrough(callback: string, capture: boolean): *`

selection.OnCanplaythrough() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnChange(callback: string, capture: boolean): *`

selection.OnChange() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnClick(callback: string, capture: boolean): *`

selection.OnClick() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnContextmenu(callback: string, capture: boolean): *`

selection.OnContextmenu() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnCopy(callback: string, capture: boolean): *`

selection.OnCopy() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnCuechange(callback: string, capture: boolean): *`

selection.OnCuechange() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnCut(callback: string, capture: boolean): *`

selection.OnCut() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnDblclick(callback: string, capture: boolean): *`

selection.OnDblclick() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnDrag(callback: string, capture: boolean): *`

selection.OnDrag() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnDragend(callback: string, capture: boolean): *`

selection.OnDragend() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnDragenter(callback: string, capture: boolean): *`

selection.OnDragenter() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnDragleave(callback: string, capture: boolean): *`

selection.OnDragleave() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnDragover(callback: string, capture: boolean): *`

selection.OnDragover() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnDragstart(callback: string, capture: boolean): *`

selection.OnDragstart() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnDrop(callback: string, capture: boolean): *`

selection.OnDrop() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnDurationchange(callback: string, capture: boolean): *`

selection.OnDurationchange() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnEmptied(callback: string, capture: boolean): *`

selection.OnEmptied() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnEnded(callback: string, capture: boolean): *`

selection.OnEnded() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnError(callback: string, capture: boolean): *`

selection.OnError() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnFocus(callback: string, capture: boolean): *`

selection.OnFocus() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnHashchange(callback: string, capture: boolean): *`

selection.OnHashchange() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnInput(callback: string, capture: boolean): *`

selection.OnInput() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnInvalid(callback: string, capture: boolean): *`

selection.OnInvalid() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnKeydown(callback: string, capture: boolean): *`

selection.OnKeydown() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnKeypress(callback: string, capture: boolean): *`

selection.OnKeypress() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnKeyup(callback: string, capture: boolean): *`

selection.OnKeyup() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnLoad(callback: string, capture: boolean): *`

selection.OnLoad() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnLoadeddata(callback: string, capture: boolean): *`

selection.OnLoadeddata() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnLoadedmetadata(callback: string, capture: boolean): *`

selection.OnLoadedmetadata() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnLoadstart(callback: string, capture: boolean): *`

selection.OnLoadstart() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnMessage(callback: string, capture: boolean): *`

selection.OnMessage() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnMousedown(callback: string, capture: boolean): *`

selection.OnMousedown() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnMousemove(callback: string, capture: boolean): *`

selection.OnMousemove() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnMouseout(callback: string, capture: boolean): *`

selection.OnMouseout() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnMouseover(callback: string, capture: boolean): *`

selection.OnMouseover() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnMouseup(callback: string, capture: boolean): *`

selection.OnMouseup() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnMousewheel(callback: string, capture: boolean): *`

selection.OnMousewheel() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnOffline(callback: string, capture: boolean): *`

selection.OnOffline() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnOnline(callback: string, capture: boolean): *`

selection.OnOnline() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnPagehide(callback: string, capture: boolean): *`

selection.OnPagehide() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnPageshow(callback: string, capture: boolean): *`

selection.OnPageshow() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnPaste(callback: string, capture: boolean): *`

selection.OnPaste() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnPause(callback: string, capture: boolean): *`

selection.OnPause() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnPlay(callback: string, capture: boolean): *`

selection.OnPlay() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnPlaying(callback: string, capture: boolean): *`

selection.OnPlaying() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnPopstate(callback: string, capture: boolean): *`

selection.OnPopstate() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnProgress(callback: string, capture: boolean): *`

selection.OnProgress() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnRatechange(callback: string, capture: boolean): *`

selection.OnRatechange() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnReset(callback: string, capture: boolean): *`

selection.OnReset() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnResize(callback: string, capture: boolean): *`

selection.OnResize() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnScroll(callback: string, capture: boolean): *`

selection.OnScroll() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnSearch(callback: string, capture: boolean): *`

selection.OnSearch() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnSeeked(callback: string, capture: boolean): *`

selection.OnSeeked() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnSeeking(callback: string, capture: boolean): *`

selection.OnSeeking() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnSelect(callback: string, capture: boolean): *`

selection.OnSelect() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnShow(callback: string, capture: boolean): *`

selection.OnShow() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnStalled(callback: string, capture: boolean): *`

selection.OnStalled() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnStorage(callback: string, capture: boolean): *`

selection.OnStorage() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnSubmit(callback: string, capture: boolean): *`

selection.OnSubmit() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnSuspend(callback: string, capture: boolean): *`

selection.OnSuspend() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnTimeupdate(callback: string, capture: boolean): *`

selection.OnTimeupdate() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnToggle(callback: string, capture: boolean): *`

selection.OnToggle() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnUnload(callback: string, capture: boolean): *`

selection.OnUnload() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnVolumechange(callback: string, capture: boolean): *`

selection.OnVolumechange() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnWaiting(callback: string, capture: boolean): *`

selection.OnWaiting() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `OnWheel(callback: string, capture: boolean): *`

selection.OnWheel() attaches or returns a listner to selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | string | optional: true | callback function |
| capture | boolean | optional: true | capture option |

## `Optgroup(contents: string): *`

selection.Optgroup() creates &lt;optgroup&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Option(contents: string): *`

selection.Option() creates &lt;option&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Options(options: string, selected: string): *`

selection.Options() creates a list of child &lt;option&gt; elements

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| options | string | optional: true, default: '' | array of strngs or key value object containing labels |
| selected | string | optional: true, default: '' | selected element |

## `id()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `Order(value: string): *`

selection.Order() get or change order style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Outline(value: string): *`

selection.Outline() get or change outline style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `OutlineColor(value: string): *`

selection.OutlineColor() get or change outline-color style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `OutlineOffset(value: string): *`

selection.OutlineOffset() get or change outline-offset style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `OutlineStyle(value: string): *`

selection.OutlineStyle() get or change outline-style style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `OutlineWidth(value: string): *`

selection.OutlineWidth() get or change outline-width style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Output(contents: string): *`

selection.Output() creates &lt;output&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Overflow(value: string): *`

selection.Overflow() get or change overflow style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `OverflowWrap(value: string): *`

selection.OverflowWrap() get or change overflow-wrap style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `OverflowX(value: string): *`

selection.OverflowX() get or change overflow-x style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `OverflowY(value: string): *`

selection.OverflowY() get or change overflow-y style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `P(contents: string): *`

selection.P() creates &lt;p&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Padding(value: string): *`

selection.Padding() get or change padding style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `PaddingBottom(value: string): *`

selection.PaddingBottom() get or change padding-bottom style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `PaddingLeft(value: string): *`

selection.PaddingLeft() get or change padding-left style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `PaddingRight(value: string): *`

selection.PaddingRight() get or change padding-right style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `PaddingTop(value: string): *`

selection.PaddingTop() get or change padding-top style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Param(contents: string): *`

selection.Param() creates &lt;param&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `ParentNode(value: string): *`

selection.ParentNode() get or change parentNode property value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Password(contents: string): *`

selection.Password() creates &lt;input&gt; element of type password

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Pattern(value: string): *`

selection.Pattern() get or change pattern attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Placeholder(value: string): *`

selection.Placeholder() get or change placeholder attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Position(value: string): *`

selection.Position() get or change position style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Pre(contents: string): *`

selection.Pre() creates &lt;pre&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Progress(contents: string): *`

selection.Progress() creates &lt;progress&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Q(contents: string): *`

selection.Q() creates &lt;q&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Radio(contents: string): *`

selection.Radio() creates &lt;input&gt; element of type radio

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Range(contents: string): *`

selection.Range() creates &lt;input&gt; element of type range

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Reset(contents: string): *`

selection.Reset() creates &lt;input&gt; element of type reset

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Resize(value: string): *`

selection.Resize() get or change resize style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Right(value: string): *`

selection.Right() get or change right style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Rowspan(value: string): *`

selection.Rowspan() get or change rowspan attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Rp(contents: string): *`

selection.Rp() creates &lt;rp&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Rt(contents: string): *`

selection.Rt() creates &lt;rt&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Rtc(contents: string): *`

selection.Rtc() creates &lt;rtc&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Ruby(contents: string): *`

selection.Ruby() creates &lt;ruby&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `S(contents: string): *`

selection.S() creates &lt;s&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Samp(contents: string): *`

selection.Samp() creates &lt;samp&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Script(contents: string): *`

selection.Script() creates &lt;script&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Search(contents: string): *`

selection.Search() creates &lt;input&gt; element of type search

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Section(contents: string): *`

selection.Section() creates &lt;section&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Select(contents: string): *`

selection.Select() creates &lt;select&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Selected(value: string): *`

selection.Selected() get or change selected attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Shadow(contents: string): *`

selection.Shadow() creates &lt;shadow&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Small(contents: string): *`

selection.Small() creates &lt;small&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Source(contents: string): *`

selection.Source() creates &lt;source&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Span(contents: string): *`

selection.Span() creates &lt;span&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Src(value: string): *`

selection.Src() get or change src attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Strong(contents: string): *`

selection.Strong() creates &lt;strong&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Sub(contents: string): *`

selection.Sub() creates &lt;sub&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Submit(contents: string): *`

selection.Submit() creates &lt;input&gt; element of type submit

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Summary(contents: string): *`

selection.Summary() creates &lt;summary&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Sup(contents: string): *`

selection.Sup() creates &lt;sup&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Svg(contents: string): *`

selection.Svg() creates &lt;svg&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `TabSize(value: string): *`

selection.TabSize() get or change tab-size style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Tabindex(value: string): *`

selection.Tabindex() get or change tabindex attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Table(contents: string): *`

selection.Table() creates &lt;table&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `TableLayout(value: string): *`

selection.TableLayout() get or change table-layout style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Target(value: string): *`

selection.Target() get or change target attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Tbody(contents: string): *`

selection.Tbody() creates &lt;tbody&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Td(contents: string): *`

selection.Td() creates &lt;td&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Tel(contents: string): *`

selection.Tel() creates &lt;input&gt; element of type tel

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Template(contents: string): *`

selection.Template() creates &lt;template&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Text(contents: string): *`

selection.Text() creates &lt;input&gt; element of type text

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `TextAlign(value: string): *`

selection.TextAlign() get or change text-align style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `TextAlignLast(value: string): *`

selection.TextAlignLast() get or change text-align-last style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `TextCombineUpright(value: string): *`

selection.TextCombineUpright() get or change text-combine-upright style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `TextDecoration(value: string): *`

selection.TextDecoration() get or change text-decoration style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `TextDecorationColor(value: string): *`

selection.TextDecorationColor() get or change text-decoration-color style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `TextDecorationLine(value: string): *`

selection.TextDecorationLine() get or change text-decoration-line style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `TextDecorationStyle(value: string): *`

selection.TextDecorationStyle() get or change text-decoration-style style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `TextIndent(value: string): *`

selection.TextIndent() get or change text-indent style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `TextJustify(value: string): *`

selection.TextJustify() get or change text-justify style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `TextOverflow(value: string): *`

selection.TextOverflow() get or change text-overflow style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `TextShadow(value: string): *`

selection.TextShadow() get or change text-shadow style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `TextTransform(value: string): *`

selection.TextTransform() get or change text-transform style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `TextUnderlinePosition(value: string): *`

selection.TextUnderlinePosition() get or change text-underline-position style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Textarea(contents: string): *`

selection.Textarea() creates &lt;textarea&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Tfoot(contents: string): *`

selection.Tfoot() creates &lt;tfoot&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Th(contents: string): *`

selection.Th() creates &lt;th&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Thead(contents: string): *`

selection.Thead() creates &lt;thead&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Time(contents: string): *`

selection.Time() creates &lt;input&gt; element of type time

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Title(value: string): *`

selection.Title() get or change title attribute value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Top(value: string): *`

selection.Top() get or change top style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Tr(contents: string): *`

selection.Tr() creates &lt;tr&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Track(contents: string): *`

selection.Track() creates &lt;track&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `U(contents: string): *`

selection.U() creates &lt;u&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Ul(contents: string): *`

selection.Ul() creates &lt;ul&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Url(contents: string): *`

selection.Url() creates &lt;input&gt; element of type url

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `UserSelect(value: string): *`

selection.UserSelect() get or change user-select style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Validity(value: string): *`

selection.Validity() get or change validity property value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Value(value: string): *`

selection.Value() get or change value property value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Var(contents: string): *`

selection.Var() creates &lt;var&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `VerticalAlign(value: string): *`

selection.VerticalAlign() get or change vertical-align style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Video(contents: string): *`

selection.Video() creates &lt;video&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Visibility(value: string): *`

selection.Visibility() get or change visibility style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Wbr(contents: string): *`

selection.Wbr() creates &lt;wbr&gt; element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `Week(contents: string): *`

selection.Week() creates &lt;input&gt; element of type week

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contents | string | optional: true, default: '' | option content html |

## `WhiteSpace(value: string): *`

selection.WhiteSpace() get or change white-space style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `Width(value: string): *`

selection.Width() get or change width style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `WordBreak(value: string): *`

selection.WordBreak() get or change word-break style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `WordSpacing(value: string): *`

selection.WordSpacing() get or change word-spacing style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `WordWrap(value: string): *`

selection.WordWrap() get or change word-wrap style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `ZIndex(value: string): *`

selection.ZIndex() get or change z-index style value of selection

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | string | optional: true, default: '' | new value or dont specify to return current value |

## `clear()`

selection.clear() clears selection content

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
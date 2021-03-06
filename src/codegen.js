const fs = require('fs');

fs.writeFileSync('lib/selection/clear.js', `/**
 * selection.clear() clears selection content
 */
export default function ()
{
  return this.text('');
}
`);

function ToD3HtmlName(name) {
  return name.split('-').map(function(fragment)
  {
    return fragment.substr(0, 1).toUpperCase() + fragment.substr(1);
  }).join('');
}

const TAGS = [
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'blockquote',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'div',
  'dl',
  'dt',
  'element',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hr',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'meta',
  'meter',
  'nav',
  'noframes',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'rtc',
  'ruby',
  's',
  'samp',
  'script',
  'select',
  'section',
  'shadow',
  'small',
  'source',
  'span',
  'strong',
  'sub',
  'summary',
  'sup',
  'svg',
  'table',
  'tbody',
  'td',
  'template',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr'
];

for (const tag of TAGS)
{
  const name = ToD3HtmlName(tag);
  fs.writeFileSync(`lib/selection/${name}.js`,
`/**
 * selection.${name}() creates &lt;${tag}&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('${tag}')
    .html(contents || '');
}
`);
}

// input https://www.w3schools.com/tags/att_input_type.asp
const INPUT_TYPE = [
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'time',
  'text',
  'url',
  'week'
]

for (const tag of INPUT_TYPE)
{
  for (const name of [ToD3HtmlName(tag), ToD3HtmlName("input-" + tag)])
  {
    fs.writeFileSync(`lib/selection/${name}.js`,
`/**
 * selection.${name}() creates &lt;input&gt; element of type ${tag}
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', '${tag}')
    .html(contents || '');
}
`);
  }
}


const EVENTS = [
  'afterprint',
  'beforeprint',
  'beforeunload',
  'error',
  'hashchange',
  'load',
  'message',
  'offline',
  'online',
  'pagehide',
  'pageshow',
  'popstate',
  'resize',
  'storage',
  'unload',
  'blur',
  'change',
  'contextmenu',
  'focus',
  'input',
  'invalid',
  'reset',
  'search',
  'select',
  'submit',
  'keydown',
  'keypress',
  'keyup',
  'click',
  'dblclick',
  'mousedown',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'mousewheel',
  'wheel',
  'drag',
  'dragend',
  'dragenter',
  'dragleave',
  'dragover',
  'dragstart',
  'drop',
  'scroll',
  'copy',
  'cut',
  'paste',
  'abort',
  'canplay',
  'canplaythrough',
  'cuechange',
  'durationchange',
  'emptied',
  'ended',
  'error',
  'loadeddata',
  'loadedmetadata',
  'loadstart',
  'pause',
  'play',
  'playing',
  'progress',
  'ratechange',
  'seeked',
  'seeking',
  'stalled',
  'suspend',
  'timeupdate',
  'volumechange',
  'waiting',
  'show',
  'toggle'
]

// events https://www.w3schools.com/tags/ref_eventattributes.asp
for (const tag of EVENTS)
{
  for (const name of [ToD3HtmlName("on-" + tag)])
  {
    fs.writeFileSync(`lib/selection/${name}.js`,
`/**
 * selection.${name}() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
export default function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('${tag}');
  }
  else if (arguments.length < 2)
  {
    return this.on('${tag}', callback);
  }
  else
  {
    return this.on('${tag}', callback, capture);
  }
}
`);
  }
}



// common attributes https://www.w3schools.com/tags/ref_attributes.asp
const ATTRIBUTES = [
  'accept',
  'accesskey',
  'action',
  'alt',
  'autocomplete',
  'autofocus',
  'class',
  'cols',
  'colspan',
  'contentEditable',
  'disabled',
  'download',
  'draggable',
  'dropzone',
  'enctype',
  'for',
  'formaction',
  'href',
  'id',
  'media',
  'method',
  'name',
  'pattern',
  'placeholder',
  'rowspan',
  'src',
  'selected',
  'tabindex',
  'target',
  'title',
]

for (const tag of ATTRIBUTES)
{
  for (const name of [ToD3HtmlName(tag)])
  {
    fs.writeFileSync(`lib/selection/${name}.js`,
`/**
 * selection.${name}() get or change ${tag} attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('${tag}');
  }
  else
  {
    return this.attr('${tag}', value);
  }
}
`);
  }
}

const PROPERTIES = [
  'checked',
  'parentNode',
  'validity',
  'value',
];

for (const tag of PROPERTIES)
{
  for (const name of [ToD3HtmlName(tag)])
  {
    fs.writeFileSync(`lib/selection/${name}.js`, `/**
 * selection.${name}() get or change ${tag} property value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.property('${tag}');
  }
  else
  {
    return this.property('${tag}', value);
  }
}
`);
  }
}

// style https://www.w3schools.com/cssref/
const STYLES = [
  'background',
  'background-attachment',
  'background-blend-mode',
  'background-color',
  'background-image',
  'background-position',
  'background-repeat',
  'background-clip',
  'background-origin',
  'background-size',
  'border',
  'border-bottom',
  'border-bottom-color',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'border-bottom-style',
  'border-bottom-width',
  'border-color',
  'border-image',
  'border-image-outset',
  'border-image-repeat',
  'border-image-slice',
  'border-image-source',
  'border-image-width',
  'border-left',
  'border-left-color',
  'border-left-style',
  'border-left-width',
  'border-radius',
  'border-right',
  'border-right-color',
  'border-right-style',
  'border-right-width',
  'border-style',
  'border-top',
  'border-top-color',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-top-style',
  'border-top-width',
  'border-width',
  'box-decoration-break',
  'box-shadow',
  'bottom',
  'clear',
  'clip',
  'color',
  'display',
  'float',
  'height',
  'left',
  'margin',
  'margin-bottom',
  'margin-left',
  'margin-right',
  'margin-top',
  'max-height',
  'max-width',
  'min-height',
  'min-width',
  'overflow',
  'overflow-x',
  'overflow-y',
  'padding',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'padding-top',
  'position',
  'right',
  'top',
  'visibility',
  'width',
  'vertical-align',
  'z-index',
  'align-content',
  'align-items',
  'align-self',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'justify-content',
  'order',
  'hanging-punctuation',
  'hyphens',
  'letter-spacing',
  'line-break',
  'line-height',
  'overflow-wrap',
  'tab-size',
  'text-align',
  'text-align-last',
  'text-combine-upright',
  'text-indent',
  'text-justify',
  'text-transform',
  'white-space',
  'word-break',
  'word-spacing',
  'word-wrap',
  'text-decoration',
  'text-decoration-color',
  'text-decoration-line',
  'text-decoration-style',
  'text-shadow',
  'text-underline-position',
  'font',
  'font-family',
  'font-feature-settings',
  'font-kerning',
  'font-language-override',
  'font-size',
  'font-size-adjust',
  'font-stretch',
  'font-style',
  'font-synthesis',
  'font-variant',
  'font-variant-alternates',
  'font-variant-caps',
  'font-variant-east-asian',
  'font-variant-ligatures',
  'font-variant-numeric',
  'font-variant-position',
  'font-weight',
  'user-select',
  'border-collapse',
  'border-spacing',
  'caption-side',
  'empty-cells',
  'table-layout',
  'box-sizing',
  'content',
  'cursor',
  'ime-mode',
  'nav-down',
  'nav-index',
  'nav-left',
  'nav-right',
  'nav-up',
  'outline',
  'outline-color',
  'outline-offset',
  'outline-style',
  'outline-width',
  'resize',
  'text-overflow'
];

for (const tag of STYLES)
{
  for (const name of [ToD3HtmlName(tag)])
  {
    fs.writeFileSync(`lib/selection/${name}.js`,
`/**
 * selection.${name}() get or change ${tag} style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('${tag}');
  }
  else
  {
    return this.style('${tag}', value);
  }
}
`);
  }
}

fs.writeFileSync(`lib/selection/Children.js`,
`/**
 * selection.Children() syncs children of an element to array of data elements
 *
 * Basically, is a wrapper for d3-selection enter and exit pattern.
 *
 * @param {string} [arrayData=''] array of data
 * @param {string} [childElementTagName=''] top level tag name
 * @param {string} [updateCallback=''] callback called to build or update child element
 * @return selected
 */
export default function (arrayData, childElementTagName, updateCallback)
{
  var parent = this;
  // remove stray elements
  parent.selectAll(childNodesSelector)
    .filter(function ()
    {
      return this.tagName !== childElementTagName;
    })
    .remove();
  // synchronise intended elements
  var rows = parent.selectAll(childNodesSelector)
    .data(arrayData);
  rows.exit()
    .remove(); // Note: not transitioning here as the effect is a bit weird.
  updateCallback(rows.enter()
    .append(childElementTagName), true);
  updateCallback(rows, false);
  return this;
}

function childNodesSelector ()
{
  return this.childNodes;
}
`);

fs.writeFileSync(`lib/selection/Options.js`,
`/**
 * selection.Options() creates a list of child &lt;option&gt; elements
 * @param {string} [options=''] array of strngs or key value object containing labels
 * @param {string} [selected=''] selected element
 * @return selected
 */
export default function (options, selected)
{
  if (Array.isArray(options))
  {
    return this.Children(options, 'option', function (elem)
    {
      elem.html(id)
        .attr('selected', function (i)
        {
          return (i === selected ? 'selected' : null);
        });
    });
  }
  else
  {
    return this.Children(Object.keys(options), 'option', function (elem)
    {
      elem.html(function (i)
        {
          return options[i]
        })
        .attr('value', id)
        .attr('selected', function (i)
        {
          return ((i === selected || options[i] === selected) ? 'selected' : null);
        });
    });
  }
}

function id (i)
{
  return i;
}
`);

fs.writeFileSync(`lib/selection/HashStateRouter.js`,
`/**
 * d3.HashStateRouter() Simple router that relies on window hash value.
 *
 * TODO: Document in more detail
 *
 * @param {object} [context={}] configuration
 * @param {boolean} [dontRun=false] dont start
 * @return updated context with additional methods
 */
export default function (context, dontRun)
{
  context.State = function (param, value)
  {
    if (arguments.length > 1)
    {
      if (!value)
      {
        delete context.params[param];
      }
      else
      {
        context.params[param] = value;
      }
      history.pushState({}, document.title, context.Link(context.params));
    }
    return context.params[param] || '';
  };

  context.StateChangeLink = function (param, value)
  {
    var params = {};
    for (var field in context.params)
    {
      params[field] = context.params[field];
    }
    if (typeof param !== 'string')
    {
      for (var field in param)
      {
        params[field] = param[field];
      }
    }
    else
    {
      params[param] = value;
    }
    return context.Link(params)
  };

  context.Link = function (params)
  {
    var output = '#';
    for (var param in params)
    {
      if (param && params[param] !== undefined && params[param] !== '')
      {
        output += param + '=' + params[param] + '&';
      }
    }
    output = output.replace(/[?&]$/, '');
    return output;
  };

  context.HashParams = function (input)
  {
    var params = {
      page: ''
    };
    input.substr(1)
      .split('&')
      .map(function (x)
      {
        return x.split('=', 2);
      })
      .forEach(function (fragment)
      {
        params[fragment[0]] = fragment[1] || true;
      });
    return params;
  };

  context.SearchParams = function (input)
  {
    var params = {
      page: ''
    };
    input.substr(1)
      .split('&')
      .map(function (x)
      {
        return x.split('=', 2);
      })
      .forEach(function (fragment)
      {
        params[fragment[0]] = fragment[1] || true;
      });
    return params;
  };

  context.Reload = function ()
  {
    if (window.location.search)
    {
      window.location.hash = context.Link(context.SearchParams(window.location.search));
      window.location.search = '';
      return;
    }
    else
    {
      context.params = context.HashParams(window.location.hash);
    }
    (context.pages[context.params.page || ''] || context.pages['404'])(context);
  };

  context.params = context.params || {};
  if (!dontRun)
  {
    window.onhashchange = function ()
    {
      context.Reload();
    };

    context.Reload();
  }
  return context;
}
`);

let output = `var d3 = window && window.d3 || require("d3-selection");
var selection = d3.selection;
`;

for (const mod of fs.readdirSync('lib/selection'))
{
  const file = mod.substr(0, mod.indexOf('.'));
  if (file.match(/(HashStateRouter)/))
  {
    output += `import {default as ${file}} from "./selection/${file}";
    d3.${file} = ${file};
`
  }
  else
  {
    output += `import {default as ${file}} from "./selection/${file}";
    selection.prototype.${file} = ${file};
`;
  }
}

fs.writeFileSync('lib/index.js', output);

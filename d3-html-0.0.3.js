"use strict";

var d3 = window.d3 || require("d3-selection");
var selection = d3.selection;

// common operations

selection.prototype.clear = function()
{
  return this.text('');
};

function childNodesSelector()
{
  return this.childNodes;
}

function id(i) {
  return i;
}

function ToD3HtmlName(name) {
  return name.toLowerCase().split('-').map(function(fragment)
  {
    return fragment.substr(0, 1).toUpperCase() + fragment.substr(1);
  }).join('');
}

// common elements https://www.w3schools.com/TAgs/
[
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
].forEach(function (type)
{
  selection.prototype[ToD3HtmlName(type)] = function (contents)
  {
    return this.append(type)
      .html(contents || '');
  };
});

// input https://www.w3schools.com/tags/att_input_type.asp
[
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
].forEach(function (type)
{
  selection.prototype[ToD3HtmlName(type)] = function (contents)
  {
    return this.append('input')
      .attr('type', type)
      .html(contents || '');
  };
});

selection.prototype.Options = function (options, selected)
{
  if (Array.isArray(options))
  {
    return this.Children(options, 'option', function(elem) {
      elem.html(id).attr('selected', function(i) {
         return (i === selected? 'selected' : null);
      });
    });
  }
  else
  {
    return this.Children(Object.keys(options), 'option', function(elem) {
      elem.html(function(i) { return options[i] })
        .attr('value', id)
        .attr('selected', function(i) {
         return ((i === selected || options[i] === selected)? 'selected' : null);
      });
    });
  }
};

// events https://www.w3schools.com/tags/ref_eventattributes.asp
[
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
].forEach(function (type)
{
  selection.prototype[ToD3HtmlName('on-' + type)] = function (value, capture)
  {
    if (arguments.length < 1)
    {
      return this.on(type);
    }
    else if (arguments.length < 2)
    {
      return this.on(type, value);
    }
    else
    {
      return this.on(type, value, capture);
    }
  };
});

// common attributes https://www.w3schools.com/tags/ref_attributes.asp
[
  'accept',
  'accesskey',
  'action',
  'alt',
  'autocomplete',
  'autofocus',
  'class',
  'cols',
  'colspan',
  'disabled',
  'download',
  'draggable',
  'dropzone',
  'for',
  'formaction',
  'href',
  'media',
  'method',
  'name',
  'placeholder',
  'rowspan',
  'src',
  'selected',
  'tabindex',
  'title',
].forEach(function (type)
{
  selection.prototype[ToD3HtmlName(type)] = function(value)
  {
    if (arguments.length < 1)
    {
      return this.attr(type);
    }
    else
    {
      return this.attr(type, value);
    }
  };
});

[
  'checked',
  'value'
].forEach(function (type)
{
  selection.prototype[ToD3HtmlName(type)] = function(value)
  {
    if (arguments.length < 1)
    {
      return this.property(type);
    }
    else
    {
      return this.property(type, value);
    }
  };
});

// style https://www.w3schools.com/cssref/
[
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
].forEach(function (type)
{
  selection.prototype[ToD3HtmlName(type)] = function (value)
  {
    if (arguments.length < 1)
    {
      return this.style(type);
    }
    else
    {
      return this.style(type, value);
    }
  };
});

// enter / exit wrapper

selection.prototype.Children = function(arrayData, childElementTagName, updateCallback)
{
  var parent = this;
  // remove stray elements
  parent.selectAll(childNodesSelector)
    .filter(function() { return this.tagName !== childElementTagName; })
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


d3.HashStateRouter = function(context)
{
  context.State = function(param, value)
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

  context.StateChangeLink = function(param, value)
  {
    var params = {};
    for (var field in context.params)
    {
      params[field] = context.params[field];
    }
    params[param] = value;
    return context.Link(params)
  };
  
  context.Link = function(params)
  {
    var output = '#';
    for (var param in params)
    {
      output += param + '=' + params[param] + '&';
    }
    output = output.replace(/[?&]$/, '');
    return output;
  };

  context.Reload = function () {
    var params = {
      page: ''
    };
    if(window.location.search)
    {
      window.location.search.substr(1).split('&').map(function(x)
      {
        return x.split('=', 2);
      }).forEach(function(fragment)
      {
        params[fragment[0]] = fragment[1] || true;
      });
      window.location.hash = context.Link(params);
      window.location.search = '';
      return;
    }
    else if(window.location.hash)
    {
      window.location.hash.substr(1).split('&').map(function(x)
      {
        return x.split('=', 2);
      }).forEach(function(fragment)
      {
        params[fragment[0]] = fragment[1] || true;
      });
    }
    context.params = params;
    (context.pages[params.page] || context.pages['404'])(context);
  };
  
  context.params = context.params || {};

  window.onhashchange = context.Reload;
  
  context.Reload();
};

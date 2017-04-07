"use strict";

var selection = window.d3 && d3.selection || require("d3-selection").selection;

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
  'body',
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
  'section',
  'select',
  'shadow',
  'small',
  'source',
  'span',
  'strong',
  'style',
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
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr'
].forEach(function (type)
{
  selection.prototype[selection.prototype[type]? type + '_' : type] = function (contents)
  {
    return this.append(type)
      .html(contents || '');
  };
});

[
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'month',
  'number',
  'password',
  'range',
  'radio',
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
  var method = 'input' + type.split(/-/g).map(function(x){ return x.substr(0,1).toUpperCase()+x.substr(1);}).join('');
  selection.prototype[method] = function (contents)
  {
    return this.append('input')
      .attr('type', type)
      .html(contents || '');
  };
})

selection.prototype.clear = function()
{
  return this.text('');
};

function childNodesSelector() {
  return this.childNodes;
}

selection.prototype.childSync = function(arrayData, childElementTagName, updateCallback, transition)
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
  if (transition)
  {
    updateCallback(rows.enter()
      .append(childElementTagName)
      .transition(transition), true);
    updateCallback(rows.transition(transition), false);
  }
  else
  {
    updateCallback(rows.enter()
      .append(childElementTagName), true);
    updateCallback(rows, false);
  }
  return this;
}

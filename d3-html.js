(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

/**
 * selection.A() creates &lt;a&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var A = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Abbr() creates &lt;abbr&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Abbr = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Accept() creates &lt;input&gt; element of type accept
 * @param {string} [value=''] option content html
 * @return created element
 */
var Accept = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('accept');
  }
  else
  {
    return this.attr('accept', value);
  }
};

/**
 * selection.Accesskey() creates &lt;input&gt; element of type accesskey
 * @param {string} [value=''] option content html
 * @return created element
 */
var Accesskey = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('accesskey');
  }
  else
  {
    return this.attr('accesskey', value);
  }
};

/**
 * selection.Action() creates &lt;input&gt; element of type action
 * @param {string} [value=''] option content html
 * @return created element
 */
var Action = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('action');
  }
  else
  {
    return this.attr('action', value);
  }
};

/**
 * selection.Address() creates &lt;address&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Address = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.AlignContent() creates &lt;input&gt; element of type align-content
 * @param {string} [value=''] option content html
 * @return created element
 */
var AlignContent = function (value)
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

/**
 * selection.AlignItems() creates &lt;input&gt; element of type align-items
 * @param {string} [value=''] option content html
 * @return created element
 */
var AlignItems = function (value)
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

/**
 * selection.AlignSelf() creates &lt;input&gt; element of type align-self
 * @param {string} [value=''] option content html
 * @return created element
 */
var AlignSelf = function (value)
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

/**
 * selection.Alt() creates &lt;input&gt; element of type alt
 * @param {string} [value=''] option content html
 * @return created element
 */
var Alt = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('alt');
  }
  else
  {
    return this.attr('alt', value);
  }
};

/**
 * selection.Area() creates &lt;area&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Area = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Article() creates &lt;article&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Article = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Aside() creates &lt;aside&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Aside = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Audio() creates &lt;audio&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Audio = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Autocomplete() creates &lt;input&gt; element of type autocomplete
 * @param {string} [value=''] option content html
 * @return created element
 */
var Autocomplete = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('autocomplete');
  }
  else
  {
    return this.attr('autocomplete', value);
  }
};

/**
 * selection.Autofocus() creates &lt;input&gt; element of type autofocus
 * @param {string} [value=''] option content html
 * @return created element
 */
var Autofocus = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('autofocus');
  }
  else
  {
    return this.attr('autofocus', value);
  }
};

/**
 * selection.B() creates &lt;b&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var B = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Background() creates &lt;input&gt; element of type background
 * @param {string} [value=''] option content html
 * @return created element
 */
var Background = function (value)
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

/**
 * selection.BackgroundAttachment() creates &lt;input&gt; element of type background-attachment
 * @param {string} [value=''] option content html
 * @return created element
 */
var BackgroundAttachment = function (value)
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

/**
 * selection.BackgroundBlendMode() creates &lt;input&gt; element of type background-blend-mode
 * @param {string} [value=''] option content html
 * @return created element
 */
var BackgroundBlendMode = function (value)
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

/**
 * selection.BackgroundClip() creates &lt;input&gt; element of type background-clip
 * @param {string} [value=''] option content html
 * @return created element
 */
var BackgroundClip = function (value)
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

/**
 * selection.BackgroundColor() creates &lt;input&gt; element of type background-color
 * @param {string} [value=''] option content html
 * @return created element
 */
var BackgroundColor = function (value)
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

/**
 * selection.BackgroundImage() creates &lt;input&gt; element of type background-image
 * @param {string} [value=''] option content html
 * @return created element
 */
var BackgroundImage = function (value)
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

/**
 * selection.BackgroundOrigin() creates &lt;input&gt; element of type background-origin
 * @param {string} [value=''] option content html
 * @return created element
 */
var BackgroundOrigin = function (value)
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

/**
 * selection.BackgroundPosition() creates &lt;input&gt; element of type background-position
 * @param {string} [value=''] option content html
 * @return created element
 */
var BackgroundPosition = function (value)
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

/**
 * selection.BackgroundRepeat() creates &lt;input&gt; element of type background-repeat
 * @param {string} [value=''] option content html
 * @return created element
 */
var BackgroundRepeat = function (value)
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

/**
 * selection.BackgroundSize() creates &lt;input&gt; element of type background-size
 * @param {string} [value=''] option content html
 * @return created element
 */
var BackgroundSize = function (value)
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

/**
 * selection.Base() creates &lt;base&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Base = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Bdi() creates &lt;bdi&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Bdi = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Bdo() creates &lt;bdo&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Bdo = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Blockquote() creates &lt;blockquote&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Blockquote = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Border() creates &lt;input&gt; element of type border
 * @param {string} [value=''] option content html
 * @return created element
 */
var Border = function (value)
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

/**
 * selection.BorderBottom() creates &lt;input&gt; element of type border-bottom
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderBottom = function (value)
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

/**
 * selection.BorderBottomColor() creates &lt;input&gt; element of type border-bottom-color
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderBottomColor = function (value)
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

/**
 * selection.BorderBottomLeftRadius() creates &lt;input&gt; element of type border-bottom-left-radius
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderBottomLeftRadius = function (value)
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

/**
 * selection.BorderBottomRightRadius() creates &lt;input&gt; element of type border-bottom-right-radius
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderBottomRightRadius = function (value)
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

/**
 * selection.BorderBottomStyle() creates &lt;input&gt; element of type border-bottom-style
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderBottomStyle = function (value)
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

/**
 * selection.BorderBottomWidth() creates &lt;input&gt; element of type border-bottom-width
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderBottomWidth = function (value)
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

/**
 * selection.BorderCollapse() creates &lt;input&gt; element of type border-collapse
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderCollapse = function (value)
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

/**
 * selection.BorderColor() creates &lt;input&gt; element of type border-color
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderColor = function (value)
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

/**
 * selection.BorderImage() creates &lt;input&gt; element of type border-image
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderImage = function (value)
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

/**
 * selection.BorderImageOutset() creates &lt;input&gt; element of type border-image-outset
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderImageOutset = function (value)
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

/**
 * selection.BorderImageRepeat() creates &lt;input&gt; element of type border-image-repeat
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderImageRepeat = function (value)
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

/**
 * selection.BorderImageSlice() creates &lt;input&gt; element of type border-image-slice
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderImageSlice = function (value)
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

/**
 * selection.BorderImageSource() creates &lt;input&gt; element of type border-image-source
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderImageSource = function (value)
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

/**
 * selection.BorderImageWidth() creates &lt;input&gt; element of type border-image-width
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderImageWidth = function (value)
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

/**
 * selection.BorderLeft() creates &lt;input&gt; element of type border-left
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderLeft = function (value)
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

/**
 * selection.BorderLeftColor() creates &lt;input&gt; element of type border-left-color
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderLeftColor = function (value)
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

/**
 * selection.BorderLeftStyle() creates &lt;input&gt; element of type border-left-style
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderLeftStyle = function (value)
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

/**
 * selection.BorderLeftWidth() creates &lt;input&gt; element of type border-left-width
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderLeftWidth = function (value)
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

/**
 * selection.BorderRadius() creates &lt;input&gt; element of type border-radius
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderRadius = function (value)
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

/**
 * selection.BorderRight() creates &lt;input&gt; element of type border-right
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderRight = function (value)
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

/**
 * selection.BorderRightColor() creates &lt;input&gt; element of type border-right-color
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderRightColor = function (value)
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

/**
 * selection.BorderRightStyle() creates &lt;input&gt; element of type border-right-style
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderRightStyle = function (value)
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

/**
 * selection.BorderRightWidth() creates &lt;input&gt; element of type border-right-width
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderRightWidth = function (value)
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

/**
 * selection.BorderSpacing() creates &lt;input&gt; element of type border-spacing
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderSpacing = function (value)
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

/**
 * selection.BorderStyle() creates &lt;input&gt; element of type border-style
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderStyle = function (value)
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

/**
 * selection.BorderTop() creates &lt;input&gt; element of type border-top
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderTop = function (value)
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

/**
 * selection.BorderTopColor() creates &lt;input&gt; element of type border-top-color
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderTopColor = function (value)
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

/**
 * selection.BorderTopLeftRadius() creates &lt;input&gt; element of type border-top-left-radius
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderTopLeftRadius = function (value)
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

/**
 * selection.BorderTopRightRadius() creates &lt;input&gt; element of type border-top-right-radius
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderTopRightRadius = function (value)
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

/**
 * selection.BorderTopStyle() creates &lt;input&gt; element of type border-top-style
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderTopStyle = function (value)
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

/**
 * selection.BorderTopWidth() creates &lt;input&gt; element of type border-top-width
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderTopWidth = function (value)
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

/**
 * selection.BorderWidth() creates &lt;input&gt; element of type border-width
 * @param {string} [value=''] option content html
 * @return created element
 */
var BorderWidth = function (value)
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

/**
 * selection.Bottom() creates &lt;input&gt; element of type bottom
 * @param {string} [value=''] option content html
 * @return created element
 */
var Bottom = function (value)
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

/**
 * selection.BoxDecorationBreak() creates &lt;input&gt; element of type box-decoration-break
 * @param {string} [value=''] option content html
 * @return created element
 */
var BoxDecorationBreak = function (value)
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

/**
 * selection.BoxShadow() creates &lt;input&gt; element of type box-shadow
 * @param {string} [value=''] option content html
 * @return created element
 */
var BoxShadow = function (value)
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

/**
 * selection.BoxSizing() creates &lt;input&gt; element of type box-sizing
 * @param {string} [value=''] option content html
 * @return created element
 */
var BoxSizing = function (value)
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

/**
 * selection.Br() creates &lt;br&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Br = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Button() creates &lt;button&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Button = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Canvas() creates &lt;canvas&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Canvas = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Caption() creates &lt;caption&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Caption = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.CaptionSide() creates &lt;input&gt; element of type caption-side
 * @param {string} [value=''] option content html
 * @return created element
 */
var CaptionSide = function (value)
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

/**
 * selection.Checkbox() creates &lt;input&gt; element of type checkbox
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Checkbox = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.Checked() creates &lt;input&gt; element of type checked
 * @param {string} [value=''] option content html
 * @return created element
 */
var Checked = function (value)
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

/**
 * selection.Children() syncs children of an element to array of data elements
 * @param {string} [arrayData=''] option content html
 * @param {string} [childElementTagName=''] option content html
 * @param {string} [updateCallback=''] option content html
 * @return created element
 */
var Children = function (arrayData, childElementTagName, updateCallback)
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
};

function childNodesSelector ()
{
  return this.childNodes;
}

/**
 * selection.Cite() creates &lt;cite&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Cite = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Class() creates &lt;input&gt; element of type class
 * @param {string} [value=''] option content html
 * @return created element
 */
var Class = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('class');
  }
  else
  {
    return this.attr('class', value);
  }
};

/**
 * selection.Clear() creates &lt;input&gt; element of type clear
 * @param {string} [value=''] option content html
 * @return created element
 */
var Clear = function (value)
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

/**
 * selection.Clip() creates &lt;input&gt; element of type clip
 * @param {string} [value=''] option content html
 * @return created element
 */
var Clip = function (value)
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

/**
 * selection.Code() creates &lt;code&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Code = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Col() creates &lt;col&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Col = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Colgroup() creates &lt;colgroup&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Colgroup = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Color() creates &lt;input&gt; element of type color
 * @param {string} [value=''] option content html
 * @return created element
 */
var Color = function (value)
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

/**
 * selection.Cols() creates &lt;input&gt; element of type cols
 * @param {string} [value=''] option content html
 * @return created element
 */
var Cols = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('cols');
  }
  else
  {
    return this.attr('cols', value);
  }
};

/**
 * selection.Colspan() creates &lt;input&gt; element of type colspan
 * @param {string} [value=''] option content html
 * @return created element
 */
var Colspan = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('colspan');
  }
  else
  {
    return this.attr('colspan', value);
  }
};

/**
 * selection.Content() creates &lt;input&gt; element of type content
 * @param {string} [value=''] option content html
 * @return created element
 */
var Content = function (value)
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

/**
 * selection.ContentEditable() creates &lt;input&gt; element of type contentEditable
 * @param {string} [value=''] option content html
 * @return created element
 */
var ContentEditable = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('contentEditable');
  }
  else
  {
    return this.attr('contentEditable', value);
  }
};

/**
 * selection.Cursor() creates &lt;input&gt; element of type cursor
 * @param {string} [value=''] option content html
 * @return created element
 */
var Cursor = function (value)
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

/**
 * selection.Data() creates &lt;data&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Data = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Datalist() creates &lt;datalist&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Datalist = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Date() creates &lt;input&gt; element of type date
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Date = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.DatetimeLocal() creates &lt;input&gt; element of type datetime-local
 * @param {string} [contents=''] option content html
 * @return created element
 */
var DatetimeLocal = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.Dd() creates &lt;dd&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Dd = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Del() creates &lt;del&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Del = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Details() creates &lt;details&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Details = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Dfn() creates &lt;dfn&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Dfn = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Disabled() creates &lt;input&gt; element of type disabled
 * @param {string} [value=''] option content html
 * @return created element
 */
var Disabled = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('disabled');
  }
  else
  {
    return this.attr('disabled', value);
  }
};

/**
 * selection.Display() creates &lt;input&gt; element of type display
 * @param {string} [value=''] option content html
 * @return created element
 */
var Display = function (value)
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

/**
 * selection.Div() creates &lt;div&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Div = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Dl() creates &lt;dl&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Dl = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Download() creates &lt;input&gt; element of type download
 * @param {string} [value=''] option content html
 * @return created element
 */
var Download = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('download');
  }
  else
  {
    return this.attr('download', value);
  }
};

/**
 * selection.Draggable() creates &lt;input&gt; element of type draggable
 * @param {string} [value=''] option content html
 * @return created element
 */
var Draggable = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('draggable');
  }
  else
  {
    return this.attr('draggable', value);
  }
};

/**
 * selection.Dropzone() creates &lt;input&gt; element of type dropzone
 * @param {string} [value=''] option content html
 * @return created element
 */
var Dropzone = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('dropzone');
  }
  else
  {
    return this.attr('dropzone', value);
  }
};

/**
 * selection.Dt() creates &lt;dt&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Dt = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Element() creates &lt;element&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Element = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Em() creates &lt;em&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Em = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Email() creates &lt;input&gt; element of type email
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Email = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.Embed() creates &lt;embed&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Embed = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.EmptyCells() creates &lt;input&gt; element of type empty-cells
 * @param {string} [value=''] option content html
 * @return created element
 */
var EmptyCells = function (value)
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

/**
 * selection.Enctype() creates &lt;input&gt; element of type enctype
 * @param {string} [value=''] option content html
 * @return created element
 */
var Enctype = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('enctype');
  }
  else
  {
    return this.attr('enctype', value);
  }
};

/**
 * selection.Fieldset() creates &lt;fieldset&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Fieldset = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Figcaption() creates &lt;figcaption&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Figcaption = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Figure() creates &lt;figure&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Figure = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.File() creates &lt;input&gt; element of type file
 * @param {string} [contents=''] option content html
 * @return created element
 */
var File = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.Flex() creates &lt;input&gt; element of type flex
 * @param {string} [value=''] option content html
 * @return created element
 */
var Flex = function (value)
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

/**
 * selection.FlexBasis() creates &lt;input&gt; element of type flex-basis
 * @param {string} [value=''] option content html
 * @return created element
 */
var FlexBasis = function (value)
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

/**
 * selection.FlexDirection() creates &lt;input&gt; element of type flex-direction
 * @param {string} [value=''] option content html
 * @return created element
 */
var FlexDirection = function (value)
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

/**
 * selection.FlexFlow() creates &lt;input&gt; element of type flex-flow
 * @param {string} [value=''] option content html
 * @return created element
 */
var FlexFlow = function (value)
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

/**
 * selection.FlexGrow() creates &lt;input&gt; element of type flex-grow
 * @param {string} [value=''] option content html
 * @return created element
 */
var FlexGrow = function (value)
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

/**
 * selection.FlexShrink() creates &lt;input&gt; element of type flex-shrink
 * @param {string} [value=''] option content html
 * @return created element
 */
var FlexShrink = function (value)
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

/**
 * selection.FlexWrap() creates &lt;input&gt; element of type flex-wrap
 * @param {string} [value=''] option content html
 * @return created element
 */
var FlexWrap = function (value)
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

/**
 * selection.Float() creates &lt;input&gt; element of type float
 * @param {string} [value=''] option content html
 * @return created element
 */
var Float = function (value)
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

/**
 * selection.Font() creates &lt;input&gt; element of type font
 * @param {string} [value=''] option content html
 * @return created element
 */
var Font = function (value)
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

/**
 * selection.FontFamily() creates &lt;input&gt; element of type font-family
 * @param {string} [value=''] option content html
 * @return created element
 */
var FontFamily = function (value)
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

/**
 * selection.FontFeatureSettings() creates &lt;input&gt; element of type font-feature-settings
 * @param {string} [value=''] option content html
 * @return created element
 */
var FontFeatureSettings = function (value)
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

/**
 * selection.FontKerning() creates &lt;input&gt; element of type font-kerning
 * @param {string} [value=''] option content html
 * @return created element
 */
var FontKerning = function (value)
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

/**
 * selection.FontLanguageOverride() creates &lt;input&gt; element of type font-language-override
 * @param {string} [value=''] option content html
 * @return created element
 */
var FontLanguageOverride = function (value)
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

/**
 * selection.FontSize() creates &lt;input&gt; element of type font-size
 * @param {string} [value=''] option content html
 * @return created element
 */
var FontSize = function (value)
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

/**
 * selection.FontSizeAdjust() creates &lt;input&gt; element of type font-size-adjust
 * @param {string} [value=''] option content html
 * @return created element
 */
var FontSizeAdjust = function (value)
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

/**
 * selection.FontStretch() creates &lt;input&gt; element of type font-stretch
 * @param {string} [value=''] option content html
 * @return created element
 */
var FontStretch = function (value)
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

/**
 * selection.FontStyle() creates &lt;input&gt; element of type font-style
 * @param {string} [value=''] option content html
 * @return created element
 */
var FontStyle = function (value)
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

/**
 * selection.FontSynthesis() creates &lt;input&gt; element of type font-synthesis
 * @param {string} [value=''] option content html
 * @return created element
 */
var FontSynthesis = function (value)
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

/**
 * selection.FontVariant() creates &lt;input&gt; element of type font-variant
 * @param {string} [value=''] option content html
 * @return created element
 */
var FontVariant = function (value)
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

/**
 * selection.FontVariantAlternates() creates &lt;input&gt; element of type font-variant-alternates
 * @param {string} [value=''] option content html
 * @return created element
 */
var FontVariantAlternates = function (value)
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

/**
 * selection.FontVariantCaps() creates &lt;input&gt; element of type font-variant-caps
 * @param {string} [value=''] option content html
 * @return created element
 */
var FontVariantCaps = function (value)
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

/**
 * selection.FontVariantEastAsian() creates &lt;input&gt; element of type font-variant-east-asian
 * @param {string} [value=''] option content html
 * @return created element
 */
var FontVariantEastAsian = function (value)
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

/**
 * selection.FontVariantLigatures() creates &lt;input&gt; element of type font-variant-ligatures
 * @param {string} [value=''] option content html
 * @return created element
 */
var FontVariantLigatures = function (value)
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

/**
 * selection.FontVariantNumeric() creates &lt;input&gt; element of type font-variant-numeric
 * @param {string} [value=''] option content html
 * @return created element
 */
var FontVariantNumeric = function (value)
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

/**
 * selection.FontVariantPosition() creates &lt;input&gt; element of type font-variant-position
 * @param {string} [value=''] option content html
 * @return created element
 */
var FontVariantPosition = function (value)
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

/**
 * selection.FontWeight() creates &lt;input&gt; element of type font-weight
 * @param {string} [value=''] option content html
 * @return created element
 */
var FontWeight = function (value)
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

/**
 * selection.Footer() creates &lt;footer&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Footer = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.For() creates &lt;input&gt; element of type for
 * @param {string} [value=''] option content html
 * @return created element
 */
var For = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('for');
  }
  else
  {
    return this.attr('for', value);
  }
};

/**
 * selection.Form() creates &lt;form&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Form = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Formaction() creates &lt;input&gt; element of type formaction
 * @param {string} [value=''] option content html
 * @return created element
 */
var Formaction = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('formaction');
  }
  else
  {
    return this.attr('formaction', value);
  }
};

/**
 * selection.H1() creates &lt;h1&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var H1 = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.H2() creates &lt;h2&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var H2 = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.H3() creates &lt;h3&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var H3 = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.H4() creates &lt;h4&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var H4 = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.H5() creates &lt;h5&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var H5 = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.H6() creates &lt;h6&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var H6 = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.HangingPunctuation() creates &lt;input&gt; element of type hanging-punctuation
 * @param {string} [value=''] option content html
 * @return created element
 */
var HangingPunctuation = function (value)
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

/**
 * selection.HashStateRouter()
 * @param {string} [context=''] option content html
 * @param {string} [dontRun=''] option content html
 * @return created element
 */
var HashStateRouter = function (context, dontRun)
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
};

/**
 * selection.Header() creates &lt;header&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Header = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Height() creates &lt;input&gt; element of type height
 * @param {string} [value=''] option content html
 * @return created element
 */
var Height = function (value)
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

/**
 * selection.Hidden() creates &lt;input&gt; element of type hidden
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Hidden = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.Hr() creates &lt;hr&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Hr = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Href() creates &lt;input&gt; element of type href
 * @param {string} [value=''] option content html
 * @return created element
 */
var Href = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('href');
  }
  else
  {
    return this.attr('href', value);
  }
};

/**
 * selection.Hyphens() creates &lt;input&gt; element of type hyphens
 * @param {string} [value=''] option content html
 * @return created element
 */
var Hyphens = function (value)
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

/**
 * selection.I() creates &lt;i&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var I = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Id() creates &lt;input&gt; element of type id
 * @param {string} [value=''] option content html
 * @return created element
 */
var Id = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('id');
  }
  else
  {
    return this.attr('id', value);
  }
};

/**
 * selection.Iframe() creates &lt;iframe&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Iframe = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Image() creates &lt;input&gt; element of type image
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Image = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.ImeMode() creates &lt;input&gt; element of type ime-mode
 * @param {string} [value=''] option content html
 * @return created element
 */
var ImeMode = function (value)
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

/**
 * selection.Img() creates &lt;img&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Img = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Input() creates &lt;input&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Input = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.InputCheckbox() creates &lt;input&gt; element of type checkbox
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputCheckbox = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputColor() creates &lt;input&gt; element of type color
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputColor = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputDate() creates &lt;input&gt; element of type date
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputDate = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputDatetimeLocal() creates &lt;input&gt; element of type datetime-local
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputDatetimeLocal = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputEmail() creates &lt;input&gt; element of type email
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputEmail = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputFile() creates &lt;input&gt; element of type file
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputFile = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputHidden() creates &lt;input&gt; element of type hidden
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputHidden = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputImage() creates &lt;input&gt; element of type image
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputImage = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputMonth() creates &lt;input&gt; element of type month
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputMonth = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputNumber() creates &lt;input&gt; element of type number
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputNumber = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputPassword() creates &lt;input&gt; element of type password
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputPassword = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputRadio() creates &lt;input&gt; element of type radio
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputRadio = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputRange() creates &lt;input&gt; element of type range
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputRange = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputReset() creates &lt;input&gt; element of type reset
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputReset = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputSearch() creates &lt;input&gt; element of type search
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputSearch = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputSubmit() creates &lt;input&gt; element of type submit
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputSubmit = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputTel() creates &lt;input&gt; element of type tel
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputTel = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputText() creates &lt;input&gt; element of type text
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputText = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputTime() creates &lt;input&gt; element of type time
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputTime = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputUrl() creates &lt;input&gt; element of type url
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputUrl = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.InputWeek() creates &lt;input&gt; element of type week
 * @param {string} [contents=''] option content html
 * @return created element
 */
var InputWeek = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.Ins() creates &lt;ins&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Ins = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.JustifyContent() creates &lt;input&gt; element of type justify-content
 * @param {string} [value=''] option content html
 * @return created element
 */
var JustifyContent = function (value)
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

/**
 * selection.Kbd() creates &lt;kbd&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Kbd = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Label() creates &lt;label&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Label = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Left() creates &lt;input&gt; element of type left
 * @param {string} [value=''] option content html
 * @return created element
 */
var Left = function (value)
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

/**
 * selection.Legend() creates &lt;legend&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Legend = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.LetterSpacing() creates &lt;input&gt; element of type letter-spacing
 * @param {string} [value=''] option content html
 * @return created element
 */
var LetterSpacing = function (value)
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

/**
 * selection.Li() creates &lt;li&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Li = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.LineBreak() creates &lt;input&gt; element of type line-break
 * @param {string} [value=''] option content html
 * @return created element
 */
var LineBreak = function (value)
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

/**
 * selection.LineHeight() creates &lt;input&gt; element of type line-height
 * @param {string} [value=''] option content html
 * @return created element
 */
var LineHeight = function (value)
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

/**
 * selection.Link() creates &lt;link&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Link = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Main() creates &lt;main&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Main = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Map() creates &lt;map&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Map = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Margin() creates &lt;input&gt; element of type margin
 * @param {string} [value=''] option content html
 * @return created element
 */
var Margin = function (value)
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

/**
 * selection.MarginBottom() creates &lt;input&gt; element of type margin-bottom
 * @param {string} [value=''] option content html
 * @return created element
 */
var MarginBottom = function (value)
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

/**
 * selection.MarginLeft() creates &lt;input&gt; element of type margin-left
 * @param {string} [value=''] option content html
 * @return created element
 */
var MarginLeft = function (value)
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

/**
 * selection.MarginRight() creates &lt;input&gt; element of type margin-right
 * @param {string} [value=''] option content html
 * @return created element
 */
var MarginRight = function (value)
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

/**
 * selection.MarginTop() creates &lt;input&gt; element of type margin-top
 * @param {string} [value=''] option content html
 * @return created element
 */
var MarginTop = function (value)
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

/**
 * selection.Mark() creates &lt;mark&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Mark = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.MaxHeight() creates &lt;input&gt; element of type max-height
 * @param {string} [value=''] option content html
 * @return created element
 */
var MaxHeight = function (value)
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

/**
 * selection.MaxWidth() creates &lt;input&gt; element of type max-width
 * @param {string} [value=''] option content html
 * @return created element
 */
var MaxWidth = function (value)
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

/**
 * selection.Media() creates &lt;input&gt; element of type media
 * @param {string} [value=''] option content html
 * @return created element
 */
var Media = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('media');
  }
  else
  {
    return this.attr('media', value);
  }
};

/**
 * selection.Meta() creates &lt;meta&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Meta = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Meter() creates &lt;meter&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Meter = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Method() creates &lt;input&gt; element of type method
 * @param {string} [value=''] option content html
 * @return created element
 */
var Method = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('method');
  }
  else
  {
    return this.attr('method', value);
  }
};

/**
 * selection.MinHeight() creates &lt;input&gt; element of type min-height
 * @param {string} [value=''] option content html
 * @return created element
 */
var MinHeight = function (value)
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

/**
 * selection.MinWidth() creates &lt;input&gt; element of type min-width
 * @param {string} [value=''] option content html
 * @return created element
 */
var MinWidth = function (value)
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

/**
 * selection.Month() creates &lt;input&gt; element of type month
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Month = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.Name() creates &lt;input&gt; element of type name
 * @param {string} [value=''] option content html
 * @return created element
 */
var Name = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('name');
  }
  else
  {
    return this.attr('name', value);
  }
};

/**
 * selection.Nav() creates &lt;nav&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Nav = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.NavDown() creates &lt;input&gt; element of type nav-down
 * @param {string} [value=''] option content html
 * @return created element
 */
var NavDown = function (value)
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

/**
 * selection.NavIndex() creates &lt;input&gt; element of type nav-index
 * @param {string} [value=''] option content html
 * @return created element
 */
var NavIndex = function (value)
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

/**
 * selection.NavLeft() creates &lt;input&gt; element of type nav-left
 * @param {string} [value=''] option content html
 * @return created element
 */
var NavLeft = function (value)
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

/**
 * selection.NavRight() creates &lt;input&gt; element of type nav-right
 * @param {string} [value=''] option content html
 * @return created element
 */
var NavRight = function (value)
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

/**
 * selection.NavUp() creates &lt;input&gt; element of type nav-up
 * @param {string} [value=''] option content html
 * @return created element
 */
var NavUp = function (value)
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

/**
 * selection.Noframes() creates &lt;noframes&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Noframes = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Noscript() creates &lt;noscript&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Noscript = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Number() creates &lt;input&gt; element of type number
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Number = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.Object() creates &lt;object&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Object$1 = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Ol() creates &lt;ol&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Ol = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.OnAbort() creates &lt;input&gt; element of type abort
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnAbort = function (value, capture)
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

/**
 * selection.OnAfterprint() creates &lt;input&gt; element of type afterprint
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnAfterprint = function (value, capture)
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

/**
 * selection.OnBeforeprint() creates &lt;input&gt; element of type beforeprint
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnBeforeprint = function (value, capture)
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

/**
 * selection.OnBeforeunload() creates &lt;input&gt; element of type beforeunload
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnBeforeunload = function (value, capture)
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

/**
 * selection.OnBlur() creates &lt;input&gt; element of type blur
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnBlur = function (value, capture)
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

/**
 * selection.OnCanplay() creates &lt;input&gt; element of type canplay
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnCanplay = function (value, capture)
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

/**
 * selection.OnCanplaythrough() creates &lt;input&gt; element of type canplaythrough
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnCanplaythrough = function (value, capture)
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

/**
 * selection.OnChange() creates &lt;input&gt; element of type change
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnChange = function (value, capture)
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

/**
 * selection.OnClick() creates &lt;input&gt; element of type click
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnClick = function (value, capture)
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

/**
 * selection.OnContextmenu() creates &lt;input&gt; element of type contextmenu
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnContextmenu = function (value, capture)
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

/**
 * selection.OnCopy() creates &lt;input&gt; element of type copy
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnCopy = function (value, capture)
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

/**
 * selection.OnCuechange() creates &lt;input&gt; element of type cuechange
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnCuechange = function (value, capture)
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

/**
 * selection.OnCut() creates &lt;input&gt; element of type cut
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnCut = function (value, capture)
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

/**
 * selection.OnDblclick() creates &lt;input&gt; element of type dblclick
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnDblclick = function (value, capture)
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

/**
 * selection.OnDrag() creates &lt;input&gt; element of type drag
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnDrag = function (value, capture)
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

/**
 * selection.OnDragend() creates &lt;input&gt; element of type dragend
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnDragend = function (value, capture)
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

/**
 * selection.OnDragenter() creates &lt;input&gt; element of type dragenter
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnDragenter = function (value, capture)
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

/**
 * selection.OnDragleave() creates &lt;input&gt; element of type dragleave
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnDragleave = function (value, capture)
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

/**
 * selection.OnDragover() creates &lt;input&gt; element of type dragover
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnDragover = function (value, capture)
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

/**
 * selection.OnDragstart() creates &lt;input&gt; element of type dragstart
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnDragstart = function (value, capture)
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

/**
 * selection.OnDrop() creates &lt;input&gt; element of type drop
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnDrop = function (value, capture)
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

/**
 * selection.OnDurationchange() creates &lt;input&gt; element of type durationchange
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnDurationchange = function (value, capture)
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

/**
 * selection.OnEmptied() creates &lt;input&gt; element of type emptied
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnEmptied = function (value, capture)
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

/**
 * selection.OnEnded() creates &lt;input&gt; element of type ended
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnEnded = function (value, capture)
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

/**
 * selection.OnError() creates &lt;input&gt; element of type error
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnError = function (value, capture)
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

/**
 * selection.OnFocus() creates &lt;input&gt; element of type focus
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnFocus = function (value, capture)
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

/**
 * selection.OnHashchange() creates &lt;input&gt; element of type hashchange
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnHashchange = function (value, capture)
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

/**
 * selection.OnInput() creates &lt;input&gt; element of type input
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnInput = function (value, capture)
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

/**
 * selection.OnInvalid() creates &lt;input&gt; element of type invalid
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnInvalid = function (value, capture)
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

/**
 * selection.OnKeydown() creates &lt;input&gt; element of type keydown
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnKeydown = function (value, capture)
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

/**
 * selection.OnKeypress() creates &lt;input&gt; element of type keypress
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnKeypress = function (value, capture)
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

/**
 * selection.OnKeyup() creates &lt;input&gt; element of type keyup
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnKeyup = function (value, capture)
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

/**
 * selection.OnLoad() creates &lt;input&gt; element of type load
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnLoad = function (value, capture)
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

/**
 * selection.OnLoadeddata() creates &lt;input&gt; element of type loadeddata
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnLoadeddata = function (value, capture)
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

/**
 * selection.OnLoadedmetadata() creates &lt;input&gt; element of type loadedmetadata
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnLoadedmetadata = function (value, capture)
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

/**
 * selection.OnLoadstart() creates &lt;input&gt; element of type loadstart
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnLoadstart = function (value, capture)
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

/**
 * selection.OnMessage() creates &lt;input&gt; element of type message
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnMessage = function (value, capture)
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

/**
 * selection.OnMousedown() creates &lt;input&gt; element of type mousedown
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnMousedown = function (value, capture)
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

/**
 * selection.OnMousemove() creates &lt;input&gt; element of type mousemove
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnMousemove = function (value, capture)
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

/**
 * selection.OnMouseout() creates &lt;input&gt; element of type mouseout
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnMouseout = function (value, capture)
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

/**
 * selection.OnMouseover() creates &lt;input&gt; element of type mouseover
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnMouseover = function (value, capture)
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

/**
 * selection.OnMouseup() creates &lt;input&gt; element of type mouseup
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnMouseup = function (value, capture)
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

/**
 * selection.OnMousewheel() creates &lt;input&gt; element of type mousewheel
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnMousewheel = function (value, capture)
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

/**
 * selection.OnOffline() creates &lt;input&gt; element of type offline
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnOffline = function (value, capture)
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

/**
 * selection.OnOnline() creates &lt;input&gt; element of type online
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnOnline = function (value, capture)
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

/**
 * selection.OnPagehide() creates &lt;input&gt; element of type pagehide
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnPagehide = function (value, capture)
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

/**
 * selection.OnPageshow() creates &lt;input&gt; element of type pageshow
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnPageshow = function (value, capture)
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

/**
 * selection.OnPaste() creates &lt;input&gt; element of type paste
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnPaste = function (value, capture)
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

/**
 * selection.OnPause() creates &lt;input&gt; element of type pause
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnPause = function (value, capture)
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

/**
 * selection.OnPlay() creates &lt;input&gt; element of type play
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnPlay = function (value, capture)
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

/**
 * selection.OnPlaying() creates &lt;input&gt; element of type playing
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnPlaying = function (value, capture)
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

/**
 * selection.OnPopstate() creates &lt;input&gt; element of type popstate
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnPopstate = function (value, capture)
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

/**
 * selection.OnProgress() creates &lt;input&gt; element of type progress
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnProgress = function (value, capture)
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

/**
 * selection.OnRatechange() creates &lt;input&gt; element of type ratechange
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnRatechange = function (value, capture)
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

/**
 * selection.OnReset() creates &lt;input&gt; element of type reset
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnReset = function (value, capture)
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

/**
 * selection.OnResize() creates &lt;input&gt; element of type resize
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnResize = function (value, capture)
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

/**
 * selection.OnScroll() creates &lt;input&gt; element of type scroll
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnScroll = function (value, capture)
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

/**
 * selection.OnSearch() creates &lt;input&gt; element of type search
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnSearch = function (value, capture)
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

/**
 * selection.OnSeeked() creates &lt;input&gt; element of type seeked
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnSeeked = function (value, capture)
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

/**
 * selection.OnSeeking() creates &lt;input&gt; element of type seeking
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnSeeking = function (value, capture)
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

/**
 * selection.OnSelect() creates &lt;input&gt; element of type select
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnSelect = function (value, capture)
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

/**
 * selection.OnShow() creates &lt;input&gt; element of type show
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnShow = function (value, capture)
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

/**
 * selection.OnStalled() creates &lt;input&gt; element of type stalled
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnStalled = function (value, capture)
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

/**
 * selection.OnStorage() creates &lt;input&gt; element of type storage
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnStorage = function (value, capture)
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

/**
 * selection.OnSubmit() creates &lt;input&gt; element of type submit
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnSubmit = function (value, capture)
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

/**
 * selection.OnSuspend() creates &lt;input&gt; element of type suspend
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnSuspend = function (value, capture)
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

/**
 * selection.OnTimeupdate() creates &lt;input&gt; element of type timeupdate
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnTimeupdate = function (value, capture)
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

/**
 * selection.OnToggle() creates &lt;input&gt; element of type toggle
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnToggle = function (value, capture)
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

/**
 * selection.OnUnload() creates &lt;input&gt; element of type unload
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnUnload = function (value, capture)
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

/**
 * selection.OnVolumechange() creates &lt;input&gt; element of type volumechange
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnVolumechange = function (value, capture)
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

/**
 * selection.OnWaiting() creates &lt;input&gt; element of type waiting
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnWaiting = function (value, capture)
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

/**
 * selection.OnWheel() creates &lt;input&gt; element of type wheel
 * @param {string} [value] option content html
 * @param {boolean} [capture] option content html
 * @return created element
 */
var OnWheel = function (value, capture)
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

/**
 * selection.Optgroup() creates &lt;optgroup&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Optgroup = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Option() creates &lt;option&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Option = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Options() creates a list of &lt;option&gt; elements
 * @param {string} [options=''] option content html
 * @param {string} [selected=''] option content html
 * @return created element
 */
var Options = function (options, selected)
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
};

function id (i)
{
  return i;
}

/**
 * selection.Order() creates &lt;input&gt; element of type order
 * @param {string} [value=''] option content html
 * @return created element
 */
var Order = function (value)
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

/**
 * selection.Outline() creates &lt;input&gt; element of type outline
 * @param {string} [value=''] option content html
 * @return created element
 */
var Outline = function (value)
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

/**
 * selection.OutlineColor() creates &lt;input&gt; element of type outline-color
 * @param {string} [value=''] option content html
 * @return created element
 */
var OutlineColor = function (value)
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

/**
 * selection.OutlineOffset() creates &lt;input&gt; element of type outline-offset
 * @param {string} [value=''] option content html
 * @return created element
 */
var OutlineOffset = function (value)
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

/**
 * selection.OutlineStyle() creates &lt;input&gt; element of type outline-style
 * @param {string} [value=''] option content html
 * @return created element
 */
var OutlineStyle = function (value)
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

/**
 * selection.OutlineWidth() creates &lt;input&gt; element of type outline-width
 * @param {string} [value=''] option content html
 * @return created element
 */
var OutlineWidth = function (value)
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

/**
 * selection.Output() creates &lt;output&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Output = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Overflow() creates &lt;input&gt; element of type overflow
 * @param {string} [value=''] option content html
 * @return created element
 */
var Overflow = function (value)
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

/**
 * selection.OverflowWrap() creates &lt;input&gt; element of type overflow-wrap
 * @param {string} [value=''] option content html
 * @return created element
 */
var OverflowWrap = function (value)
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

/**
 * selection.OverflowX() creates &lt;input&gt; element of type overflow-x
 * @param {string} [value=''] option content html
 * @return created element
 */
var OverflowX = function (value)
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

/**
 * selection.OverflowY() creates &lt;input&gt; element of type overflow-y
 * @param {string} [value=''] option content html
 * @return created element
 */
var OverflowY = function (value)
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

/**
 * selection.P() creates &lt;p&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var P = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Padding() creates &lt;input&gt; element of type padding
 * @param {string} [value=''] option content html
 * @return created element
 */
var Padding = function (value)
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

/**
 * selection.PaddingBottom() creates &lt;input&gt; element of type padding-bottom
 * @param {string} [value=''] option content html
 * @return created element
 */
var PaddingBottom = function (value)
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

/**
 * selection.PaddingLeft() creates &lt;input&gt; element of type padding-left
 * @param {string} [value=''] option content html
 * @return created element
 */
var PaddingLeft = function (value)
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

/**
 * selection.PaddingRight() creates &lt;input&gt; element of type padding-right
 * @param {string} [value=''] option content html
 * @return created element
 */
var PaddingRight = function (value)
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

/**
 * selection.PaddingTop() creates &lt;input&gt; element of type padding-top
 * @param {string} [value=''] option content html
 * @return created element
 */
var PaddingTop = function (value)
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

/**
 * selection.Param() creates &lt;param&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Param = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.ParentNode() creates &lt;input&gt; element of type parentNode
 * @param {string} [value=''] option content html
 * @return created element
 */
var ParentNode = function (value)
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

/**
 * selection.Password() creates &lt;input&gt; element of type password
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Password = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.Pattern() creates &lt;input&gt; element of type pattern
 * @param {string} [value=''] option content html
 * @return created element
 */
var Pattern = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('pattern');
  }
  else
  {
    return this.attr('pattern', value);
  }
};

/**
 * selection.Placeholder() creates &lt;input&gt; element of type placeholder
 * @param {string} [value=''] option content html
 * @return created element
 */
var Placeholder = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('placeholder');
  }
  else
  {
    return this.attr('placeholder', value);
  }
};

/**
 * selection.Position() creates &lt;input&gt; element of type position
 * @param {string} [value=''] option content html
 * @return created element
 */
var Position = function (value)
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

/**
 * selection.Pre() creates &lt;pre&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Pre = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Progress() creates &lt;progress&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Progress = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Q() creates &lt;q&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Q = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Radio() creates &lt;input&gt; element of type radio
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Radio = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.Range() creates &lt;input&gt; element of type range
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Range = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.Reset() creates &lt;input&gt; element of type reset
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Reset = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.Resize() creates &lt;input&gt; element of type resize
 * @param {string} [value=''] option content html
 * @return created element
 */
var Resize = function (value)
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

/**
 * selection.Right() creates &lt;input&gt; element of type right
 * @param {string} [value=''] option content html
 * @return created element
 */
var Right = function (value)
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

/**
 * selection.Rowspan() creates &lt;input&gt; element of type rowspan
 * @param {string} [value=''] option content html
 * @return created element
 */
var Rowspan = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('rowspan');
  }
  else
  {
    return this.attr('rowspan', value);
  }
};

/**
 * selection.Rp() creates &lt;rp&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Rp = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Rt() creates &lt;rt&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Rt = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Rtc() creates &lt;rtc&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Rtc = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Ruby() creates &lt;ruby&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Ruby = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.S() creates &lt;s&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var S = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Samp() creates &lt;samp&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Samp = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Script() creates &lt;script&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Script = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Search() creates &lt;input&gt; element of type search
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Search = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.Section() creates &lt;section&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Section = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Select() creates &lt;select&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Select = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Selected() creates &lt;input&gt; element of type selected
 * @param {string} [value=''] option content html
 * @return created element
 */
var Selected = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('selected');
  }
  else
  {
    return this.attr('selected', value);
  }
};

/**
 * selection.Shadow() creates &lt;shadow&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Shadow = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Small() creates &lt;small&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Small = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Source() creates &lt;source&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Source = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Span() creates &lt;span&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Span = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Src() creates &lt;input&gt; element of type src
 * @param {string} [value=''] option content html
 * @return created element
 */
var Src = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('src');
  }
  else
  {
    return this.attr('src', value);
  }
};

/**
 * selection.Strong() creates &lt;strong&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Strong = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Sub() creates &lt;sub&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Sub = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Submit() creates &lt;input&gt; element of type submit
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Submit = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.Summary() creates &lt;summary&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Summary = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Sup() creates &lt;sup&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Sup = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Svg() creates &lt;svg&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Svg = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.TabSize() creates &lt;input&gt; element of type tab-size
 * @param {string} [value=''] option content html
 * @return created element
 */
var TabSize = function (value)
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

/**
 * selection.Tabindex() creates &lt;input&gt; element of type tabindex
 * @param {string} [value=''] option content html
 * @return created element
 */
var Tabindex = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('tabindex');
  }
  else
  {
    return this.attr('tabindex', value);
  }
};

/**
 * selection.Table() creates &lt;table&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Table = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.TableLayout() creates &lt;input&gt; element of type table-layout
 * @param {string} [value=''] option content html
 * @return created element
 */
var TableLayout = function (value)
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

/**
 * selection.Target() creates &lt;input&gt; element of type target
 * @param {string} [value=''] option content html
 * @return created element
 */
var Target = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('target');
  }
  else
  {
    return this.attr('target', value);
  }
};

/**
 * selection.Tbody() creates &lt;tbody&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Tbody = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Td() creates &lt;td&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Td = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Tel() creates &lt;input&gt; element of type tel
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Tel = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.Template() creates &lt;template&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Template = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Text() creates &lt;input&gt; element of type text
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Text = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.TextAlign() creates &lt;input&gt; element of type text-align
 * @param {string} [value=''] option content html
 * @return created element
 */
var TextAlign = function (value)
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

/**
 * selection.TextAlignLast() creates &lt;input&gt; element of type text-align-last
 * @param {string} [value=''] option content html
 * @return created element
 */
var TextAlignLast = function (value)
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

/**
 * selection.TextCombineUpright() creates &lt;input&gt; element of type text-combine-upright
 * @param {string} [value=''] option content html
 * @return created element
 */
var TextCombineUpright = function (value)
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

/**
 * selection.TextDecoration() creates &lt;input&gt; element of type text-decoration
 * @param {string} [value=''] option content html
 * @return created element
 */
var TextDecoration = function (value)
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

/**
 * selection.TextDecorationColor() creates &lt;input&gt; element of type text-decoration-color
 * @param {string} [value=''] option content html
 * @return created element
 */
var TextDecorationColor = function (value)
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

/**
 * selection.TextDecorationLine() creates &lt;input&gt; element of type text-decoration-line
 * @param {string} [value=''] option content html
 * @return created element
 */
var TextDecorationLine = function (value)
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

/**
 * selection.TextDecorationStyle() creates &lt;input&gt; element of type text-decoration-style
 * @param {string} [value=''] option content html
 * @return created element
 */
var TextDecorationStyle = function (value)
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

/**
 * selection.TextIndent() creates &lt;input&gt; element of type text-indent
 * @param {string} [value=''] option content html
 * @return created element
 */
var TextIndent = function (value)
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

/**
 * selection.TextJustify() creates &lt;input&gt; element of type text-justify
 * @param {string} [value=''] option content html
 * @return created element
 */
var TextJustify = function (value)
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

/**
 * selection.TextOverflow() creates &lt;input&gt; element of type text-overflow
 * @param {string} [value=''] option content html
 * @return created element
 */
var TextOverflow = function (value)
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

/**
 * selection.TextShadow() creates &lt;input&gt; element of type text-shadow
 * @param {string} [value=''] option content html
 * @return created element
 */
var TextShadow = function (value)
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

/**
 * selection.TextTransform() creates &lt;input&gt; element of type text-transform
 * @param {string} [value=''] option content html
 * @return created element
 */
var TextTransform = function (value)
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

/**
 * selection.TextUnderlinePosition() creates &lt;input&gt; element of type text-underline-position
 * @param {string} [value=''] option content html
 * @return created element
 */
var TextUnderlinePosition = function (value)
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

/**
 * selection.Textarea() creates &lt;textarea&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Textarea = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Tfoot() creates &lt;tfoot&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Tfoot = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Th() creates &lt;th&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Th = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Thead() creates &lt;thead&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Thead = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Time() creates &lt;input&gt; element of type time
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Time = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.Title() creates &lt;input&gt; element of type title
 * @param {string} [value=''] option content html
 * @return created element
 */
var Title = function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('title');
  }
  else
  {
    return this.attr('title', value);
  }
};

/**
 * selection.Top() creates &lt;input&gt; element of type top
 * @param {string} [value=''] option content html
 * @return created element
 */
var Top = function (value)
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

/**
 * selection.Tr() creates &lt;tr&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Tr = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Track() creates &lt;track&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Track = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.U() creates &lt;u&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var U = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Ul() creates &lt;ul&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Ul = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Url() creates &lt;input&gt; element of type url
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Url = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.UserSelect() creates &lt;input&gt; element of type user-select
 * @param {string} [value=''] option content html
 * @return created element
 */
var UserSelect = function (value)
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

/**
 * selection.Validity() creates &lt;input&gt; element of type validity
 * @param {string} [value=''] option content html
 * @return created element
 */
var Validity = function (value)
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

/**
 * selection.Value() creates &lt;input&gt; element of type value
 * @param {string} [value=''] option content html
 * @return created element
 */
var Value = function (value)
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

/**
 * selection.Var() creates &lt;var&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Var = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.VerticalAlign() creates &lt;input&gt; element of type vertical-align
 * @param {string} [value=''] option content html
 * @return created element
 */
var VerticalAlign = function (value)
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

/**
 * selection.Video() creates &lt;video&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Video = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Visibility() creates &lt;input&gt; element of type visibility
 * @param {string} [value=''] option content html
 * @return created element
 */
var Visibility = function (value)
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

/**
 * selection.Wbr() creates &lt;wbr&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Wbr = function (contents)
{
  return this.append(type)
    .html(contents || '');
};

/**
 * selection.Week() creates &lt;input&gt; element of type week
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Week = function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
};

/**
 * selection.WhiteSpace() creates &lt;input&gt; element of type white-space
 * @param {string} [value=''] option content html
 * @return created element
 */
var WhiteSpace = function (value)
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

/**
 * selection.Width() creates &lt;input&gt; element of type width
 * @param {string} [value=''] option content html
 * @return created element
 */
var Width = function (value)
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

/**
 * selection.WordBreak() creates &lt;input&gt; element of type word-break
 * @param {string} [value=''] option content html
 * @return created element
 */
var WordBreak = function (value)
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

/**
 * selection.WordSpacing() creates &lt;input&gt; element of type word-spacing
 * @param {string} [value=''] option content html
 * @return created element
 */
var WordSpacing = function (value)
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

/**
 * selection.WordWrap() creates &lt;input&gt; element of type word-wrap
 * @param {string} [value=''] option content html
 * @return created element
 */
var WordWrap = function (value)
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

/**
 * selection.ZIndex() creates &lt;input&gt; element of type z-index
 * @param {string} [value=''] option content html
 * @return created element
 */
var ZIndex = function (value)
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

/**
 * selection.clear() empties selected container
 */
var clear = function ()
{
  return this.text('');
};

var d3 = window && window.d3 || require("d3-selection");
var selection = d3.selection;
selection.prototype.A = A;
selection.prototype.Abbr = Abbr;
selection.prototype.Accept = Accept;
selection.prototype.Accesskey = Accesskey;
selection.prototype.Action = Action;
selection.prototype.Address = Address;
selection.prototype.AlignContent = AlignContent;
selection.prototype.AlignItems = AlignItems;
selection.prototype.AlignSelf = AlignSelf;
selection.prototype.Alt = Alt;
selection.prototype.Area = Area;
selection.prototype.Article = Article;
selection.prototype.Aside = Aside;
selection.prototype.Audio = Audio;
selection.prototype.Autocomplete = Autocomplete;
selection.prototype.Autofocus = Autofocus;
selection.prototype.B = B;
selection.prototype.Background = Background;
selection.prototype.BackgroundAttachment = BackgroundAttachment;
selection.prototype.BackgroundBlendMode = BackgroundBlendMode;
selection.prototype.BackgroundClip = BackgroundClip;
selection.prototype.BackgroundColor = BackgroundColor;
selection.prototype.BackgroundImage = BackgroundImage;
selection.prototype.BackgroundOrigin = BackgroundOrigin;
selection.prototype.BackgroundPosition = BackgroundPosition;
selection.prototype.BackgroundRepeat = BackgroundRepeat;
selection.prototype.BackgroundSize = BackgroundSize;
selection.prototype.Base = Base;
selection.prototype.Bdi = Bdi;
selection.prototype.Bdo = Bdo;
selection.prototype.Blockquote = Blockquote;
selection.prototype.Border = Border;
selection.prototype.BorderBottom = BorderBottom;
selection.prototype.BorderBottomColor = BorderBottomColor;
selection.prototype.BorderBottomLeftRadius = BorderBottomLeftRadius;
selection.prototype.BorderBottomRightRadius = BorderBottomRightRadius;
selection.prototype.BorderBottomStyle = BorderBottomStyle;
selection.prototype.BorderBottomWidth = BorderBottomWidth;
selection.prototype.BorderCollapse = BorderCollapse;
selection.prototype.BorderColor = BorderColor;
selection.prototype.BorderImage = BorderImage;
selection.prototype.BorderImageOutset = BorderImageOutset;
selection.prototype.BorderImageRepeat = BorderImageRepeat;
selection.prototype.BorderImageSlice = BorderImageSlice;
selection.prototype.BorderImageSource = BorderImageSource;
selection.prototype.BorderImageWidth = BorderImageWidth;
selection.prototype.BorderLeft = BorderLeft;
selection.prototype.BorderLeftColor = BorderLeftColor;
selection.prototype.BorderLeftStyle = BorderLeftStyle;
selection.prototype.BorderLeftWidth = BorderLeftWidth;
selection.prototype.BorderRadius = BorderRadius;
selection.prototype.BorderRight = BorderRight;
selection.prototype.BorderRightColor = BorderRightColor;
selection.prototype.BorderRightStyle = BorderRightStyle;
selection.prototype.BorderRightWidth = BorderRightWidth;
selection.prototype.BorderSpacing = BorderSpacing;
selection.prototype.BorderStyle = BorderStyle;
selection.prototype.BorderTop = BorderTop;
selection.prototype.BorderTopColor = BorderTopColor;
selection.prototype.BorderTopLeftRadius = BorderTopLeftRadius;
selection.prototype.BorderTopRightRadius = BorderTopRightRadius;
selection.prototype.BorderTopStyle = BorderTopStyle;
selection.prototype.BorderTopWidth = BorderTopWidth;
selection.prototype.BorderWidth = BorderWidth;
selection.prototype.Bottom = Bottom;
selection.prototype.BoxDecorationBreak = BoxDecorationBreak;
selection.prototype.BoxShadow = BoxShadow;
selection.prototype.BoxSizing = BoxSizing;
selection.prototype.Br = Br;
selection.prototype.Button = Button;
selection.prototype.Canvas = Canvas;
selection.prototype.Caption = Caption;
selection.prototype.CaptionSide = CaptionSide;
selection.prototype.Checkbox = Checkbox;
selection.prototype.Checked = Checked;
selection.prototype.Children = Children;
selection.prototype.Cite = Cite;
selection.prototype.Class = Class;
selection.prototype.Clear = Clear;
selection.prototype.Clip = Clip;
selection.prototype.Code = Code;
selection.prototype.Col = Col;
selection.prototype.Colgroup = Colgroup;
selection.prototype.Color = Color;
selection.prototype.Cols = Cols;
selection.prototype.Colspan = Colspan;
selection.prototype.Content = Content;
selection.prototype.ContentEditable = ContentEditable;
selection.prototype.Cursor = Cursor;
selection.prototype.Data = Data;
selection.prototype.Datalist = Datalist;
selection.prototype.Date = Date;
selection.prototype.DatetimeLocal = DatetimeLocal;
selection.prototype.Dd = Dd;
selection.prototype.Del = Del;
selection.prototype.Details = Details;
selection.prototype.Dfn = Dfn;
selection.prototype.Disabled = Disabled;
selection.prototype.Display = Display;
selection.prototype.Div = Div;
selection.prototype.Dl = Dl;
selection.prototype.Download = Download;
selection.prototype.Draggable = Draggable;
selection.prototype.Dropzone = Dropzone;
selection.prototype.Dt = Dt;
selection.prototype.Element = Element;
selection.prototype.Em = Em;
selection.prototype.Email = Email;
selection.prototype.Embed = Embed;
selection.prototype.EmptyCells = EmptyCells;
selection.prototype.Enctype = Enctype;
selection.prototype.Fieldset = Fieldset;
selection.prototype.Figcaption = Figcaption;
selection.prototype.Figure = Figure;
selection.prototype.File = File;
selection.prototype.Flex = Flex;
selection.prototype.FlexBasis = FlexBasis;
selection.prototype.FlexDirection = FlexDirection;
selection.prototype.FlexFlow = FlexFlow;
selection.prototype.FlexGrow = FlexGrow;
selection.prototype.FlexShrink = FlexShrink;
selection.prototype.FlexWrap = FlexWrap;
selection.prototype.Float = Float;
selection.prototype.Font = Font;
selection.prototype.FontFamily = FontFamily;
selection.prototype.FontFeatureSettings = FontFeatureSettings;
selection.prototype.FontKerning = FontKerning;
selection.prototype.FontLanguageOverride = FontLanguageOverride;
selection.prototype.FontSize = FontSize;
selection.prototype.FontSizeAdjust = FontSizeAdjust;
selection.prototype.FontStretch = FontStretch;
selection.prototype.FontStyle = FontStyle;
selection.prototype.FontSynthesis = FontSynthesis;
selection.prototype.FontVariant = FontVariant;
selection.prototype.FontVariantAlternates = FontVariantAlternates;
selection.prototype.FontVariantCaps = FontVariantCaps;
selection.prototype.FontVariantEastAsian = FontVariantEastAsian;
selection.prototype.FontVariantLigatures = FontVariantLigatures;
selection.prototype.FontVariantNumeric = FontVariantNumeric;
selection.prototype.FontVariantPosition = FontVariantPosition;
selection.prototype.FontWeight = FontWeight;
selection.prototype.Footer = Footer;
selection.prototype.For = For;
selection.prototype.Form = Form;
selection.prototype.Formaction = Formaction;
selection.prototype.H1 = H1;
selection.prototype.H2 = H2;
selection.prototype.H3 = H3;
selection.prototype.H4 = H4;
selection.prototype.H5 = H5;
selection.prototype.H6 = H6;
selection.prototype.HangingPunctuation = HangingPunctuation;
selection.prototype.HashStateRouter = HashStateRouter;
selection.prototype.Header = Header;
selection.prototype.Height = Height;
selection.prototype.Hidden = Hidden;
selection.prototype.Hr = Hr;
selection.prototype.Href = Href;
selection.prototype.Hyphens = Hyphens;
selection.prototype.I = I;
selection.prototype.Id = Id;
selection.prototype.Iframe = Iframe;
selection.prototype.Image = Image;
selection.prototype.ImeMode = ImeMode;
selection.prototype.Img = Img;
selection.prototype.Input = Input;
selection.prototype.InputCheckbox = InputCheckbox;
selection.prototype.InputColor = InputColor;
selection.prototype.InputDate = InputDate;
selection.prototype.InputDatetimeLocal = InputDatetimeLocal;
selection.prototype.InputEmail = InputEmail;
selection.prototype.InputFile = InputFile;
selection.prototype.InputHidden = InputHidden;
selection.prototype.InputImage = InputImage;
selection.prototype.InputMonth = InputMonth;
selection.prototype.InputNumber = InputNumber;
selection.prototype.InputPassword = InputPassword;
selection.prototype.InputRadio = InputRadio;
selection.prototype.InputRange = InputRange;
selection.prototype.InputReset = InputReset;
selection.prototype.InputSearch = InputSearch;
selection.prototype.InputSubmit = InputSubmit;
selection.prototype.InputTel = InputTel;
selection.prototype.InputText = InputText;
selection.prototype.InputTime = InputTime;
selection.prototype.InputUrl = InputUrl;
selection.prototype.InputWeek = InputWeek;
selection.prototype.Ins = Ins;
selection.prototype.JustifyContent = JustifyContent;
selection.prototype.Kbd = Kbd;
selection.prototype.Label = Label;
selection.prototype.Left = Left;
selection.prototype.Legend = Legend;
selection.prototype.LetterSpacing = LetterSpacing;
selection.prototype.Li = Li;
selection.prototype.LineBreak = LineBreak;
selection.prototype.LineHeight = LineHeight;
selection.prototype.Link = Link;
selection.prototype.Main = Main;
selection.prototype.Map = Map;
selection.prototype.Margin = Margin;
selection.prototype.MarginBottom = MarginBottom;
selection.prototype.MarginLeft = MarginLeft;
selection.prototype.MarginRight = MarginRight;
selection.prototype.MarginTop = MarginTop;
selection.prototype.Mark = Mark;
selection.prototype.MaxHeight = MaxHeight;
selection.prototype.MaxWidth = MaxWidth;
selection.prototype.Media = Media;
selection.prototype.Meta = Meta;
selection.prototype.Meter = Meter;
selection.prototype.Method = Method;
selection.prototype.MinHeight = MinHeight;
selection.prototype.MinWidth = MinWidth;
selection.prototype.Month = Month;
selection.prototype.Name = Name;
selection.prototype.Nav = Nav;
selection.prototype.NavDown = NavDown;
selection.prototype.NavIndex = NavIndex;
selection.prototype.NavLeft = NavLeft;
selection.prototype.NavRight = NavRight;
selection.prototype.NavUp = NavUp;
selection.prototype.Noframes = Noframes;
selection.prototype.Noscript = Noscript;
selection.prototype.Number = Number;
selection.prototype.Object = Object$1;
selection.prototype.Ol = Ol;
selection.prototype.OnAbort = OnAbort;
selection.prototype.OnAfterprint = OnAfterprint;
selection.prototype.OnBeforeprint = OnBeforeprint;
selection.prototype.OnBeforeunload = OnBeforeunload;
selection.prototype.OnBlur = OnBlur;
selection.prototype.OnCanplay = OnCanplay;
selection.prototype.OnCanplaythrough = OnCanplaythrough;
selection.prototype.OnChange = OnChange;
selection.prototype.OnClick = OnClick;
selection.prototype.OnContextmenu = OnContextmenu;
selection.prototype.OnCopy = OnCopy;
selection.prototype.OnCuechange = OnCuechange;
selection.prototype.OnCut = OnCut;
selection.prototype.OnDblclick = OnDblclick;
selection.prototype.OnDrag = OnDrag;
selection.prototype.OnDragend = OnDragend;
selection.prototype.OnDragenter = OnDragenter;
selection.prototype.OnDragleave = OnDragleave;
selection.prototype.OnDragover = OnDragover;
selection.prototype.OnDragstart = OnDragstart;
selection.prototype.OnDrop = OnDrop;
selection.prototype.OnDurationchange = OnDurationchange;
selection.prototype.OnEmptied = OnEmptied;
selection.prototype.OnEnded = OnEnded;
selection.prototype.OnError = OnError;
selection.prototype.OnFocus = OnFocus;
selection.prototype.OnHashchange = OnHashchange;
selection.prototype.OnInput = OnInput;
selection.prototype.OnInvalid = OnInvalid;
selection.prototype.OnKeydown = OnKeydown;
selection.prototype.OnKeypress = OnKeypress;
selection.prototype.OnKeyup = OnKeyup;
selection.prototype.OnLoad = OnLoad;
selection.prototype.OnLoadeddata = OnLoadeddata;
selection.prototype.OnLoadedmetadata = OnLoadedmetadata;
selection.prototype.OnLoadstart = OnLoadstart;
selection.prototype.OnMessage = OnMessage;
selection.prototype.OnMousedown = OnMousedown;
selection.prototype.OnMousemove = OnMousemove;
selection.prototype.OnMouseout = OnMouseout;
selection.prototype.OnMouseover = OnMouseover;
selection.prototype.OnMouseup = OnMouseup;
selection.prototype.OnMousewheel = OnMousewheel;
selection.prototype.OnOffline = OnOffline;
selection.prototype.OnOnline = OnOnline;
selection.prototype.OnPagehide = OnPagehide;
selection.prototype.OnPageshow = OnPageshow;
selection.prototype.OnPaste = OnPaste;
selection.prototype.OnPause = OnPause;
selection.prototype.OnPlay = OnPlay;
selection.prototype.OnPlaying = OnPlaying;
selection.prototype.OnPopstate = OnPopstate;
selection.prototype.OnProgress = OnProgress;
selection.prototype.OnRatechange = OnRatechange;
selection.prototype.OnReset = OnReset;
selection.prototype.OnResize = OnResize;
selection.prototype.OnScroll = OnScroll;
selection.prototype.OnSearch = OnSearch;
selection.prototype.OnSeeked = OnSeeked;
selection.prototype.OnSeeking = OnSeeking;
selection.prototype.OnSelect = OnSelect;
selection.prototype.OnShow = OnShow;
selection.prototype.OnStalled = OnStalled;
selection.prototype.OnStorage = OnStorage;
selection.prototype.OnSubmit = OnSubmit;
selection.prototype.OnSuspend = OnSuspend;
selection.prototype.OnTimeupdate = OnTimeupdate;
selection.prototype.OnToggle = OnToggle;
selection.prototype.OnUnload = OnUnload;
selection.prototype.OnVolumechange = OnVolumechange;
selection.prototype.OnWaiting = OnWaiting;
selection.prototype.OnWheel = OnWheel;
selection.prototype.Optgroup = Optgroup;
selection.prototype.Option = Option;
selection.prototype.Options = Options;
selection.prototype.Order = Order;
selection.prototype.Outline = Outline;
selection.prototype.OutlineColor = OutlineColor;
selection.prototype.OutlineOffset = OutlineOffset;
selection.prototype.OutlineStyle = OutlineStyle;
selection.prototype.OutlineWidth = OutlineWidth;
selection.prototype.Output = Output;
selection.prototype.Overflow = Overflow;
selection.prototype.OverflowWrap = OverflowWrap;
selection.prototype.OverflowX = OverflowX;
selection.prototype.OverflowY = OverflowY;
selection.prototype.P = P;
selection.prototype.Padding = Padding;
selection.prototype.PaddingBottom = PaddingBottom;
selection.prototype.PaddingLeft = PaddingLeft;
selection.prototype.PaddingRight = PaddingRight;
selection.prototype.PaddingTop = PaddingTop;
selection.prototype.Param = Param;
selection.prototype.ParentNode = ParentNode;
selection.prototype.Password = Password;
selection.prototype.Pattern = Pattern;
selection.prototype.Placeholder = Placeholder;
selection.prototype.Position = Position;
selection.prototype.Pre = Pre;
selection.prototype.Progress = Progress;
selection.prototype.Q = Q;
selection.prototype.Radio = Radio;
selection.prototype.Range = Range;
selection.prototype.Reset = Reset;
selection.prototype.Resize = Resize;
selection.prototype.Right = Right;
selection.prototype.Rowspan = Rowspan;
selection.prototype.Rp = Rp;
selection.prototype.Rt = Rt;
selection.prototype.Rtc = Rtc;
selection.prototype.Ruby = Ruby;
selection.prototype.S = S;
selection.prototype.Samp = Samp;
selection.prototype.Script = Script;
selection.prototype.Search = Search;
selection.prototype.Section = Section;
selection.prototype.Select = Select;
selection.prototype.Selected = Selected;
selection.prototype.Shadow = Shadow;
selection.prototype.Small = Small;
selection.prototype.Source = Source;
selection.prototype.Span = Span;
selection.prototype.Src = Src;
selection.prototype.Strong = Strong;
selection.prototype.Sub = Sub;
selection.prototype.Submit = Submit;
selection.prototype.Summary = Summary;
selection.prototype.Sup = Sup;
selection.prototype.Svg = Svg;
selection.prototype.TabSize = TabSize;
selection.prototype.Tabindex = Tabindex;
selection.prototype.Table = Table;
selection.prototype.TableLayout = TableLayout;
selection.prototype.Target = Target;
selection.prototype.Tbody = Tbody;
selection.prototype.Td = Td;
selection.prototype.Tel = Tel;
selection.prototype.Template = Template;
selection.prototype.Text = Text;
selection.prototype.TextAlign = TextAlign;
selection.prototype.TextAlignLast = TextAlignLast;
selection.prototype.TextCombineUpright = TextCombineUpright;
selection.prototype.TextDecoration = TextDecoration;
selection.prototype.TextDecorationColor = TextDecorationColor;
selection.prototype.TextDecorationLine = TextDecorationLine;
selection.prototype.TextDecorationStyle = TextDecorationStyle;
selection.prototype.TextIndent = TextIndent;
selection.prototype.TextJustify = TextJustify;
selection.prototype.TextOverflow = TextOverflow;
selection.prototype.TextShadow = TextShadow;
selection.prototype.TextTransform = TextTransform;
selection.prototype.TextUnderlinePosition = TextUnderlinePosition;
selection.prototype.Textarea = Textarea;
selection.prototype.Tfoot = Tfoot;
selection.prototype.Th = Th;
selection.prototype.Thead = Thead;
selection.prototype.Time = Time;
selection.prototype.Title = Title;
selection.prototype.Top = Top;
selection.prototype.Tr = Tr;
selection.prototype.Track = Track;
selection.prototype.U = U;
selection.prototype.Ul = Ul;
selection.prototype.Url = Url;
selection.prototype.UserSelect = UserSelect;
selection.prototype.Validity = Validity;
selection.prototype.Value = Value;
selection.prototype.Var = Var;
selection.prototype.VerticalAlign = VerticalAlign;
selection.prototype.Video = Video;
selection.prototype.Visibility = Visibility;
selection.prototype.Wbr = Wbr;
selection.prototype.Week = Week;
selection.prototype.WhiteSpace = WhiteSpace;
selection.prototype.Width = Width;
selection.prototype.WordBreak = WordBreak;
selection.prototype.WordSpacing = WordSpacing;
selection.prototype.WordWrap = WordWrap;
selection.prototype.ZIndex = ZIndex;
selection.prototype.clear = clear;

})));

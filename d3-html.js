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
  return this.append('a')
    .html(contents || '');
};

/**
 * selection.Abbr() creates &lt;abbr&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Abbr = function (contents)
{
  return this.append('abbr')
    .html(contents || '');
};

/**
 * selection.Accept() get or change accept attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
 * selection.Accesskey() get or change accesskey attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
 * selection.Action() get or change action attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
  return this.append('address')
    .html(contents || '');
};

/**
 * selection.AlignContent() get or change align-content style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var AlignContent = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('align-content');
  }
  else
  {
    return this.style('align-content', value);
  }
};

/**
 * selection.AlignItems() get or change align-items style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var AlignItems = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('align-items');
  }
  else
  {
    return this.style('align-items', value);
  }
};

/**
 * selection.AlignSelf() get or change align-self style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var AlignSelf = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('align-self');
  }
  else
  {
    return this.style('align-self', value);
  }
};

/**
 * selection.Alt() get or change alt attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
  return this.append('area')
    .html(contents || '');
};

/**
 * selection.Article() creates &lt;article&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Article = function (contents)
{
  return this.append('article')
    .html(contents || '');
};

/**
 * selection.Aside() creates &lt;aside&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Aside = function (contents)
{
  return this.append('aside')
    .html(contents || '');
};

/**
 * selection.Audio() creates &lt;audio&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Audio = function (contents)
{
  return this.append('audio')
    .html(contents || '');
};

/**
 * selection.Autocomplete() get or change autocomplete attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
 * selection.Autofocus() get or change autofocus attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
  return this.append('b')
    .html(contents || '');
};

/**
 * selection.Background() get or change background style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Background = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('background');
  }
  else
  {
    return this.style('background', value);
  }
};

/**
 * selection.BackgroundAttachment() get or change background-attachment style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BackgroundAttachment = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('background-attachment');
  }
  else
  {
    return this.style('background-attachment', value);
  }
};

/**
 * selection.BackgroundBlendMode() get or change background-blend-mode style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BackgroundBlendMode = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('background-blend-mode');
  }
  else
  {
    return this.style('background-blend-mode', value);
  }
};

/**
 * selection.BackgroundClip() get or change background-clip style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BackgroundClip = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('background-clip');
  }
  else
  {
    return this.style('background-clip', value);
  }
};

/**
 * selection.BackgroundColor() get or change background-color style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BackgroundColor = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('background-color');
  }
  else
  {
    return this.style('background-color', value);
  }
};

/**
 * selection.BackgroundImage() get or change background-image style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BackgroundImage = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('background-image');
  }
  else
  {
    return this.style('background-image', value);
  }
};

/**
 * selection.BackgroundOrigin() get or change background-origin style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BackgroundOrigin = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('background-origin');
  }
  else
  {
    return this.style('background-origin', value);
  }
};

/**
 * selection.BackgroundPosition() get or change background-position style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BackgroundPosition = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('background-position');
  }
  else
  {
    return this.style('background-position', value);
  }
};

/**
 * selection.BackgroundRepeat() get or change background-repeat style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BackgroundRepeat = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('background-repeat');
  }
  else
  {
    return this.style('background-repeat', value);
  }
};

/**
 * selection.BackgroundSize() get or change background-size style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BackgroundSize = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('background-size');
  }
  else
  {
    return this.style('background-size', value);
  }
};

/**
 * selection.Base() creates &lt;base&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Base = function (contents)
{
  return this.append('base')
    .html(contents || '');
};

/**
 * selection.Bdi() creates &lt;bdi&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Bdi = function (contents)
{
  return this.append('bdi')
    .html(contents || '');
};

/**
 * selection.Bdo() creates &lt;bdo&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Bdo = function (contents)
{
  return this.append('bdo')
    .html(contents || '');
};

/**
 * selection.Blockquote() creates &lt;blockquote&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Blockquote = function (contents)
{
  return this.append('blockquote')
    .html(contents || '');
};

/**
 * selection.Border() get or change border style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Border = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border');
  }
  else
  {
    return this.style('border', value);
  }
};

/**
 * selection.BorderBottom() get or change border-bottom style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderBottom = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-bottom');
  }
  else
  {
    return this.style('border-bottom', value);
  }
};

/**
 * selection.BorderBottomColor() get or change border-bottom-color style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderBottomColor = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-bottom-color');
  }
  else
  {
    return this.style('border-bottom-color', value);
  }
};

/**
 * selection.BorderBottomLeftRadius() get or change border-bottom-left-radius style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderBottomLeftRadius = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-bottom-left-radius');
  }
  else
  {
    return this.style('border-bottom-left-radius', value);
  }
};

/**
 * selection.BorderBottomRightRadius() get or change border-bottom-right-radius style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderBottomRightRadius = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-bottom-right-radius');
  }
  else
  {
    return this.style('border-bottom-right-radius', value);
  }
};

/**
 * selection.BorderBottomStyle() get or change border-bottom-style style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderBottomStyle = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-bottom-style');
  }
  else
  {
    return this.style('border-bottom-style', value);
  }
};

/**
 * selection.BorderBottomWidth() get or change border-bottom-width style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderBottomWidth = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-bottom-width');
  }
  else
  {
    return this.style('border-bottom-width', value);
  }
};

/**
 * selection.BorderCollapse() get or change border-collapse style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderCollapse = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-collapse');
  }
  else
  {
    return this.style('border-collapse', value);
  }
};

/**
 * selection.BorderColor() get or change border-color style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderColor = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-color');
  }
  else
  {
    return this.style('border-color', value);
  }
};

/**
 * selection.BorderImage() get or change border-image style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderImage = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-image');
  }
  else
  {
    return this.style('border-image', value);
  }
};

/**
 * selection.BorderImageOutset() get or change border-image-outset style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderImageOutset = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-image-outset');
  }
  else
  {
    return this.style('border-image-outset', value);
  }
};

/**
 * selection.BorderImageRepeat() get or change border-image-repeat style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderImageRepeat = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-image-repeat');
  }
  else
  {
    return this.style('border-image-repeat', value);
  }
};

/**
 * selection.BorderImageSlice() get or change border-image-slice style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderImageSlice = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-image-slice');
  }
  else
  {
    return this.style('border-image-slice', value);
  }
};

/**
 * selection.BorderImageSource() get or change border-image-source style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderImageSource = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-image-source');
  }
  else
  {
    return this.style('border-image-source', value);
  }
};

/**
 * selection.BorderImageWidth() get or change border-image-width style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderImageWidth = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-image-width');
  }
  else
  {
    return this.style('border-image-width', value);
  }
};

/**
 * selection.BorderLeft() get or change border-left style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderLeft = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-left');
  }
  else
  {
    return this.style('border-left', value);
  }
};

/**
 * selection.BorderLeftColor() get or change border-left-color style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderLeftColor = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-left-color');
  }
  else
  {
    return this.style('border-left-color', value);
  }
};

/**
 * selection.BorderLeftStyle() get or change border-left-style style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderLeftStyle = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-left-style');
  }
  else
  {
    return this.style('border-left-style', value);
  }
};

/**
 * selection.BorderLeftWidth() get or change border-left-width style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderLeftWidth = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-left-width');
  }
  else
  {
    return this.style('border-left-width', value);
  }
};

/**
 * selection.BorderRadius() get or change border-radius style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderRadius = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-radius');
  }
  else
  {
    return this.style('border-radius', value);
  }
};

/**
 * selection.BorderRight() get or change border-right style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderRight = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-right');
  }
  else
  {
    return this.style('border-right', value);
  }
};

/**
 * selection.BorderRightColor() get or change border-right-color style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderRightColor = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-right-color');
  }
  else
  {
    return this.style('border-right-color', value);
  }
};

/**
 * selection.BorderRightStyle() get or change border-right-style style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderRightStyle = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-right-style');
  }
  else
  {
    return this.style('border-right-style', value);
  }
};

/**
 * selection.BorderRightWidth() get or change border-right-width style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderRightWidth = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-right-width');
  }
  else
  {
    return this.style('border-right-width', value);
  }
};

/**
 * selection.BorderSpacing() get or change border-spacing style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderSpacing = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-spacing');
  }
  else
  {
    return this.style('border-spacing', value);
  }
};

/**
 * selection.BorderStyle() get or change border-style style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderStyle = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-style');
  }
  else
  {
    return this.style('border-style', value);
  }
};

/**
 * selection.BorderTop() get or change border-top style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderTop = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-top');
  }
  else
  {
    return this.style('border-top', value);
  }
};

/**
 * selection.BorderTopColor() get or change border-top-color style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderTopColor = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-top-color');
  }
  else
  {
    return this.style('border-top-color', value);
  }
};

/**
 * selection.BorderTopLeftRadius() get or change border-top-left-radius style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderTopLeftRadius = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-top-left-radius');
  }
  else
  {
    return this.style('border-top-left-radius', value);
  }
};

/**
 * selection.BorderTopRightRadius() get or change border-top-right-radius style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderTopRightRadius = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-top-right-radius');
  }
  else
  {
    return this.style('border-top-right-radius', value);
  }
};

/**
 * selection.BorderTopStyle() get or change border-top-style style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderTopStyle = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-top-style');
  }
  else
  {
    return this.style('border-top-style', value);
  }
};

/**
 * selection.BorderTopWidth() get or change border-top-width style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderTopWidth = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-top-width');
  }
  else
  {
    return this.style('border-top-width', value);
  }
};

/**
 * selection.BorderWidth() get or change border-width style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BorderWidth = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-width');
  }
  else
  {
    return this.style('border-width', value);
  }
};

/**
 * selection.Bottom() get or change bottom style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Bottom = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('bottom');
  }
  else
  {
    return this.style('bottom', value);
  }
};

/**
 * selection.BoxDecorationBreak() get or change box-decoration-break style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BoxDecorationBreak = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('box-decoration-break');
  }
  else
  {
    return this.style('box-decoration-break', value);
  }
};

/**
 * selection.BoxShadow() get or change box-shadow style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BoxShadow = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('box-shadow');
  }
  else
  {
    return this.style('box-shadow', value);
  }
};

/**
 * selection.BoxSizing() get or change box-sizing style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var BoxSizing = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('box-sizing');
  }
  else
  {
    return this.style('box-sizing', value);
  }
};

/**
 * selection.Br() creates &lt;br&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Br = function (contents)
{
  return this.append('br')
    .html(contents || '');
};

/**
 * selection.Button() creates &lt;button&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Button = function (contents)
{
  return this.append('button')
    .html(contents || '');
};

/**
 * selection.Canvas() creates &lt;canvas&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Canvas = function (contents)
{
  return this.append('canvas')
    .html(contents || '');
};

/**
 * selection.Caption() creates &lt;caption&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Caption = function (contents)
{
  return this.append('caption')
    .html(contents || '');
};

/**
 * selection.CaptionSide() get or change caption-side style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var CaptionSide = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('caption-side');
  }
  else
  {
    return this.style('caption-side', value);
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
    .attr('type', 'checkbox')
    .html(contents || '');
};

/**
 * selection.Checked() get or change checked property value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Checked = function (value)
{
  if (arguments.length < 1)
  {
    return this.property('checked');
  }
  else
  {
    return this.property('checked', value);
  }
};

/**
 * selection.Children() syncs children of an element to array of data elements
 *
 * Basically, is a wrapper for d3-selection enter and exit pattern.
 *
 * @param {string} [arrayData=''] array of data
 * @param {string} [childElementTagName=''] top level tag name
 * @param {string} [updateCallback=''] callback called to build or update child element
 * @return selected
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
  return this.append('cite')
    .html(contents || '');
};

/**
 * selection.Class() get or change class attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
 * selection.Clear() get or change clear style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Clear = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('clear');
  }
  else
  {
    return this.style('clear', value);
  }
};

/**
 * selection.Clip() get or change clip style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Clip = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('clip');
  }
  else
  {
    return this.style('clip', value);
  }
};

/**
 * selection.Code() creates &lt;code&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Code = function (contents)
{
  return this.append('code')
    .html(contents || '');
};

/**
 * selection.Col() creates &lt;col&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Col = function (contents)
{
  return this.append('col')
    .html(contents || '');
};

/**
 * selection.Colgroup() creates &lt;colgroup&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Colgroup = function (contents)
{
  return this.append('colgroup')
    .html(contents || '');
};

/**
 * selection.Color() get or change color style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Color = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('color');
  }
  else
  {
    return this.style('color', value);
  }
};

/**
 * selection.Cols() get or change cols attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
 * selection.Colspan() get or change colspan attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
 * selection.Content() get or change content style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Content = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('content');
  }
  else
  {
    return this.style('content', value);
  }
};

/**
 * selection.ContentEditable() get or change contentEditable attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
 * selection.Cursor() get or change cursor style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Cursor = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('cursor');
  }
  else
  {
    return this.style('cursor', value);
  }
};

/**
 * selection.Data() creates &lt;data&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Data = function (contents)
{
  return this.append('data')
    .html(contents || '');
};

/**
 * selection.Datalist() creates &lt;datalist&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Datalist = function (contents)
{
  return this.append('datalist')
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
    .attr('type', 'date')
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
    .attr('type', 'datetime-local')
    .html(contents || '');
};

/**
 * selection.Dd() creates &lt;dd&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Dd = function (contents)
{
  return this.append('dd')
    .html(contents || '');
};

/**
 * selection.Del() creates &lt;del&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Del = function (contents)
{
  return this.append('del')
    .html(contents || '');
};

/**
 * selection.Details() creates &lt;details&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Details = function (contents)
{
  return this.append('details')
    .html(contents || '');
};

/**
 * selection.Dfn() creates &lt;dfn&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Dfn = function (contents)
{
  return this.append('dfn')
    .html(contents || '');
};

/**
 * selection.Disabled() get or change disabled attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
 * selection.Display() get or change display style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Display = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('display');
  }
  else
  {
    return this.style('display', value);
  }
};

/**
 * selection.Div() creates &lt;div&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Div = function (contents)
{
  return this.append('div')
    .html(contents || '');
};

/**
 * selection.Dl() creates &lt;dl&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Dl = function (contents)
{
  return this.append('dl')
    .html(contents || '');
};

/**
 * selection.Download() get or change download attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
 * selection.Draggable() get or change draggable attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
 * selection.Dropzone() get or change dropzone attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
  return this.append('dt')
    .html(contents || '');
};

/**
 * selection.Element() creates &lt;element&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Element = function (contents)
{
  return this.append('element')
    .html(contents || '');
};

/**
 * selection.Em() creates &lt;em&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Em = function (contents)
{
  return this.append('em')
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
    .attr('type', 'email')
    .html(contents || '');
};

/**
 * selection.Embed() creates &lt;embed&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Embed = function (contents)
{
  return this.append('embed')
    .html(contents || '');
};

/**
 * selection.EmptyCells() get or change empty-cells style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var EmptyCells = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('empty-cells');
  }
  else
  {
    return this.style('empty-cells', value);
  }
};

/**
 * selection.Enctype() get or change enctype attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
  return this.append('fieldset')
    .html(contents || '');
};

/**
 * selection.Figcaption() creates &lt;figcaption&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Figcaption = function (contents)
{
  return this.append('figcaption')
    .html(contents || '');
};

/**
 * selection.Figure() creates &lt;figure&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Figure = function (contents)
{
  return this.append('figure')
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
    .attr('type', 'file')
    .html(contents || '');
};

/**
 * selection.Flex() get or change flex style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Flex = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('flex');
  }
  else
  {
    return this.style('flex', value);
  }
};

/**
 * selection.FlexBasis() get or change flex-basis style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FlexBasis = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('flex-basis');
  }
  else
  {
    return this.style('flex-basis', value);
  }
};

/**
 * selection.FlexDirection() get or change flex-direction style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FlexDirection = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('flex-direction');
  }
  else
  {
    return this.style('flex-direction', value);
  }
};

/**
 * selection.FlexFlow() get or change flex-flow style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FlexFlow = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('flex-flow');
  }
  else
  {
    return this.style('flex-flow', value);
  }
};

/**
 * selection.FlexGrow() get or change flex-grow style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FlexGrow = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('flex-grow');
  }
  else
  {
    return this.style('flex-grow', value);
  }
};

/**
 * selection.FlexShrink() get or change flex-shrink style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FlexShrink = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('flex-shrink');
  }
  else
  {
    return this.style('flex-shrink', value);
  }
};

/**
 * selection.FlexWrap() get or change flex-wrap style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FlexWrap = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('flex-wrap');
  }
  else
  {
    return this.style('flex-wrap', value);
  }
};

/**
 * selection.Float() get or change float style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Float = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('float');
  }
  else
  {
    return this.style('float', value);
  }
};

/**
 * selection.Font() get or change font style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Font = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font');
  }
  else
  {
    return this.style('font', value);
  }
};

/**
 * selection.FontFamily() get or change font-family style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FontFamily = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-family');
  }
  else
  {
    return this.style('font-family', value);
  }
};

/**
 * selection.FontFeatureSettings() get or change font-feature-settings style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FontFeatureSettings = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-feature-settings');
  }
  else
  {
    return this.style('font-feature-settings', value);
  }
};

/**
 * selection.FontKerning() get or change font-kerning style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FontKerning = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-kerning');
  }
  else
  {
    return this.style('font-kerning', value);
  }
};

/**
 * selection.FontLanguageOverride() get or change font-language-override style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FontLanguageOverride = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-language-override');
  }
  else
  {
    return this.style('font-language-override', value);
  }
};

/**
 * selection.FontSize() get or change font-size style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FontSize = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-size');
  }
  else
  {
    return this.style('font-size', value);
  }
};

/**
 * selection.FontSizeAdjust() get or change font-size-adjust style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FontSizeAdjust = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-size-adjust');
  }
  else
  {
    return this.style('font-size-adjust', value);
  }
};

/**
 * selection.FontStretch() get or change font-stretch style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FontStretch = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-stretch');
  }
  else
  {
    return this.style('font-stretch', value);
  }
};

/**
 * selection.FontStyle() get or change font-style style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FontStyle = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-style');
  }
  else
  {
    return this.style('font-style', value);
  }
};

/**
 * selection.FontSynthesis() get or change font-synthesis style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FontSynthesis = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-synthesis');
  }
  else
  {
    return this.style('font-synthesis', value);
  }
};

/**
 * selection.FontVariant() get or change font-variant style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FontVariant = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-variant');
  }
  else
  {
    return this.style('font-variant', value);
  }
};

/**
 * selection.FontVariantAlternates() get or change font-variant-alternates style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FontVariantAlternates = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-variant-alternates');
  }
  else
  {
    return this.style('font-variant-alternates', value);
  }
};

/**
 * selection.FontVariantCaps() get or change font-variant-caps style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FontVariantCaps = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-variant-caps');
  }
  else
  {
    return this.style('font-variant-caps', value);
  }
};

/**
 * selection.FontVariantEastAsian() get or change font-variant-east-asian style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FontVariantEastAsian = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-variant-east-asian');
  }
  else
  {
    return this.style('font-variant-east-asian', value);
  }
};

/**
 * selection.FontVariantLigatures() get or change font-variant-ligatures style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FontVariantLigatures = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-variant-ligatures');
  }
  else
  {
    return this.style('font-variant-ligatures', value);
  }
};

/**
 * selection.FontVariantNumeric() get or change font-variant-numeric style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FontVariantNumeric = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-variant-numeric');
  }
  else
  {
    return this.style('font-variant-numeric', value);
  }
};

/**
 * selection.FontVariantPosition() get or change font-variant-position style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FontVariantPosition = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-variant-position');
  }
  else
  {
    return this.style('font-variant-position', value);
  }
};

/**
 * selection.FontWeight() get or change font-weight style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var FontWeight = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-weight');
  }
  else
  {
    return this.style('font-weight', value);
  }
};

/**
 * selection.Footer() creates &lt;footer&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Footer = function (contents)
{
  return this.append('footer')
    .html(contents || '');
};

/**
 * selection.For() get or change for attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
  return this.append('form')
    .html(contents || '');
};

/**
 * selection.Formaction() get or change formaction attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
  return this.append('h1')
    .html(contents || '');
};

/**
 * selection.H2() creates &lt;h2&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var H2 = function (contents)
{
  return this.append('h2')
    .html(contents || '');
};

/**
 * selection.H3() creates &lt;h3&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var H3 = function (contents)
{
  return this.append('h3')
    .html(contents || '');
};

/**
 * selection.H4() creates &lt;h4&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var H4 = function (contents)
{
  return this.append('h4')
    .html(contents || '');
};

/**
 * selection.H5() creates &lt;h5&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var H5 = function (contents)
{
  return this.append('h5')
    .html(contents || '');
};

/**
 * selection.H6() creates &lt;h6&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var H6 = function (contents)
{
  return this.append('h6')
    .html(contents || '');
};

/**
 * selection.HangingPunctuation() get or change hanging-punctuation style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var HangingPunctuation = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('hanging-punctuation');
  }
  else
  {
    return this.style('hanging-punctuation', value);
  }
};

/**
 * selection.HashStateRouter() Simple router that relies on window hash value.
 *
 * TODO: Document in more detail
 *
 * @param {object} [context={}] configuration
 * @param {boolean} [dontRun=false] dont start
 * @return updated context with additional methods
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
  return this.append('header')
    .html(contents || '');
};

/**
 * selection.Height() get or change height style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Height = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('height');
  }
  else
  {
    return this.style('height', value);
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
    .attr('type', 'hidden')
    .html(contents || '');
};

/**
 * selection.Hr() creates &lt;hr&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Hr = function (contents)
{
  return this.append('hr')
    .html(contents || '');
};

/**
 * selection.Href() get or change href attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
 * selection.Hyphens() get or change hyphens style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Hyphens = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('hyphens');
  }
  else
  {
    return this.style('hyphens', value);
  }
};

/**
 * selection.I() creates &lt;i&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var I = function (contents)
{
  return this.append('i')
    .html(contents || '');
};

/**
 * selection.Id() get or change id attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
  return this.append('iframe')
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
    .attr('type', 'image')
    .html(contents || '');
};

/**
 * selection.ImeMode() get or change ime-mode style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var ImeMode = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('ime-mode');
  }
  else
  {
    return this.style('ime-mode', value);
  }
};

/**
 * selection.Img() creates &lt;img&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Img = function (contents)
{
  return this.append('img')
    .html(contents || '');
};

/**
 * selection.Input() creates &lt;input&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Input = function (contents)
{
  return this.append('input')
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
    .attr('type', 'checkbox')
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
    .attr('type', 'color')
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
    .attr('type', 'date')
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
    .attr('type', 'datetime-local')
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
    .attr('type', 'email')
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
    .attr('type', 'file')
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
    .attr('type', 'hidden')
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
    .attr('type', 'image')
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
    .attr('type', 'month')
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
    .attr('type', 'number')
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
    .attr('type', 'password')
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
    .attr('type', 'radio')
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
    .attr('type', 'range')
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
    .attr('type', 'reset')
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
    .attr('type', 'search')
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
    .attr('type', 'submit')
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
    .attr('type', 'tel')
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
    .attr('type', 'text')
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
    .attr('type', 'time')
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
    .attr('type', 'url')
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
    .attr('type', 'week')
    .html(contents || '');
};

/**
 * selection.Ins() creates &lt;ins&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Ins = function (contents)
{
  return this.append('ins')
    .html(contents || '');
};

/**
 * selection.JustifyContent() get or change justify-content style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var JustifyContent = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('justify-content');
  }
  else
  {
    return this.style('justify-content', value);
  }
};

/**
 * selection.Kbd() creates &lt;kbd&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Kbd = function (contents)
{
  return this.append('kbd')
    .html(contents || '');
};

/**
 * selection.Label() creates &lt;label&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Label = function (contents)
{
  return this.append('label')
    .html(contents || '');
};

/**
 * selection.Left() get or change left style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Left = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('left');
  }
  else
  {
    return this.style('left', value);
  }
};

/**
 * selection.Legend() creates &lt;legend&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Legend = function (contents)
{
  return this.append('legend')
    .html(contents || '');
};

/**
 * selection.LetterSpacing() get or change letter-spacing style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var LetterSpacing = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('letter-spacing');
  }
  else
  {
    return this.style('letter-spacing', value);
  }
};

/**
 * selection.Li() creates &lt;li&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Li = function (contents)
{
  return this.append('li')
    .html(contents || '');
};

/**
 * selection.LineBreak() get or change line-break style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var LineBreak = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('line-break');
  }
  else
  {
    return this.style('line-break', value);
  }
};

/**
 * selection.LineHeight() get or change line-height style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var LineHeight = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('line-height');
  }
  else
  {
    return this.style('line-height', value);
  }
};

/**
 * selection.Link() creates &lt;link&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Link = function (contents)
{
  return this.append('link')
    .html(contents || '');
};

/**
 * selection.Main() creates &lt;main&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Main = function (contents)
{
  return this.append('main')
    .html(contents || '');
};

/**
 * selection.Map() creates &lt;map&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Map = function (contents)
{
  return this.append('map')
    .html(contents || '');
};

/**
 * selection.Margin() get or change margin style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Margin = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('margin');
  }
  else
  {
    return this.style('margin', value);
  }
};

/**
 * selection.MarginBottom() get or change margin-bottom style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var MarginBottom = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('margin-bottom');
  }
  else
  {
    return this.style('margin-bottom', value);
  }
};

/**
 * selection.MarginLeft() get or change margin-left style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var MarginLeft = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('margin-left');
  }
  else
  {
    return this.style('margin-left', value);
  }
};

/**
 * selection.MarginRight() get or change margin-right style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var MarginRight = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('margin-right');
  }
  else
  {
    return this.style('margin-right', value);
  }
};

/**
 * selection.MarginTop() get or change margin-top style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var MarginTop = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('margin-top');
  }
  else
  {
    return this.style('margin-top', value);
  }
};

/**
 * selection.Mark() creates &lt;mark&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Mark = function (contents)
{
  return this.append('mark')
    .html(contents || '');
};

/**
 * selection.MaxHeight() get or change max-height style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var MaxHeight = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('max-height');
  }
  else
  {
    return this.style('max-height', value);
  }
};

/**
 * selection.MaxWidth() get or change max-width style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var MaxWidth = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('max-width');
  }
  else
  {
    return this.style('max-width', value);
  }
};

/**
 * selection.Media() get or change media attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
  return this.append('meta')
    .html(contents || '');
};

/**
 * selection.Meter() creates &lt;meter&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Meter = function (contents)
{
  return this.append('meter')
    .html(contents || '');
};

/**
 * selection.Method() get or change method attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
 * selection.MinHeight() get or change min-height style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var MinHeight = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('min-height');
  }
  else
  {
    return this.style('min-height', value);
  }
};

/**
 * selection.MinWidth() get or change min-width style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var MinWidth = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('min-width');
  }
  else
  {
    return this.style('min-width', value);
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
    .attr('type', 'month')
    .html(contents || '');
};

/**
 * selection.Name() get or change name attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
  return this.append('nav')
    .html(contents || '');
};

/**
 * selection.NavDown() get or change nav-down style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var NavDown = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('nav-down');
  }
  else
  {
    return this.style('nav-down', value);
  }
};

/**
 * selection.NavIndex() get or change nav-index style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var NavIndex = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('nav-index');
  }
  else
  {
    return this.style('nav-index', value);
  }
};

/**
 * selection.NavLeft() get or change nav-left style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var NavLeft = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('nav-left');
  }
  else
  {
    return this.style('nav-left', value);
  }
};

/**
 * selection.NavRight() get or change nav-right style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var NavRight = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('nav-right');
  }
  else
  {
    return this.style('nav-right', value);
  }
};

/**
 * selection.NavUp() get or change nav-up style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var NavUp = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('nav-up');
  }
  else
  {
    return this.style('nav-up', value);
  }
};

/**
 * selection.Noframes() creates &lt;noframes&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Noframes = function (contents)
{
  return this.append('noframes')
    .html(contents || '');
};

/**
 * selection.Noscript() creates &lt;noscript&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Noscript = function (contents)
{
  return this.append('noscript')
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
    .attr('type', 'number')
    .html(contents || '');
};

/**
 * selection.Object() creates &lt;object&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Object$1 = function (contents)
{
  return this.append('object')
    .html(contents || '');
};

/**
 * selection.Ol() creates &lt;ol&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Ol = function (contents)
{
  return this.append('ol')
    .html(contents || '');
};

/**
 * selection.OnAbort() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnAbort = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('abort');
  }
  else if (arguments.length < 2)
  {
    return this.on('abort', callback);
  }
  else
  {
    return this.on('abort', callback, capture);
  }
};

/**
 * selection.OnAfterprint() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnAfterprint = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('afterprint');
  }
  else if (arguments.length < 2)
  {
    return this.on('afterprint', callback);
  }
  else
  {
    return this.on('afterprint', callback, capture);
  }
};

/**
 * selection.OnBeforeprint() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnBeforeprint = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('beforeprint');
  }
  else if (arguments.length < 2)
  {
    return this.on('beforeprint', callback);
  }
  else
  {
    return this.on('beforeprint', callback, capture);
  }
};

/**
 * selection.OnBeforeunload() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnBeforeunload = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('beforeunload');
  }
  else if (arguments.length < 2)
  {
    return this.on('beforeunload', callback);
  }
  else
  {
    return this.on('beforeunload', callback, capture);
  }
};

/**
 * selection.OnBlur() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnBlur = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('blur');
  }
  else if (arguments.length < 2)
  {
    return this.on('blur', callback);
  }
  else
  {
    return this.on('blur', callback, capture);
  }
};

/**
 * selection.OnCanplay() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnCanplay = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('canplay');
  }
  else if (arguments.length < 2)
  {
    return this.on('canplay', callback);
  }
  else
  {
    return this.on('canplay', callback, capture);
  }
};

/**
 * selection.OnCanplaythrough() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnCanplaythrough = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('canplaythrough');
  }
  else if (arguments.length < 2)
  {
    return this.on('canplaythrough', callback);
  }
  else
  {
    return this.on('canplaythrough', callback, capture);
  }
};

/**
 * selection.OnChange() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnChange = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('change');
  }
  else if (arguments.length < 2)
  {
    return this.on('change', callback);
  }
  else
  {
    return this.on('change', callback, capture);
  }
};

/**
 * selection.OnClick() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnClick = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('click');
  }
  else if (arguments.length < 2)
  {
    return this.on('click', callback);
  }
  else
  {
    return this.on('click', callback, capture);
  }
};

/**
 * selection.OnContextmenu() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnContextmenu = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('contextmenu');
  }
  else if (arguments.length < 2)
  {
    return this.on('contextmenu', callback);
  }
  else
  {
    return this.on('contextmenu', callback, capture);
  }
};

/**
 * selection.OnCopy() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnCopy = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('copy');
  }
  else if (arguments.length < 2)
  {
    return this.on('copy', callback);
  }
  else
  {
    return this.on('copy', callback, capture);
  }
};

/**
 * selection.OnCuechange() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnCuechange = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('cuechange');
  }
  else if (arguments.length < 2)
  {
    return this.on('cuechange', callback);
  }
  else
  {
    return this.on('cuechange', callback, capture);
  }
};

/**
 * selection.OnCut() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnCut = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('cut');
  }
  else if (arguments.length < 2)
  {
    return this.on('cut', callback);
  }
  else
  {
    return this.on('cut', callback, capture);
  }
};

/**
 * selection.OnDblclick() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnDblclick = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('dblclick');
  }
  else if (arguments.length < 2)
  {
    return this.on('dblclick', callback);
  }
  else
  {
    return this.on('dblclick', callback, capture);
  }
};

/**
 * selection.OnDrag() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnDrag = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('drag');
  }
  else if (arguments.length < 2)
  {
    return this.on('drag', callback);
  }
  else
  {
    return this.on('drag', callback, capture);
  }
};

/**
 * selection.OnDragend() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnDragend = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('dragend');
  }
  else if (arguments.length < 2)
  {
    return this.on('dragend', callback);
  }
  else
  {
    return this.on('dragend', callback, capture);
  }
};

/**
 * selection.OnDragenter() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnDragenter = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('dragenter');
  }
  else if (arguments.length < 2)
  {
    return this.on('dragenter', callback);
  }
  else
  {
    return this.on('dragenter', callback, capture);
  }
};

/**
 * selection.OnDragleave() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnDragleave = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('dragleave');
  }
  else if (arguments.length < 2)
  {
    return this.on('dragleave', callback);
  }
  else
  {
    return this.on('dragleave', callback, capture);
  }
};

/**
 * selection.OnDragover() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnDragover = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('dragover');
  }
  else if (arguments.length < 2)
  {
    return this.on('dragover', callback);
  }
  else
  {
    return this.on('dragover', callback, capture);
  }
};

/**
 * selection.OnDragstart() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnDragstart = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('dragstart');
  }
  else if (arguments.length < 2)
  {
    return this.on('dragstart', callback);
  }
  else
  {
    return this.on('dragstart', callback, capture);
  }
};

/**
 * selection.OnDrop() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnDrop = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('drop');
  }
  else if (arguments.length < 2)
  {
    return this.on('drop', callback);
  }
  else
  {
    return this.on('drop', callback, capture);
  }
};

/**
 * selection.OnDurationchange() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnDurationchange = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('durationchange');
  }
  else if (arguments.length < 2)
  {
    return this.on('durationchange', callback);
  }
  else
  {
    return this.on('durationchange', callback, capture);
  }
};

/**
 * selection.OnEmptied() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnEmptied = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('emptied');
  }
  else if (arguments.length < 2)
  {
    return this.on('emptied', callback);
  }
  else
  {
    return this.on('emptied', callback, capture);
  }
};

/**
 * selection.OnEnded() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnEnded = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('ended');
  }
  else if (arguments.length < 2)
  {
    return this.on('ended', callback);
  }
  else
  {
    return this.on('ended', callback, capture);
  }
};

/**
 * selection.OnError() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnError = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('error');
  }
  else if (arguments.length < 2)
  {
    return this.on('error', callback);
  }
  else
  {
    return this.on('error', callback, capture);
  }
};

/**
 * selection.OnFocus() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnFocus = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('focus');
  }
  else if (arguments.length < 2)
  {
    return this.on('focus', callback);
  }
  else
  {
    return this.on('focus', callback, capture);
  }
};

/**
 * selection.OnHashchange() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnHashchange = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('hashchange');
  }
  else if (arguments.length < 2)
  {
    return this.on('hashchange', callback);
  }
  else
  {
    return this.on('hashchange', callback, capture);
  }
};

/**
 * selection.OnInput() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnInput = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('input');
  }
  else if (arguments.length < 2)
  {
    return this.on('input', callback);
  }
  else
  {
    return this.on('input', callback, capture);
  }
};

/**
 * selection.OnInvalid() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnInvalid = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('invalid');
  }
  else if (arguments.length < 2)
  {
    return this.on('invalid', callback);
  }
  else
  {
    return this.on('invalid', callback, capture);
  }
};

/**
 * selection.OnKeydown() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnKeydown = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('keydown');
  }
  else if (arguments.length < 2)
  {
    return this.on('keydown', callback);
  }
  else
  {
    return this.on('keydown', callback, capture);
  }
};

/**
 * selection.OnKeypress() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnKeypress = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('keypress');
  }
  else if (arguments.length < 2)
  {
    return this.on('keypress', callback);
  }
  else
  {
    return this.on('keypress', callback, capture);
  }
};

/**
 * selection.OnKeyup() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnKeyup = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('keyup');
  }
  else if (arguments.length < 2)
  {
    return this.on('keyup', callback);
  }
  else
  {
    return this.on('keyup', callback, capture);
  }
};

/**
 * selection.OnLoad() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnLoad = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('load');
  }
  else if (arguments.length < 2)
  {
    return this.on('load', callback);
  }
  else
  {
    return this.on('load', callback, capture);
  }
};

/**
 * selection.OnLoadeddata() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnLoadeddata = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('loadeddata');
  }
  else if (arguments.length < 2)
  {
    return this.on('loadeddata', callback);
  }
  else
  {
    return this.on('loadeddata', callback, capture);
  }
};

/**
 * selection.OnLoadedmetadata() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnLoadedmetadata = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('loadedmetadata');
  }
  else if (arguments.length < 2)
  {
    return this.on('loadedmetadata', callback);
  }
  else
  {
    return this.on('loadedmetadata', callback, capture);
  }
};

/**
 * selection.OnLoadstart() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnLoadstart = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('loadstart');
  }
  else if (arguments.length < 2)
  {
    return this.on('loadstart', callback);
  }
  else
  {
    return this.on('loadstart', callback, capture);
  }
};

/**
 * selection.OnMessage() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnMessage = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('message');
  }
  else if (arguments.length < 2)
  {
    return this.on('message', callback);
  }
  else
  {
    return this.on('message', callback, capture);
  }
};

/**
 * selection.OnMousedown() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnMousedown = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('mousedown');
  }
  else if (arguments.length < 2)
  {
    return this.on('mousedown', callback);
  }
  else
  {
    return this.on('mousedown', callback, capture);
  }
};

/**
 * selection.OnMousemove() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnMousemove = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('mousemove');
  }
  else if (arguments.length < 2)
  {
    return this.on('mousemove', callback);
  }
  else
  {
    return this.on('mousemove', callback, capture);
  }
};

/**
 * selection.OnMouseout() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnMouseout = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('mouseout');
  }
  else if (arguments.length < 2)
  {
    return this.on('mouseout', callback);
  }
  else
  {
    return this.on('mouseout', callback, capture);
  }
};

/**
 * selection.OnMouseover() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnMouseover = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('mouseover');
  }
  else if (arguments.length < 2)
  {
    return this.on('mouseover', callback);
  }
  else
  {
    return this.on('mouseover', callback, capture);
  }
};

/**
 * selection.OnMouseup() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnMouseup = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('mouseup');
  }
  else if (arguments.length < 2)
  {
    return this.on('mouseup', callback);
  }
  else
  {
    return this.on('mouseup', callback, capture);
  }
};

/**
 * selection.OnMousewheel() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnMousewheel = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('mousewheel');
  }
  else if (arguments.length < 2)
  {
    return this.on('mousewheel', callback);
  }
  else
  {
    return this.on('mousewheel', callback, capture);
  }
};

/**
 * selection.OnOffline() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnOffline = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('offline');
  }
  else if (arguments.length < 2)
  {
    return this.on('offline', callback);
  }
  else
  {
    return this.on('offline', callback, capture);
  }
};

/**
 * selection.OnOnline() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnOnline = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('online');
  }
  else if (arguments.length < 2)
  {
    return this.on('online', callback);
  }
  else
  {
    return this.on('online', callback, capture);
  }
};

/**
 * selection.OnPagehide() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnPagehide = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('pagehide');
  }
  else if (arguments.length < 2)
  {
    return this.on('pagehide', callback);
  }
  else
  {
    return this.on('pagehide', callback, capture);
  }
};

/**
 * selection.OnPageshow() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnPageshow = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('pageshow');
  }
  else if (arguments.length < 2)
  {
    return this.on('pageshow', callback);
  }
  else
  {
    return this.on('pageshow', callback, capture);
  }
};

/**
 * selection.OnPaste() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnPaste = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('paste');
  }
  else if (arguments.length < 2)
  {
    return this.on('paste', callback);
  }
  else
  {
    return this.on('paste', callback, capture);
  }
};

/**
 * selection.OnPause() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnPause = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('pause');
  }
  else if (arguments.length < 2)
  {
    return this.on('pause', callback);
  }
  else
  {
    return this.on('pause', callback, capture);
  }
};

/**
 * selection.OnPlay() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnPlay = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('play');
  }
  else if (arguments.length < 2)
  {
    return this.on('play', callback);
  }
  else
  {
    return this.on('play', callback, capture);
  }
};

/**
 * selection.OnPlaying() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnPlaying = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('playing');
  }
  else if (arguments.length < 2)
  {
    return this.on('playing', callback);
  }
  else
  {
    return this.on('playing', callback, capture);
  }
};

/**
 * selection.OnPopstate() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnPopstate = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('popstate');
  }
  else if (arguments.length < 2)
  {
    return this.on('popstate', callback);
  }
  else
  {
    return this.on('popstate', callback, capture);
  }
};

/**
 * selection.OnProgress() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnProgress = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('progress');
  }
  else if (arguments.length < 2)
  {
    return this.on('progress', callback);
  }
  else
  {
    return this.on('progress', callback, capture);
  }
};

/**
 * selection.OnRatechange() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnRatechange = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('ratechange');
  }
  else if (arguments.length < 2)
  {
    return this.on('ratechange', callback);
  }
  else
  {
    return this.on('ratechange', callback, capture);
  }
};

/**
 * selection.OnReset() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnReset = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('reset');
  }
  else if (arguments.length < 2)
  {
    return this.on('reset', callback);
  }
  else
  {
    return this.on('reset', callback, capture);
  }
};

/**
 * selection.OnResize() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnResize = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('resize');
  }
  else if (arguments.length < 2)
  {
    return this.on('resize', callback);
  }
  else
  {
    return this.on('resize', callback, capture);
  }
};

/**
 * selection.OnScroll() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnScroll = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('scroll');
  }
  else if (arguments.length < 2)
  {
    return this.on('scroll', callback);
  }
  else
  {
    return this.on('scroll', callback, capture);
  }
};

/**
 * selection.OnSearch() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnSearch = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('search');
  }
  else if (arguments.length < 2)
  {
    return this.on('search', callback);
  }
  else
  {
    return this.on('search', callback, capture);
  }
};

/**
 * selection.OnSeeked() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnSeeked = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('seeked');
  }
  else if (arguments.length < 2)
  {
    return this.on('seeked', callback);
  }
  else
  {
    return this.on('seeked', callback, capture);
  }
};

/**
 * selection.OnSeeking() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnSeeking = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('seeking');
  }
  else if (arguments.length < 2)
  {
    return this.on('seeking', callback);
  }
  else
  {
    return this.on('seeking', callback, capture);
  }
};

/**
 * selection.OnSelect() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnSelect = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('select');
  }
  else if (arguments.length < 2)
  {
    return this.on('select', callback);
  }
  else
  {
    return this.on('select', callback, capture);
  }
};

/**
 * selection.OnShow() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnShow = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('show');
  }
  else if (arguments.length < 2)
  {
    return this.on('show', callback);
  }
  else
  {
    return this.on('show', callback, capture);
  }
};

/**
 * selection.OnStalled() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnStalled = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('stalled');
  }
  else if (arguments.length < 2)
  {
    return this.on('stalled', callback);
  }
  else
  {
    return this.on('stalled', callback, capture);
  }
};

/**
 * selection.OnStorage() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnStorage = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('storage');
  }
  else if (arguments.length < 2)
  {
    return this.on('storage', callback);
  }
  else
  {
    return this.on('storage', callback, capture);
  }
};

/**
 * selection.OnSubmit() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnSubmit = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('submit');
  }
  else if (arguments.length < 2)
  {
    return this.on('submit', callback);
  }
  else
  {
    return this.on('submit', callback, capture);
  }
};

/**
 * selection.OnSuspend() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnSuspend = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('suspend');
  }
  else if (arguments.length < 2)
  {
    return this.on('suspend', callback);
  }
  else
  {
    return this.on('suspend', callback, capture);
  }
};

/**
 * selection.OnTimeupdate() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnTimeupdate = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('timeupdate');
  }
  else if (arguments.length < 2)
  {
    return this.on('timeupdate', callback);
  }
  else
  {
    return this.on('timeupdate', callback, capture);
  }
};

/**
 * selection.OnToggle() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnToggle = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('toggle');
  }
  else if (arguments.length < 2)
  {
    return this.on('toggle', callback);
  }
  else
  {
    return this.on('toggle', callback, capture);
  }
};

/**
 * selection.OnUnload() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnUnload = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('unload');
  }
  else if (arguments.length < 2)
  {
    return this.on('unload', callback);
  }
  else
  {
    return this.on('unload', callback, capture);
  }
};

/**
 * selection.OnVolumechange() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnVolumechange = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('volumechange');
  }
  else if (arguments.length < 2)
  {
    return this.on('volumechange', callback);
  }
  else
  {
    return this.on('volumechange', callback, capture);
  }
};

/**
 * selection.OnWaiting() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnWaiting = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('waiting');
  }
  else if (arguments.length < 2)
  {
    return this.on('waiting', callback);
  }
  else
  {
    return this.on('waiting', callback, capture);
  }
};

/**
 * selection.OnWheel() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
var OnWheel = function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('wheel');
  }
  else if (arguments.length < 2)
  {
    return this.on('wheel', callback);
  }
  else
  {
    return this.on('wheel', callback, capture);
  }
};

/**
 * selection.Optgroup() creates &lt;optgroup&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Optgroup = function (contents)
{
  return this.append('optgroup')
    .html(contents || '');
};

/**
 * selection.Option() creates &lt;option&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Option = function (contents)
{
  return this.append('option')
    .html(contents || '');
};

/**
 * selection.Options() creates a list of child &lt;option&gt; elements
 * @param {string} [options=''] array of strngs or key value object containing labels
 * @param {string} [selected=''] selected element
 * @return selected
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
 * selection.Order() get or change order style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Order = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('order');
  }
  else
  {
    return this.style('order', value);
  }
};

/**
 * selection.Outline() get or change outline style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Outline = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('outline');
  }
  else
  {
    return this.style('outline', value);
  }
};

/**
 * selection.OutlineColor() get or change outline-color style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var OutlineColor = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('outline-color');
  }
  else
  {
    return this.style('outline-color', value);
  }
};

/**
 * selection.OutlineOffset() get or change outline-offset style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var OutlineOffset = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('outline-offset');
  }
  else
  {
    return this.style('outline-offset', value);
  }
};

/**
 * selection.OutlineStyle() get or change outline-style style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var OutlineStyle = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('outline-style');
  }
  else
  {
    return this.style('outline-style', value);
  }
};

/**
 * selection.OutlineWidth() get or change outline-width style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var OutlineWidth = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('outline-width');
  }
  else
  {
    return this.style('outline-width', value);
  }
};

/**
 * selection.Output() creates &lt;output&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Output = function (contents)
{
  return this.append('output')
    .html(contents || '');
};

/**
 * selection.Overflow() get or change overflow style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Overflow = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('overflow');
  }
  else
  {
    return this.style('overflow', value);
  }
};

/**
 * selection.OverflowWrap() get or change overflow-wrap style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var OverflowWrap = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('overflow-wrap');
  }
  else
  {
    return this.style('overflow-wrap', value);
  }
};

/**
 * selection.OverflowX() get or change overflow-x style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var OverflowX = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('overflow-x');
  }
  else
  {
    return this.style('overflow-x', value);
  }
};

/**
 * selection.OverflowY() get or change overflow-y style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var OverflowY = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('overflow-y');
  }
  else
  {
    return this.style('overflow-y', value);
  }
};

/**
 * selection.P() creates &lt;p&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var P = function (contents)
{
  return this.append('p')
    .html(contents || '');
};

/**
 * selection.Padding() get or change padding style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Padding = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('padding');
  }
  else
  {
    return this.style('padding', value);
  }
};

/**
 * selection.PaddingBottom() get or change padding-bottom style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var PaddingBottom = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('padding-bottom');
  }
  else
  {
    return this.style('padding-bottom', value);
  }
};

/**
 * selection.PaddingLeft() get or change padding-left style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var PaddingLeft = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('padding-left');
  }
  else
  {
    return this.style('padding-left', value);
  }
};

/**
 * selection.PaddingRight() get or change padding-right style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var PaddingRight = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('padding-right');
  }
  else
  {
    return this.style('padding-right', value);
  }
};

/**
 * selection.PaddingTop() get or change padding-top style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var PaddingTop = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('padding-top');
  }
  else
  {
    return this.style('padding-top', value);
  }
};

/**
 * selection.Param() creates &lt;param&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Param = function (contents)
{
  return this.append('param')
    .html(contents || '');
};

/**
 * selection.ParentNode() get or change parentNode property value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var ParentNode = function (value)
{
  if (arguments.length < 1)
  {
    return this.property('parentNode');
  }
  else
  {
    return this.property('parentNode', value);
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
    .attr('type', 'password')
    .html(contents || '');
};

/**
 * selection.Pattern() get or change pattern attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
 * selection.Placeholder() get or change placeholder attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
 * selection.Position() get or change position style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Position = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('position');
  }
  else
  {
    return this.style('position', value);
  }
};

/**
 * selection.Pre() creates &lt;pre&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Pre = function (contents)
{
  return this.append('pre')
    .html(contents || '');
};

/**
 * selection.Progress() creates &lt;progress&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Progress = function (contents)
{
  return this.append('progress')
    .html(contents || '');
};

/**
 * selection.Q() creates &lt;q&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Q = function (contents)
{
  return this.append('q')
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
    .attr('type', 'radio')
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
    .attr('type', 'range')
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
    .attr('type', 'reset')
    .html(contents || '');
};

/**
 * selection.Resize() get or change resize style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Resize = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('resize');
  }
  else
  {
    return this.style('resize', value);
  }
};

/**
 * selection.Right() get or change right style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Right = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('right');
  }
  else
  {
    return this.style('right', value);
  }
};

/**
 * selection.Rowspan() get or change rowspan attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
  return this.append('rp')
    .html(contents || '');
};

/**
 * selection.Rt() creates &lt;rt&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Rt = function (contents)
{
  return this.append('rt')
    .html(contents || '');
};

/**
 * selection.Rtc() creates &lt;rtc&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Rtc = function (contents)
{
  return this.append('rtc')
    .html(contents || '');
};

/**
 * selection.Ruby() creates &lt;ruby&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Ruby = function (contents)
{
  return this.append('ruby')
    .html(contents || '');
};

/**
 * selection.S() creates &lt;s&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var S = function (contents)
{
  return this.append('s')
    .html(contents || '');
};

/**
 * selection.Samp() creates &lt;samp&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Samp = function (contents)
{
  return this.append('samp')
    .html(contents || '');
};

/**
 * selection.Script() creates &lt;script&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Script = function (contents)
{
  return this.append('script')
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
    .attr('type', 'search')
    .html(contents || '');
};

/**
 * selection.Section() creates &lt;section&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Section = function (contents)
{
  return this.append('section')
    .html(contents || '');
};

/**
 * selection.Select() creates &lt;select&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Select = function (contents)
{
  return this.append('select')
    .html(contents || '');
};

/**
 * selection.Selected() get or change selected attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
  return this.append('shadow')
    .html(contents || '');
};

/**
 * selection.Small() creates &lt;small&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Small = function (contents)
{
  return this.append('small')
    .html(contents || '');
};

/**
 * selection.Source() creates &lt;source&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Source = function (contents)
{
  return this.append('source')
    .html(contents || '');
};

/**
 * selection.Span() creates &lt;span&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Span = function (contents)
{
  return this.append('span')
    .html(contents || '');
};

/**
 * selection.Src() get or change src attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
  return this.append('strong')
    .html(contents || '');
};

/**
 * selection.Sub() creates &lt;sub&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Sub = function (contents)
{
  return this.append('sub')
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
    .attr('type', 'submit')
    .html(contents || '');
};

/**
 * selection.Summary() creates &lt;summary&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Summary = function (contents)
{
  return this.append('summary')
    .html(contents || '');
};

/**
 * selection.Sup() creates &lt;sup&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Sup = function (contents)
{
  return this.append('sup')
    .html(contents || '');
};

/**
 * selection.Svg() creates &lt;svg&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Svg = function (contents)
{
  return this.append('svg')
    .html(contents || '');
};

/**
 * selection.TabSize() get or change tab-size style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var TabSize = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('tab-size');
  }
  else
  {
    return this.style('tab-size', value);
  }
};

/**
 * selection.Tabindex() get or change tabindex attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
  return this.append('table')
    .html(contents || '');
};

/**
 * selection.TableLayout() get or change table-layout style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var TableLayout = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('table-layout');
  }
  else
  {
    return this.style('table-layout', value);
  }
};

/**
 * selection.Target() get or change target attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
  return this.append('tbody')
    .html(contents || '');
};

/**
 * selection.Td() creates &lt;td&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Td = function (contents)
{
  return this.append('td')
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
    .attr('type', 'tel')
    .html(contents || '');
};

/**
 * selection.Template() creates &lt;template&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Template = function (contents)
{
  return this.append('template')
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
    .attr('type', 'text')
    .html(contents || '');
};

/**
 * selection.TextAlign() get or change text-align style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var TextAlign = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('text-align');
  }
  else
  {
    return this.style('text-align', value);
  }
};

/**
 * selection.TextAlignLast() get or change text-align-last style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var TextAlignLast = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('text-align-last');
  }
  else
  {
    return this.style('text-align-last', value);
  }
};

/**
 * selection.TextCombineUpright() get or change text-combine-upright style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var TextCombineUpright = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('text-combine-upright');
  }
  else
  {
    return this.style('text-combine-upright', value);
  }
};

/**
 * selection.TextDecoration() get or change text-decoration style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var TextDecoration = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('text-decoration');
  }
  else
  {
    return this.style('text-decoration', value);
  }
};

/**
 * selection.TextDecorationColor() get or change text-decoration-color style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var TextDecorationColor = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('text-decoration-color');
  }
  else
  {
    return this.style('text-decoration-color', value);
  }
};

/**
 * selection.TextDecorationLine() get or change text-decoration-line style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var TextDecorationLine = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('text-decoration-line');
  }
  else
  {
    return this.style('text-decoration-line', value);
  }
};

/**
 * selection.TextDecorationStyle() get or change text-decoration-style style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var TextDecorationStyle = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('text-decoration-style');
  }
  else
  {
    return this.style('text-decoration-style', value);
  }
};

/**
 * selection.TextIndent() get or change text-indent style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var TextIndent = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('text-indent');
  }
  else
  {
    return this.style('text-indent', value);
  }
};

/**
 * selection.TextJustify() get or change text-justify style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var TextJustify = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('text-justify');
  }
  else
  {
    return this.style('text-justify', value);
  }
};

/**
 * selection.TextOverflow() get or change text-overflow style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var TextOverflow = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('text-overflow');
  }
  else
  {
    return this.style('text-overflow', value);
  }
};

/**
 * selection.TextShadow() get or change text-shadow style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var TextShadow = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('text-shadow');
  }
  else
  {
    return this.style('text-shadow', value);
  }
};

/**
 * selection.TextTransform() get or change text-transform style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var TextTransform = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('text-transform');
  }
  else
  {
    return this.style('text-transform', value);
  }
};

/**
 * selection.TextUnderlinePosition() get or change text-underline-position style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var TextUnderlinePosition = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('text-underline-position');
  }
  else
  {
    return this.style('text-underline-position', value);
  }
};

/**
 * selection.Textarea() creates &lt;textarea&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Textarea = function (contents)
{
  return this.append('textarea')
    .html(contents || '');
};

/**
 * selection.Tfoot() creates &lt;tfoot&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Tfoot = function (contents)
{
  return this.append('tfoot')
    .html(contents || '');
};

/**
 * selection.Th() creates &lt;th&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Th = function (contents)
{
  return this.append('th')
    .html(contents || '');
};

/**
 * selection.Thead() creates &lt;thead&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Thead = function (contents)
{
  return this.append('thead')
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
    .attr('type', 'time')
    .html(contents || '');
};

/**
 * selection.Title() get or change title attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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
 * selection.Top() get or change top style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Top = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('top');
  }
  else
  {
    return this.style('top', value);
  }
};

/**
 * selection.Tr() creates &lt;tr&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Tr = function (contents)
{
  return this.append('tr')
    .html(contents || '');
};

/**
 * selection.Track() creates &lt;track&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Track = function (contents)
{
  return this.append('track')
    .html(contents || '');
};

/**
 * selection.U() creates &lt;u&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var U = function (contents)
{
  return this.append('u')
    .html(contents || '');
};

/**
 * selection.Ul() creates &lt;ul&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Ul = function (contents)
{
  return this.append('ul')
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
    .attr('type', 'url')
    .html(contents || '');
};

/**
 * selection.UserSelect() get or change user-select style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var UserSelect = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('user-select');
  }
  else
  {
    return this.style('user-select', value);
  }
};

/**
 * selection.Validity() get or change validity property value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Validity = function (value)
{
  if (arguments.length < 1)
  {
    return this.property('validity');
  }
  else
  {
    return this.property('validity', value);
  }
};

/**
 * selection.Value() get or change value property value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Value = function (value)
{
  if (arguments.length < 1)
  {
    return this.property('value');
  }
  else
  {
    return this.property('value', value);
  }
};

/**
 * selection.Var() creates &lt;var&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Var = function (contents)
{
  return this.append('var')
    .html(contents || '');
};

/**
 * selection.VerticalAlign() get or change vertical-align style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var VerticalAlign = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('vertical-align');
  }
  else
  {
    return this.style('vertical-align', value);
  }
};

/**
 * selection.Video() creates &lt;video&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Video = function (contents)
{
  return this.append('video')
    .html(contents || '');
};

/**
 * selection.Visibility() get or change visibility style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Visibility = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('visibility');
  }
  else
  {
    return this.style('visibility', value);
  }
};

/**
 * selection.Wbr() creates &lt;wbr&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
var Wbr = function (contents)
{
  return this.append('wbr')
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
    .attr('type', 'week')
    .html(contents || '');
};

/**
 * selection.WhiteSpace() get or change white-space style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var WhiteSpace = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('white-space');
  }
  else
  {
    return this.style('white-space', value);
  }
};

/**
 * selection.Width() get or change width style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var Width = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('width');
  }
  else
  {
    return this.style('width', value);
  }
};

/**
 * selection.WordBreak() get or change word-break style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var WordBreak = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('word-break');
  }
  else
  {
    return this.style('word-break', value);
  }
};

/**
 * selection.WordSpacing() get or change word-spacing style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var WordSpacing = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('word-spacing');
  }
  else
  {
    return this.style('word-spacing', value);
  }
};

/**
 * selection.WordWrap() get or change word-wrap style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var WordWrap = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('word-wrap');
  }
  else
  {
    return this.style('word-wrap', value);
  }
};

/**
 * selection.ZIndex() get or change z-index style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
var ZIndex = function (value)
{
  if (arguments.length < 1)
  {
    return this.style('z-index');
  }
  else
  {
    return this.style('z-index', value);
  }
};

/**
 * selection.clear() clears selection content
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

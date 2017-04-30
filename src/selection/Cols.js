/**
 * selection.Cols() creates &lt;input&gt; element of type cols
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('cols');
  }
  else
  {
    return this.attr('cols', value);
  }
}
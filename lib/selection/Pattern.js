/**
 * selection.Pattern() creates &lt;input&gt; element of type pattern
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('pattern');
  }
  else
  {
    return this.attr('pattern', value);
  }
}

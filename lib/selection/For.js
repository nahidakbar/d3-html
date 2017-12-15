/**
 * selection.For() creates &lt;input&gt; element of type for
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('for');
  }
  else
  {
    return this.attr('for', value);
  }
}

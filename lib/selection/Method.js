/**
 * selection.Method() creates &lt;input&gt; element of type method
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('method');
  }
  else
  {
    return this.attr('method', value);
  }
}

/**
 * selection.Placeholder() creates &lt;input&gt; element of type placeholder
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('placeholder');
  }
  else
  {
    return this.attr('placeholder', value);
  }
}

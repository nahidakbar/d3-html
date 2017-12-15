/**
 * selection.Tabindex() creates &lt;input&gt; element of type tabindex
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('tabindex');
  }
  else
  {
    return this.attr('tabindex', value);
  }
}

/**
 * selection.Autocomplete() creates &lt;input&gt; element of type autocomplete
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('autocomplete');
  }
  else
  {
    return this.attr('autocomplete', value);
  }
}

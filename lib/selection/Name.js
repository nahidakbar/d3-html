/**
 * selection.Name() creates &lt;input&gt; element of type name
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('name');
  }
  else
  {
    return this.attr('name', value);
  }
}

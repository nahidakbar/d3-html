/**
 * selection.Id() creates &lt;input&gt; element of type id
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('id');
  }
  else
  {
    return this.attr('id', value);
  }
}

/**
 * selection.Value() creates &lt;input&gt; element of type value
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.property(type);
  }
  else
  {
    return this.property(type, value);
  }
}

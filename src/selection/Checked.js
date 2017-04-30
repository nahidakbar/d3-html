/**
 * selection.Checked() creates &lt;input&gt; element of type checked
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
/**
 * selection.PaddingBottom() creates &lt;input&gt; element of type padding-bottom
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style(type);
  }
  else
  {
    return this.style(type, value);
  }
}
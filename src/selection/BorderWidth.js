/**
 * selection.BorderWidth() creates &lt;input&gt; element of type border-width
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
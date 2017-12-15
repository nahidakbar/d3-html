/**
 * selection.Content() creates &lt;input&gt; element of type content
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

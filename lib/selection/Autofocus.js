/**
 * selection.Autofocus() creates &lt;input&gt; element of type autofocus
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('autofocus');
  }
  else
  {
    return this.attr('autofocus', value);
  }
}

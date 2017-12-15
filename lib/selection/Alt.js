/**
 * selection.Alt() creates &lt;input&gt; element of type alt
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('alt');
  }
  else
  {
    return this.attr('alt', value);
  }
}

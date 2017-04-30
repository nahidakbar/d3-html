/**
 * selection.Src() creates &lt;input&gt; element of type src
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('src');
  }
  else
  {
    return this.attr('src', value);
  }
}

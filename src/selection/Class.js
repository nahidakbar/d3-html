/**
 * selection.Class() creates &lt;input&gt; element of type class
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('class');
  }
  else
  {
    return this.attr('class', value);
  }
}

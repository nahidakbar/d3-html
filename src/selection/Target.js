/**
 * selection.Target() creates &lt;input&gt; element of type target
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('target');
  }
  else
  {
    return this.attr('target', value);
  }
}

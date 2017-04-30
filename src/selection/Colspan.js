/**
 * selection.Colspan() creates &lt;input&gt; element of type colspan
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('colspan');
  }
  else
  {
    return this.attr('colspan', value);
  }
}

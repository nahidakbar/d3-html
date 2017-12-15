/**
 * selection.Disabled() creates &lt;input&gt; element of type disabled
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('disabled');
  }
  else
  {
    return this.attr('disabled', value);
  }
}

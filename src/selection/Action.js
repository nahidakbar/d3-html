/**
 * selection.Action() creates &lt;input&gt; element of type action
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('action');
  }
  else
  {
    return this.attr('action', value);
  }
}

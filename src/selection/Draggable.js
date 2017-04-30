/**
 * selection.Draggable() creates &lt;input&gt; element of type draggable
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('draggable');
  }
  else
  {
    return this.attr('draggable', value);
  }
}

/**
 * selection.Draggable() get or change draggable attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
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

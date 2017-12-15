/**
 * selection.Selected() get or change selected attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('selected');
  }
  else
  {
    return this.attr('selected', value);
  }
}

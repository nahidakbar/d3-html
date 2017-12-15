/**
 * selection.OutlineOffset() get or change outline-offset style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('outline-offset');
  }
  else
  {
    return this.style('outline-offset', value);
  }
}

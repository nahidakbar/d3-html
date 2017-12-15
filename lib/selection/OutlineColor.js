/**
 * selection.OutlineColor() get or change outline-color style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('outline-color');
  }
  else
  {
    return this.style('outline-color', value);
  }
}

/**
 * selection.Outline() get or change outline style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('outline');
  }
  else
  {
    return this.style('outline', value);
  }
}

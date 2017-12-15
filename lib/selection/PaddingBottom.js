/**
 * selection.PaddingBottom() get or change padding-bottom style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('padding-bottom');
  }
  else
  {
    return this.style('padding-bottom', value);
  }
}

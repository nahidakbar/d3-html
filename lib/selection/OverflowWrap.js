/**
 * selection.OverflowWrap() get or change overflow-wrap style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('overflow-wrap');
  }
  else
  {
    return this.style('overflow-wrap', value);
  }
}

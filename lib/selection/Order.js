/**
 * selection.Order() get or change order style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('order');
  }
  else
  {
    return this.style('order', value);
  }
}

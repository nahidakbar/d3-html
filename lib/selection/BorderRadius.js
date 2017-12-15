/**
 * selection.BorderRadius() get or change border-radius style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-radius');
  }
  else
  {
    return this.style('border-radius', value);
  }
}

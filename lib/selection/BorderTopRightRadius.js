/**
 * selection.BorderTopRightRadius() get or change border-top-right-radius style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-top-right-radius');
  }
  else
  {
    return this.style('border-top-right-radius', value);
  }
}

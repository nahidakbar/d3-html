/**
 * selection.BorderTopColor() get or change border-top-color style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-top-color');
  }
  else
  {
    return this.style('border-top-color', value);
  }
}

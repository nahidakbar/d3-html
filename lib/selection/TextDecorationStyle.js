/**
 * selection.TextDecorationStyle() get or change text-decoration-style style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('text-decoration-style');
  }
  else
  {
    return this.style('text-decoration-style', value);
  }
}

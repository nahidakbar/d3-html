/**
 * selection.BorderBottomWidth() get or change border-bottom-width style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-bottom-width');
  }
  else
  {
    return this.style('border-bottom-width', value);
  }
}

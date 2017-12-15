/**
 * selection.MinWidth() get or change min-width style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('min-width');
  }
  else
  {
    return this.style('min-width', value);
  }
}

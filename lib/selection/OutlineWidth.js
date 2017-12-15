/**
 * selection.OutlineWidth() get or change outline-width style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('outline-width');
  }
  else
  {
    return this.style('outline-width', value);
  }
}

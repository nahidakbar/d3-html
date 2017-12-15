/**
 * selection.ZIndex() get or change z-index style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('z-index');
  }
  else
  {
    return this.style('z-index', value);
  }
}

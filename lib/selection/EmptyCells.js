/**
 * selection.EmptyCells() get or change empty-cells style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('empty-cells');
  }
  else
  {
    return this.style('empty-cells', value);
  }
}

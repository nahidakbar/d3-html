/**
 * selection.TableLayout() get or change table-layout style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('table-layout');
  }
  else
  {
    return this.style('table-layout', value);
  }
}

/**
 * selection.MarginRight() get or change margin-right style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('margin-right');
  }
  else
  {
    return this.style('margin-right', value);
  }
}

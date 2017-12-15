/**
 * selection.FontFamily() get or change font-family style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-family');
  }
  else
  {
    return this.style('font-family', value);
  }
}

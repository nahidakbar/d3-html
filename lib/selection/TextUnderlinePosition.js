/**
 * selection.TextUnderlinePosition() get or change text-underline-position style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('text-underline-position');
  }
  else
  {
    return this.style('text-underline-position', value);
  }
}

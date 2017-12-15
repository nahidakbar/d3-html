/**
 * selection.Font() get or change font style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font');
  }
  else
  {
    return this.style('font', value);
  }
}

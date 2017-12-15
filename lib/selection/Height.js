/**
 * selection.Height() get or change height style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('height');
  }
  else
  {
    return this.style('height', value);
  }
}

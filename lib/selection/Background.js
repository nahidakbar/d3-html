/**
 * selection.Background() get or change background style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('background');
  }
  else
  {
    return this.style('background', value);
  }
}

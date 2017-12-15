/**
 * selection.WhiteSpace() get or change white-space style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('white-space');
  }
  else
  {
    return this.style('white-space', value);
  }
}

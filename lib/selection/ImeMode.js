/**
 * selection.ImeMode() get or change ime-mode style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('ime-mode');
  }
  else
  {
    return this.style('ime-mode', value);
  }
}

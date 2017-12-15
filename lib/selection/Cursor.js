/**
 * selection.Cursor() get or change cursor style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('cursor');
  }
  else
  {
    return this.style('cursor', value);
  }
}

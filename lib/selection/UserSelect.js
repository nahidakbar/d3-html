/**
 * selection.UserSelect() get or change user-select style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('user-select');
  }
  else
  {
    return this.style('user-select', value);
  }
}

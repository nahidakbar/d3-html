/**
 * selection.NavLeft() get or change nav-left style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('nav-left');
  }
  else
  {
    return this.style('nav-left', value);
  }
}

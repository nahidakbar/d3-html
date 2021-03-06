/**
 * selection.BackgroundOrigin() get or change background-origin style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('background-origin');
  }
  else
  {
    return this.style('background-origin', value);
  }
}

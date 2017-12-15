/**
 * selection.BackgroundImage() get or change background-image style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('background-image');
  }
  else
  {
    return this.style('background-image', value);
  }
}

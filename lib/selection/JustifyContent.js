/**
 * selection.JustifyContent() get or change justify-content style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('justify-content');
  }
  else
  {
    return this.style('justify-content', value);
  }
}

/**
 * selection.Alt() get or change alt attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('alt');
  }
  else
  {
    return this.attr('alt', value);
  }
}

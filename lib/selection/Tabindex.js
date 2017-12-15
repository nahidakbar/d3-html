/**
 * selection.Tabindex() get or change tabindex attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('tabindex');
  }
  else
  {
    return this.attr('tabindex', value);
  }
}

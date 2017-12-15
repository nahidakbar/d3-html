/**
 * selection.Disabled() get or change disabled attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('disabled');
  }
  else
  {
    return this.attr('disabled', value);
  }
}

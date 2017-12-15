/**
 * selection.Colspan() get or change colspan attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('colspan');
  }
  else
  {
    return this.attr('colspan', value);
  }
}

/**
 * selection.Href() get or change href attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('href');
  }
  else
  {
    return this.attr('href', value);
  }
}

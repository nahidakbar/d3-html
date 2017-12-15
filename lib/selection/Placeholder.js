/**
 * selection.Placeholder() get or change placeholder attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('placeholder');
  }
  else
  {
    return this.attr('placeholder', value);
  }
}

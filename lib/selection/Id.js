/**
 * selection.Id() get or change id attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('id');
  }
  else
  {
    return this.attr('id', value);
  }
}

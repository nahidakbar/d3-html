/**
 * selection.ParentNode() get or change parentNode property value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.property('parentNode');
  }
  else
  {
    return this.property('parentNode', value);
  }
}

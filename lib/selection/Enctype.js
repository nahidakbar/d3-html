/**
 * selection.Enctype() get or change enctype attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('enctype');
  }
  else
  {
    return this.attr('enctype', value);
  }
}

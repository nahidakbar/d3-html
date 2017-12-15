/**
 * selection.Cols() get or change cols attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('cols');
  }
  else
  {
    return this.attr('cols', value);
  }
}

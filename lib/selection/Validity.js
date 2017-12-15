/**
 * selection.Validity() get or change validity property value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.property('validity');
  }
  else
  {
    return this.property('validity', value);
  }
}

/**
 * selection.Checked() get or change checked property value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.property('checked');
  }
  else
  {
    return this.property('checked', value);
  }
}

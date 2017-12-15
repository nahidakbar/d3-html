/**
 * selection.Autofocus() get or change autofocus attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('autofocus');
  }
  else
  {
    return this.attr('autofocus', value);
  }
}

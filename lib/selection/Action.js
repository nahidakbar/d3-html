/**
 * selection.Action() get or change action attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('action');
  }
  else
  {
    return this.attr('action', value);
  }
}

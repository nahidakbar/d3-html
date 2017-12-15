/**
 * selection.Media() get or change media attribute value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('media');
  }
  else
  {
    return this.attr('media', value);
  }
}

/**
 * selection.BorderImageWidth() get or change border-image-width style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-image-width');
  }
  else
  {
    return this.style('border-image-width', value);
  }
}

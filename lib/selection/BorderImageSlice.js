/**
 * selection.BorderImageSlice() get or change border-image-slice style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('border-image-slice');
  }
  else
  {
    return this.style('border-image-slice', value);
  }
}

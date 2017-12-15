/**
 * selection.FontVariantEastAsian() get or change font-variant-east-asian style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('font-variant-east-asian');
  }
  else
  {
    return this.style('font-variant-east-asian', value);
  }
}

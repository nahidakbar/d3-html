/**
 * selection.WordWrap() get or change word-wrap style value of selection
 * @param {string} [value=''] new value or dont specify to return current value
 * @return selected if setting or current value
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.style('word-wrap');
  }
  else
  {
    return this.style('word-wrap', value);
  }
}

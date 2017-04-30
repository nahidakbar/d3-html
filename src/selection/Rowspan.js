/**
 * selection.Rowspan() creates &lt;input&gt; element of type rowspan
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('rowspan');
  }
  else
  {
    return this.attr('rowspan', value);
  }
}

/**
 * selection.Month() creates &lt;input&gt; element of type month
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', 'month')
    .html(contents || '');
}

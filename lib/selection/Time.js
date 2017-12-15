/**
 * selection.Time() creates &lt;input&gt; element of type time
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', 'time')
    .html(contents || '');
}

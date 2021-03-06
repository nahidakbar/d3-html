/**
 * selection.Week() creates &lt;input&gt; element of type week
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', 'week')
    .html(contents || '');
}

/**
 * selection.InputSearch() creates &lt;input&gt; element of type search
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', 'search')
    .html(contents || '');
}

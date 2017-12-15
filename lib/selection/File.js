/**
 * selection.File() creates &lt;input&gt; element of type file
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', 'file')
    .html(contents || '');
}

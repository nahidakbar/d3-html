/**
 * selection.InputUrl() creates &lt;input&gt; element of type url
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', 'url')
    .html(contents || '');
}

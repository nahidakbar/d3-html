/**
 * selection.InputImage() creates &lt;input&gt; element of type image
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', 'image')
    .html(contents || '');
}

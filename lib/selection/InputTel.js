/**
 * selection.InputTel() creates &lt;input&gt; element of type tel
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', 'tel')
    .html(contents || '');
}

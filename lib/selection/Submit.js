/**
 * selection.Submit() creates &lt;input&gt; element of type submit
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', 'submit')
    .html(contents || '');
}

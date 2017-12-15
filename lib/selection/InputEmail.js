/**
 * selection.InputEmail() creates &lt;input&gt; element of type email
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
}

/**
 * selection.InputPassword() creates &lt;input&gt; element of type password
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', type)
    .html(contents || '');
}

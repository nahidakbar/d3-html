/**
 * selection.Checkbox() creates &lt;input&gt; element of type checkbox
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', 'checkbox')
    .html(contents || '');
}

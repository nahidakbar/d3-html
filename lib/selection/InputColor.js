/**
 * selection.InputColor() creates &lt;input&gt; element of type color
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', 'color')
    .html(contents || '');
}

/**
 * selection.InputNumber() creates &lt;input&gt; element of type number
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', 'number')
    .html(contents || '');
}

/**
 * selection.InputReset() creates &lt;input&gt; element of type reset
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', 'reset')
    .html(contents || '');
}

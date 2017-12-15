/**
 * selection.InputRadio() creates &lt;input&gt; element of type radio
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .attr('type', 'radio')
    .html(contents || '');
}

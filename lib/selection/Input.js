/**
 * selection.Input() creates &lt;input&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('input')
    .html(contents || '');
}

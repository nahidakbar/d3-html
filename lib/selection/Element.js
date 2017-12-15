/**
 * selection.Element() creates &lt;element&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('element')
    .html(contents || '');
}

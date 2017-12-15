/**
 * selection.Col() creates &lt;col&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('col')
    .html(contents || '');
}

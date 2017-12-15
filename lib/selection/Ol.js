/**
 * selection.Ol() creates &lt;ol&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('ol')
    .html(contents || '');
}

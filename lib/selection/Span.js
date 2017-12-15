/**
 * selection.Span() creates &lt;span&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('span')
    .html(contents || '');
}

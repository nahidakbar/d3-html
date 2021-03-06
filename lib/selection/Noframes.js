/**
 * selection.Noframes() creates &lt;noframes&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('noframes')
    .html(contents || '');
}

/**
 * selection.Mark() creates &lt;mark&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('mark')
    .html(contents || '');
}

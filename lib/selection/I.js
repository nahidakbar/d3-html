/**
 * selection.I() creates &lt;i&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('i')
    .html(contents || '');
}

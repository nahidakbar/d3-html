/**
 * selection.B() creates &lt;b&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('b')
    .html(contents || '');
}

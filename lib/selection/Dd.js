/**
 * selection.Dd() creates &lt;dd&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('dd')
    .html(contents || '');
}

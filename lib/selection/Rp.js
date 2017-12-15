/**
 * selection.Rp() creates &lt;rp&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('rp')
    .html(contents || '');
}

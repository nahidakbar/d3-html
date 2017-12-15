/**
 * selection.Wbr() creates &lt;wbr&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('wbr')
    .html(contents || '');
}

/**
 * selection.Abbr() creates &lt;abbr&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('abbr')
    .html(contents || '');
}

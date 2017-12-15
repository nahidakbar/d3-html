/**
 * selection.Noscript() creates &lt;noscript&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('noscript')
    .html(contents || '');
}

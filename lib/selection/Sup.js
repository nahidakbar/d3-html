/**
 * selection.Sup() creates &lt;sup&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('sup')
    .html(contents || '');
}

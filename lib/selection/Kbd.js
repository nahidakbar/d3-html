/**
 * selection.Kbd() creates &lt;kbd&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('kbd')
    .html(contents || '');
}

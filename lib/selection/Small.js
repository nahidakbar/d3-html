/**
 * selection.Small() creates &lt;small&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('small')
    .html(contents || '');
}

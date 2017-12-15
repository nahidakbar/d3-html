/**
 * selection.Details() creates &lt;details&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('details')
    .html(contents || '');
}

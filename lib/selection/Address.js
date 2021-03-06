/**
 * selection.Address() creates &lt;address&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('address')
    .html(contents || '');
}

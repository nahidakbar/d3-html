/**
 * selection.Sub() creates &lt;sub&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('sub')
    .html(contents || '');
}

/**
 * selection.Q() creates &lt;q&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('q')
    .html(contents || '');
}

/**
 * selection.Thead() creates &lt;thead&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('thead')
    .html(contents || '');
}

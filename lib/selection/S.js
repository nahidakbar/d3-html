/**
 * selection.S() creates &lt;s&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('s')
    .html(contents || '');
}

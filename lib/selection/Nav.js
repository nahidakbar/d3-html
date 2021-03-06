/**
 * selection.Nav() creates &lt;nav&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('nav')
    .html(contents || '');
}

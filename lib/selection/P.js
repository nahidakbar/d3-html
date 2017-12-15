/**
 * selection.P() creates &lt;p&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('p')
    .html(contents || '');
}

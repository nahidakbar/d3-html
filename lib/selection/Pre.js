/**
 * selection.Pre() creates &lt;pre&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('pre')
    .html(contents || '');
}

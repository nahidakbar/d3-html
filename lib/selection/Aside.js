/**
 * selection.Aside() creates &lt;aside&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('aside')
    .html(contents || '');
}

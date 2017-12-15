/**
 * selection.Article() creates &lt;article&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('article')
    .html(contents || '');
}

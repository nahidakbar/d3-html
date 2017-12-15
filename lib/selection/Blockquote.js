/**
 * selection.Blockquote() creates &lt;blockquote&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('blockquote')
    .html(contents || '');
}

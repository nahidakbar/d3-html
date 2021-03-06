/**
 * selection.Ins() creates &lt;ins&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('ins')
    .html(contents || '');
}

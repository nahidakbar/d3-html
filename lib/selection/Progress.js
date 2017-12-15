/**
 * selection.Progress() creates &lt;progress&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('progress')
    .html(contents || '');
}

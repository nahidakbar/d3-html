/**
 * selection.Summary() creates &lt;summary&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('summary')
    .html(contents || '');
}

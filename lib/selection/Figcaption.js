/**
 * selection.Figcaption() creates &lt;figcaption&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('figcaption')
    .html(contents || '');
}

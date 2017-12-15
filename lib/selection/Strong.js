/**
 * selection.Strong() creates &lt;strong&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('strong')
    .html(contents || '');
}

/**
 * selection.Main() creates &lt;main&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('main')
    .html(contents || '');
}

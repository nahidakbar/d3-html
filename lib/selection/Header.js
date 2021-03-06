/**
 * selection.Header() creates &lt;header&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('header')
    .html(contents || '');
}

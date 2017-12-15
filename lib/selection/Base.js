/**
 * selection.Base() creates &lt;base&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('base')
    .html(contents || '');
}

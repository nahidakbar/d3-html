/**
 * selection.Button() creates &lt;button&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('button')
    .html(contents || '');
}

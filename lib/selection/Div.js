/**
 * selection.Div() creates &lt;div&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('div')
    .html(contents || '');
}

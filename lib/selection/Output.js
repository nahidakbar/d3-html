/**
 * selection.Output() creates &lt;output&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('output')
    .html(contents || '');
}

/**
 * selection.Li() creates &lt;li&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('li')
    .html(contents || '');
}

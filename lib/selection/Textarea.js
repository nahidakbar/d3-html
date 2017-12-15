/**
 * selection.Textarea() creates &lt;textarea&gt; element
 * @param {string} [contents=''] option content html
 * @return created element
 */
export default function (contents)
{
  return this.append('textarea')
    .html(contents || '');
}

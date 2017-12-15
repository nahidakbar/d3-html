/**
 * selection.Accesskey() creates &lt;input&gt; element of type accesskey
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('accesskey');
  }
  else
  {
    return this.attr('accesskey', value);
  }
}

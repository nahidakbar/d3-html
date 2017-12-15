/**
 * selection.Accept() creates &lt;input&gt; element of type accept
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('accept');
  }
  else
  {
    return this.attr('accept', value);
  }
}

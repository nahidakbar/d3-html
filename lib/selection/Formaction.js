/**
 * selection.Formaction() creates &lt;input&gt; element of type formaction
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('formaction');
  }
  else
  {
    return this.attr('formaction', value);
  }
}

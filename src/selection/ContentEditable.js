/**
 * selection.ContentEditable() creates &lt;input&gt; element of type contentEditable
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('contentEditable');
  }
  else
  {
    return this.attr('contentEditable', value);
  }
}

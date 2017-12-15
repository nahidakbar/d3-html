/**
 * selection.Dropzone() creates &lt;input&gt; element of type dropzone
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('dropzone');
  }
  else
  {
    return this.attr('dropzone', value);
  }
}

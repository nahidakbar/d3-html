/**
 * selection.Download() creates &lt;input&gt; element of type download
 * @param {string} [value=''] option content html
 * @return created element
 */
export default function (value)
{
  if (arguments.length < 1)
  {
    return this.attr('download');
  }
  else
  {
    return this.attr('download', value);
  }
}

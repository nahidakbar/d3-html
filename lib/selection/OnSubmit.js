/**
 * selection.OnSubmit() attaches or returns a listner to selection
 * @param {string} [callback] callback function
 * @param {boolean} [capture] capture option
 * @return selected if setting or current value
 */
export default function (callback, capture)
{
  if (arguments.length < 1)
  {
    return this.on('submit');
  }
  else if (arguments.length < 2)
  {
    return this.on('submit', callback);
  }
  else
  {
    return this.on('submit', callback, capture);
  }
}

/**
 * selection.Children() syncs children of an element to array of data elements
 * @param {string} [arrayData=''] option content html
 * @param {string} [childElementTagName=''] option content html
 * @param {string} [updateCallback=''] option content html
 * @return created element
 */
export default function (arrayData, childElementTagName, updateCallback)
{
  var parent = this;
  // remove stray elements
  parent.selectAll(childNodesSelector)
    .filter(function ()
    {
      return this.tagName !== childElementTagName;
    })
    .remove();
  // synchronise intended elements
  var rows = parent.selectAll(childNodesSelector)
    .data(arrayData);
  rows.exit()
    .remove(); // Note: not transitioning here as the effect is a bit weird.
  updateCallback(rows.enter()
    .append(childElementTagName), true);
  updateCallback(rows, false);
  return this;
}

function childNodesSelector ()
{
  return this.childNodes;
}
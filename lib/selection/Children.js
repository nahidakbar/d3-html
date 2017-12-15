/**
 * selection.Children() syncs children of an element to array of data elements
 *
 * Basically, is a wrapper for d3-selection enter and exit pattern.
 *
 * @param {string} [arrayData=''] array of data
 * @param {string} [childElementTagName=''] top level tag name
 * @param {string} [updateCallback=''] callback called to build or update child element
 * @return selected
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

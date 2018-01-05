/**
 * d3.HashStateRouter() Simple router that relies on window hash value.
 *
 * TODO: Document in more detail
 *
 * @param {object} [context={}] configuration
 * @param {boolean} [dontRun=false] dont start
 * @return updated context with additional methods
 */
export default function (context, dontRun)
{
  context.State = function (param, value)
  {
    if (arguments.length > 1)
    {
      if (!value)
      {
        delete context.params[param];
      }
      else
      {
        context.params[param] = value;
      }
      history.pushState({}, document.title, context.Link(context.params));
    }
    return context.params[param] || '';
  };

  context.StateChangeLink = function (param, value)
  {
    var params = {};
    for (var field in context.params)
    {
      params[field] = context.params[field];
    }
    if (typeof param !== 'string')
    {
      for (var field in param)
      {
        params[field] = param[field];
      }
    }
    else
    {
      params[param] = value;
    }
    return context.Link(params)
  };

  context.Link = function (params)
  {
    var output = '#';
    for (var param in params)
    {
      if (param && params[param] !== undefined && params[param] !== '')
      {
        output += param + '=' + params[param] + '&';
      }
    }
    output = output.replace(/[?&]$/, '');
    return output;
  };

  context.HashParams = function (input)
  {
    var params = {
      page: ''
    };
    input.substr(1)
      .split('&')
      .map(function (x)
      {
        return x.split('=', 2);
      })
      .forEach(function (fragment)
      {
        params[fragment[0]] = fragment[1] || true;
      });
    return params;
  };

  context.SearchParams = function (input)
  {
    input.substr(1)
      .split('&')
      .map(function (x)
      {
        return x.split('=', 2);
      })
      .forEach(function (fragment)
      {
        params[fragment[0]] = fragment[1] || true;
      });
  };

  context.Reload = function ()
  {
    if (window.location.search)
    {
      window.location.hash = context.Link(context.SearchParams(window.location.search));
      window.location.search = '';
      return;
    }
    else
    {
      context.params = context.HashParams(window.location.hash);
    }
    (context.pages[context.params.page || ''] || context.pages['404'])(context);
  };

  context.params = context.params || {};
  if (!dontRun)
  {
    window.onhashchange = function ()
    {
      context.Reload();
    };

    context.Reload();
  }
  return context;
}

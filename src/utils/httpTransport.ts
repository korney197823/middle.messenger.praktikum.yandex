enum METHODS  {
  GET = 'GET',
  POST ='POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
};

function queryStringify(data:Record<string, unknown>) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}

type Options  = {
  method?: METHODS,
  data?: any,
  headers?: object,
  timeout?: number
}

class HTTPTransport {
  get = (url: string, options:Options = {}) => {

    return this.request(url, {...options, method: METHODS.GET}, options.timeout);
  };

  post = (url: string, options:Options = {}) => {
    return this.request(url, {...options, method: METHODS.POST}, options.timeout);
  };

  put = (url: string, options:Options = {}) => {
    return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
  };

  delete = (url: string, options:Options = {}) => {
    return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
  };

  request = (url: string, options:Options = {}, timeout = 5000) => {
    const {headers = {}, method, data} = options;

    console.log('OPTIONS', options)

    return new Promise(function(resolve, reject) {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method,
        isGet && !!data
          ? `${url}${queryStringify(data)}`
          : url,
      );

      Object.keys(headers).forEach(key => {
        // @ts-ignore
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function() {
        const { status, response } = xhr
        if (status === 200 || status === 201) {
          return resolve(JSON.parse(response))
        }
        return reject(JSON.parse(response))
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}

export default HTTPTransport



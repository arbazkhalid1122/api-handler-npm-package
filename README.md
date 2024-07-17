## About 
A lightweight library for handling API requests using Axios.

## Installation
Install the package using npm:
 ```npm install api-requests-handling```


## Usage
This package provides a simple function to make HTTP requests using Axios.

## Importing the Package

```import fetchData from 'api-requests-handling';```

## GET Method

```js 
const fetchDataExample = async () => {
  try {
    const data = await fetchData({
      url: 'https://api.example.com/data',
      method: 'get',
      token: 'your-token-here',
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
fetchDataExample();
 ```
## POST METHOD

```js
const postDataExample = async () => {
  try {
    const data = await fetchData({
      url: 'https://api.example.com/data/',
      method: 'post',
      payload: {
        key1: 'value1',
        key2: 'value2',
      },
      token: 'your-token-here',
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

postDataExample();
```

## DELETE METHOD
```js
const deleteDataExample = async () => {
  try {
    const data = await fetchData({
      url: 'https://api.example.com/data/1',
      method: 'delete',
      token: 'your-token-here',
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

deleteDataExample();
```

## API

* The fetchData function accepts an options object with the following properties:
* url (string): The URL of the API endpoint.
* method ('get' | 'post' | 'put' | 'delete'): The HTTP method to use for the request.
* payload (optional): The data to send with the request. Required for POST and PUT requests.
* token (optional): The authorization token to include in the request headers.
 # api-handler-npm-package

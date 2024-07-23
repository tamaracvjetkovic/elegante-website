import { useEffect, useState } from 'react';


const useFetch = ( url ) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then(response =>  {
          if (!response.ok) {
            throw Error('could not fetch the data');
          }
          return response.json()
        })
        .then((data) => {
          setData(data);
          setLoaded(true);
          setError(null);
        })
        .catch(err => {
          if (err.name === "AbortError") {
            // abort error
            // console.log("fetch aborted")
          } else {
            // network error or server error
            setError(err.message);
            setLoaded(false);
          }       
        });
    }, 1000);

    return () => abortController.abort();
    /* 
      fetch won't carry on, it will pause
      we still get the error, when we abort the fetch, the fetch throws an error,
      and we catch it in .catch(err =>..)

      1. if the component using this hook is removed from the DOM,
         the cleanup function will abort any ongoing fetch request

      2. if the url changes, the cleanup function will abort the 
         previous fetch request before starting a new one. 
    */
  }, [url]);
    /* 
      [] - empty dependency array
           UseEffect only runs the function after the first inital render
           (if the state changes, it won't run again)
     
      [name] - UseEffect runs everytime when variable 'name' is changed
               anything other than that changed => it won't run
               (because it's not in the dependency array, only 'name' is in there)
    */
  return { data, loaded, error, setData };
}

export default useFetch


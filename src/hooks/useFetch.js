import { useEffect, useState } from 'react';


const useFetch = ( url ) => {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then(res =>  {
              if (!res.ok) {
                throw Error('could not fetch the data');
              }
              return res.json()
            })
            .then((data) => {
              console.log(data);
              setData(data);
              setLoaded(true);
              setError(null);
            })
            .catch(err => {
              setError(err.message);
              setLoaded(false);
            });
        }, 1000);

        //return () => {console.log("cleanup\n");}
      }, []);
      /* [] - empty dependency array, useEffect se pokrene
         samo nakon prvobitnog renderovanja
         ako se promijeni state, nece se pokrenuti opet
         only runs the function after the first inital render */
      /* [ name ] - npr. pokrenuce se svaki put kad se promijeni
        'name' promjenljiva, bilo sta ostalo nece pokrenuti, \
        jer nije u dependency array, nego je samo name tu.. */
      
      return { data, loaded, error, setData };
}

export default useFetch


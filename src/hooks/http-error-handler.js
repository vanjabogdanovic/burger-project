import {useState, useEffect} from 'react';

export default axiosHttpClient => {
    const [error, setError] = useState(null);

    const reqInterceptor = axiosHttpClient.interceptors.request.use(req => {
        setError(null);
        return req;
    });
    const resInterceptor = axiosHttpClient.interceptors.response.use(res => res, err => {
        setError(err);
    });

    useEffect(() => {
        return () => {
            axiosHttpClient.interceptors.request.eject(reqInterceptor);
            axiosHttpClient.interceptors.response.eject(resInterceptor);
        }
    }, [reqInterceptor, resInterceptor]);

    const errorConfirmedHandler = () => {
        setError(null);
    };

    return [error, errorConfirmedHandler];
}
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {useState, useEffect} from 'react';

const UseAuthStatus = () => {
    const [loggedIn, setloggedIn] = useState(false);
    const [checkingStatus, setcheckingStatus] = useState(true);

    useEffect(() => {                                                        //useeffect to ask firebase is he user  authinticated or not
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {                               // thes methode is gone give me the user
            if(user){
                setloggedIn(true);
            }
                setcheckingStatus(false);
            });
        }, [])                                                                  
    
        return {loggedIn, checkingStatus}
}

export default UseAuthStatus;

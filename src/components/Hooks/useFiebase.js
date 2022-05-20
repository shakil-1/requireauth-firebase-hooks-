
import app from '../../Firebase.init';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';


const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();
const useFiebase = () => {
    const [user, setUser] = useState({});
    const signinwidthgoogle = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user);

            })
            .catch(error => {
                console.error(error)
            })
    }
    const handelSignout = () => {
        signOut(() => { })
            .catch(error => {
                console.error(error)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    return { user, signinwidthgoogle, handelSignout }


};

export default useFiebase;
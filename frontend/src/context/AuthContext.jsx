import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem("currentUser")
    );

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem("currentUser");
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
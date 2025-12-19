/*
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate;
    let expiryTimeout: number;

    const startTokenExpiryTimer = (expiryTime: number) => {
        clearTimeout(expiryTimeout);
        const timeUntilExpiry = expiryTime - Date.now();

        if (timeUntilExpiry > 60000) {
            expiryTimeout = setTimeout(() => {
                handleRefresh();
            }, timeUntilExpiry - 60000);
        } else {
            navigate("/login");
        }
    };

    const handleRefresh = () => {
        fetch('/token-refresh', {
            method: "POST",
            credentials: 'include',
        })
            .then(response => {
                if (!response.ok) throw new Error('Failed to refresh token');
                return response.json();
            })
            .then(({ access_token, exp }) => {
                localStorage.setItem("access_token", access_token);
                startTokenExpiryTimer(exp * 1000);
            })
            .catch(() => navigate("/login"));
    };

    return (
        <AuthContext.Provider value={{ startTokenExpiryTimer }}>
            {children}
        </AuthContext.Provider>
    );
};
*/
export const AuthMiddleware = ({children,authRequired}) => {
    const token = localStorage.getItem("token");
    
    if (authRequired && !token) {
        window.location.href = "/login"; // Redirect to login if auth is required and no token is present
        return null; // Prevent rendering of children
    }
    
    return children;
}

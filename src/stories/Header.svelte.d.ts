export default Header;
declare const Header: import("svelte").Component<{
    /**
     * The user object
     */
    user?: {
        name: string;
    } | undefined;
    /**
     * The login event handler
     */
    onLogin?: (() => void) | undefined;
    /**
     * The logout event handler
     */
    onLogout?: (() => void) | undefined;
    /**
     * The account creation event handler
     */
    onCreateAccount?: (() => void) | undefined;
}, {}, "">;

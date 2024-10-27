export default Button;
declare const Button: import("svelte").Component<{
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean | undefined;
    /**
     * What background color to use
     */
    backgroundColor?: string | undefined;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large" | undefined;
    /**
     * Button contents
     */
    label: string;
    /**
     * The onclick event handler
     */
    onClick?: (() => void) | undefined;
}, {}, "">;

const AuthForm = function (
    { action }: { action: string },
    { method }: { method: string }
) {
    return (
        <form action={action} method={method}>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <button
                type="submit"
                className="text-emerald-500 bg-blackr rounded-md p-2"
            >
                Login
            </button>
        </form>
    );
};

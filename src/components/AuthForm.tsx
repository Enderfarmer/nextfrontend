const AuthForm = function ({
    action,
    method,
    auth,
}: {
    action: (data: FormData) => unknown;
    method?: string;
    auth: string;
}) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData(e.currentTarget); // Get form data
        action(formData); // Pass the form data to the action function
    };
    return (
        <main>
            <form onSubmit={handleSubmit} method={method || "POST"}>
                <h1>{auth}</h1>
                <input
                    type="text"
                    name="username"
                    className="border-emerald-400 border"
                />
                <br />
                <input
                    type="password"
                    name="password"
                    className="border-emerald-400 border"
                />
                <br />
                <button
                    type="submit"
                    className="text-emerald-500 bg-blackr rounded-md p-2"
                >
                    {auth}
                </button>
            </form>
        </main>
    );
};

export default AuthForm;

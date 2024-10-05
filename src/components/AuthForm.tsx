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
        <main className="flex items-center justify-center border h-28">
            <form
                onSubmit={handleSubmit}
                method={method || "POST"}
                className="px-5 flex flex-col justify-center items-center"
            >
                <h1 className="font-extrabold p-2 text-3xl">{auth}</h1>
                <div className="input-field">
                    <input
                        type="text"
                        name="username"
                        className="border-emerald-400 border rounded p-2 text-lg text-emerald-400"
                        spellCheck="false"
                        autoComplete={auth == "Register" ? "off" : "username"}
                    />
                    <label className="text-emerald-500">Benutzername</label>
                </div>
                <br />
                <div className="input-field">
                    <input
                        type="password"
                        name="password"
                        className="border-emerald-400 border rounded p-2 text-lg text-emerald-400"
                        spellCheck="false"
                        autoComplete={
                            auth == "Register"
                                ? "new-password"
                                : "current-password"
                        }
                    />
                    <label className="text-emerald-500">Passwort</label>
                </div>
                <br />
                {auth === "Register" && (
                    <>
                        <div className="input-field">
                            <input
                                type="password"
                                name="password2"
                                className="border-emerald-400 border rounded p-2 text-lg text-emerald-400"
                                spellCheck="false"
                                autoComplete="off"
                            />
                            <label className="text-emerald-500">
                                Passwort bestätigen
                            </label>
                        </div>
                    </>
                )}
                <br />
                <button
                    type="submit"
                    className="text-emerald-300 bg-black border-emerald-400 border-2 rounded-md p-2 text-lg w-11/12 ml-3"
                >
                    {auth}
                </button>
            </form>
        </main>
    );
};

export default AuthForm;

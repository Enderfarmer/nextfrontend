"use client";
import AuthForm from "@/components/AuthForm";
import { handleAuth } from "@/handleAuth";
const Page = ({}) => {
    return (
        <main>
            <AuthForm action={handleAuth} method="POST" auth="Login" />
        </main>
    );
};

export default Page;

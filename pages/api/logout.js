export default function Home() {
    const router = useRouter();

    const handleLogout = async () => {
        await fetch('/api/logout', { method: 'POST' });
        router.push('/login');
    };

    return (
        <div>
            <h1>Welcome!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

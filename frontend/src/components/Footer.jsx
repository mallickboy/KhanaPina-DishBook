const Footer = () => {
    return (
        <footer className="text-red-500 text-center pt-20 pb-8">
            <p className="text-xl font-bold">KhanaPina</p>
            <p className="text-sm">&copy; {new Date().getFullYear()} KhanaPina. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
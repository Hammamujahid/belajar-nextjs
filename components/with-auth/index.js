export function withAuth(Component) {
    return function withAuth(props){
        const isLogin = true;

        if(!isLogin) return <div>Anda harus login</div>;

        return <Component {...props} />;
    }
};

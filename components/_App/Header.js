import { Menu, Container, Icon, Image} from "semantic-ui-react";
import Link from "next/link";
import Router,{useRouter} from "next/router"
import NProgress from "nprogress"


Router.onRouteChangeStart = () => {NProgress.start()}
Router.onRouteChangeComplete = () => {NProgress.done()}
Router.onRouteChangeError = () => {NProgress.done()}

function Header() {
  const router = useRouter()
  const isUser = true;
  const isAdmin = true;

  function isActive(route){
    return route == router.pathname;

  }
  return (
    <Menu fluid inverted id="menu">
    
      <Container text>
        <Link href="/">
          <Menu.Item header active={isActive("/")}>
            <Image
              src="/static/logo.svg"
              size="mini"
              style={{ marginRight: "1em" }}
            />
            Home
          </Menu.Item>
        </Link>
        <Link href="/cart">
          <Menu.Item header active={isActive("/cart")}>
            <Icon name="cart" size="large" style={{ marginRight: "1em" }} />
            Cart
          </Menu.Item>
        </Link>
        
        { isAdmin ? (<>
        <Link href="/create">
          <Menu.Item header active={isActive("/create")}>
            <Icon
              name="add square"
              size="large"
              
            />
            Create
          </Menu.Item>
        </Link>
        </>):(<></>)}

        { isUser ? (
          <>
            <Link href="/account">
              <Menu.Item header active={isActive("/account")}>
                <Icon name="user" size="large"  />
                Account
              </Menu.Item>
            </Link>

            <Menu.Item>
              <Icon
                name="sign out"
                size="large"
                
              />
              Logout
            </Menu.Item>
          </>
        ) : (
          <>
            <Link href="/login">
              <Menu.Item header active={isActive("/login")}>
                <Icon
                  name="sign in"
                  size="large"
                  
                />
                Login
              </Menu.Item>
            </Link>

            <Link href="/signup">
              <Menu.Item header active={isActive("/signup")}>
                <Icon
                  name="signup"
                  size="large"
                  
                />
                Signup
              </Menu.Item>
            </Link>
          </>
        )}
      </Container>
    </Menu>
  );
}

export default Header;
